class ApiHelper {
    constructor(url) {
        this.url = url;
    }

    /**
     * Makes a GET request to the server. Parameters are placed in the query string.
     * @param {object} parameters
     * @param [{name, value}] headers
     * @returns Server response
     */
    async get(parameters, headers) {
        return await this._call("get", parameters, headers);
    }

    /**
     * Makes a POST request to the server. Parameters are placed in the request body.
     * @param {object} parameters
     * @param [{name, value}] headers
     * @returns Server response
     */
    async post(parameters, headers) {
        return await this._call("post", parameters, headers);
    }

    _call(method, parameters, headers) {
        return new Promise(
            (resolve) => {
                let stringParameters = JSON.stringify(parameters);
                let url = this.url;

                if(headers === undefined){
                    headers = [];
                }

                if (method == "get") {
                    url += "?payload=" + encodeURIComponent(stringParameters);
                }

                let xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.setRequestHeader("Content-type", "application/json;charset=utf8");
                for(let header of headers){
                    xhr.setRequestHeader(header.name, header.value);
                }
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4) {
                        resolve(JSON.parse(xhr.response));
                    }
                };

                if (method == "post") {
                    xhr.send(stringParameters);
                } else {
                    xhr.send();
                }
            }
        );

    }
}