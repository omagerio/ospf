class Crypt {
    crypt(text, key) {

        let rand = "" + (Math.floor(1000000000 + Math.random() * 999999999));

        let i = 0;
        let rand_out = "";
        while (i < rand.length) {
            let char = rand.charCodeAt(i) + key.charCodeAt(i % key.length);
            rand_out += char + ".";
            i++;
        }

        let text_out = "";
        i = 0;
        key = rand + key;
        while (i < text.length) {
            let char = text.charCodeAt(i) + key.charCodeAt(i % key.length);
            text_out += char + ".";
            i++;
        }

        out = btoa(rand_out + text_out.substring(0, text_out.length - 1));
        return out;
    }

    decrypt(text, key) {
        text = atob(text);
        let chars = text.split(".");

        let rands = chars.slice(0, 10);
        let rand = "";
        let i = 0;
        for (let char of rands) {
            rand += String.fromCharCode(char - key.charCodeAt(i % key.length));
            i++;
        }

        key = rand + key;
        i = 0;
        let out = "";
        let text_chars = chars.slice(10);
        for (let char of text_chars) {
            out += String.fromCharCode(char - key.charCodeAt(i % key.length));
            i++;
        }
        return out;
    }
}