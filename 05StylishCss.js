var express = require('express'),
	path = require('path'),
	app = express();
	
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('stylus').middleware(process.argv[3] || __dirname + '/public'));

app.listen(process.argv[2] || 3000);