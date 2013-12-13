var express = require('express'),
	app = express();

app.use(express.urlencoded());

app.get('/form', function(req, res) {	
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', body.length);
	res.end('<form method=\'post\'><input name="str"/></form>');
}).post('/form', function(req, res) {
	res.end(req.body.str.split('').reverse().join(''));
}).listen(3000);