let fs = require("fs");
let http = require("http");
let recCopy = require("recursive-copy");
let rimraf = require("rimraf");

(async () => {
    let rootFolder = __dirname + "/../app_release";

    console.log("Copying files inside app_release folder...");
    await recCopy(__dirname + "/../app", rootFolder, { overwrite: true });
    console.log("Copy done");

    console.log("Removing .git folder...");
    if (fs.existsSync(rootFolder + "/.git")) {
        rimraf(rootFolder + "/.git", () => { });
    }
    console.log("Removing done");

    let skipFiles = ["ejs.min.js"];

    function obfuscateFile(path) {
        let data = fs.readFileSync(path);

        let options = {
            hostname: 'javascript-obfuscator-api.herokuapp.com',
            port: 80,
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'Content-Length': data.length
            }
        }

        let responseBuffer = "";
        let req = http.request(options, (res) => {
            res.on('data', (d) => {
                responseBuffer += d;
            });

            res.on("end", () => {
                fs.writeFileSync(path, JSON.parse(responseBuffer).data);
                console.log("Obfuscated: " + path);
            });

        });

        req.write(data);
        req.end();
    }

    function readFilesInFolder(folder) {
        fs.readdir(folder, (err, files) => {
            files.forEach(file => {
                if (fs.lstatSync(folder + "/" + file).isDirectory()) {
                    readFilesInFolder(folder + "/" + file);
                } else {
                    if (file.substr(-3) == ".js" && skipFiles.indexOf(file) == -1) {
                        obfuscateFile(folder + "/" + file);
                    }
                }
            });
        });
    }

    readFilesInFolder(rootFolder);
})()

