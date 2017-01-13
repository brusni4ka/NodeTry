/**
 * Created by kate on 12/01/17.
 */
var http = require('http');


module.exports = class App {

    constructor() {
        this._middlewares = [];
    };

    start(host, port, callback) {
        http.createServer((request, response)=> {
            this._middlewares.forEach(callback => callback(request,response));
            response.end();
        }).listen(port, host, callback);
    };

    use(fn) {
        this._middlewares = this._middlewares.concat(fn);
    };
    
};