async function init() {
    let http = require('http');
    let fs = require("fs");
    let mime = require("mime-types");
    let port = process.env.PORT || 5000;
    const open = require('open');

    var server = http.createServer(
        function (request, response) {
            let url = request.url != "/" ? request.url : "/index.html";
            url = unescape(url);
            let qsPosition = url.indexOf("?");
            if (qsPosition > -1) {
                url = url.substr(0, qsPosition);
            }
            let path = __dirname + "/../app" + url;

            if (fs.existsSync(path)) {
                response.setHeader("Content-Type", mime.lookup(path));
                response.setHeader("Cache-Control", "no-cache");
                let fileContent = fs.readFileSync(path);
                response.write(fileContent, "utf-8");
            } else {
                console.log("Not found", path);
                response.write("", "utf-8");
            }

            response.end();
        }
    );

    server.listen(port, function () {
        console.log("Opening: http://localhost:" + port);
        open("http://localhost:" + port);
    });
}
init();