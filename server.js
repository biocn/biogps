var express = require('express')
var app = express();
 
app.configure(function(){
    app.set('port', 18080);
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('expressdemo'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.errorHandler());
});
 
app.get('/ejs/:str', function(request, response){
    var testStr = request.params.str;
    response.render('ejstest.ejs', {title: testStr});
});
 
app.get('/jade/:str', function (request, response) {
    var testStr = request.params.str;
    response.render('jadetest.jade', {title: testStr});
});
 
app.listen(18080);