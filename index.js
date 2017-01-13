/**
 * Created by kate on 12/01/17.
 */
var http = require('http');
var express = require('express');
var config = require('config-node')();
var App = require('./server/App');


var app = new App();

app.use((req, res) => {
    console.log("url", req.url);
    console.log("method", req.method);
});

app.use((req, res) => {
    console.log(req.headers);
    res.end("Hello World");
});
app.start(config.host, config.port, () => console.log("listening on" + config.port));