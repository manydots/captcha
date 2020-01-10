var express = require('express');
var app = express();
var path = require('path');
var router = require('./routes/index');
var port = process.env.port || 8080;

//使用路由
app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs");
app.use(router);


app.listen(port, () => {
    console.log('Node Server listening at port %d.', port);
});