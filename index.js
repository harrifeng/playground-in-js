var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

/* serves main page */
app.get("/", function(req, res) {
    res.sendfile('index.html');
});

app.post("/test", function(req, res) {
    /* some server side logic */
    console.log(req.body.name);
    res.send("content is: " + req.body.hello);
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res) {
    console.log('static file request : ' + req.params);
    res.sendfile(__dirname + req.params[0]);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
