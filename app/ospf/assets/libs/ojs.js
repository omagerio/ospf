class ojs {
    static render(template, parameter) {
        let fullText = "%>" + template + "<%"
        let lines = [];
        let oneMatch = null;
        let maxI = 0;

        let regexpText = new RegExp(/(%>)(.*?)(<%)/sg);
        while (oneMatch = regexpText.exec(fullText)) {
            lines.push({
                type: "text",
                index: oneMatch.index,
                value: "__parsed.push(`" + oneMatch[2] + "`);"
            });

            maxI = Math.max(maxI, oneMatch.index);
        }

        let regexpCode = new RegExp(/(<%)(\-*)(.*?)(%>)/sg);
        while (oneMatch = regexpCode.exec(fullText)) {
            lines.push({
                type: "code",
                index: oneMatch.index,
                value: (oneMatch[2] == "-" ? "__parsed.push(" + oneMatch[3] + ");" : oneMatch[3])
            });

            maxI = Math.max(maxI, oneMatch.index);
        }

        let code = [];
        for (let i = 0; i <= maxI; i++) {
            let subcode = lines.find(item => item.index == i);
            if (subcode) {
                code.push(subcode.value);
            }
        }

        let fun = null;
        let names = Object.getOwnPropertyNames(parameter).join(",");

        eval(
            [
                Object.keys({fun})[0],
                ` = function(` + names + `){let __parsed = [];`,
                code.join("\n"),
                `return __parsed.join("");}`
            ].join("")
        );

        let funParameters = [];
        for (let name of names) {
            funParameters.push("parameter." + name);
        }
        let html = "";
        eval([Object.keys({html})[0], " = fun(", funParameters.join(","), ")"].join(""));
        fun = null;
        return html;

        /*let __parsed = [];
        eval(code.join("\n"));
        return __parsed.join("");*/
    }
}