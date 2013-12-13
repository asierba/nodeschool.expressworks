var express = require('express'),
	path = require('path')
	app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'))

app.get('/home', function(req, res) {
	res.render(process.argv[3], {date: new Date().toDateString()})
});

app.listen(process.argv[2]);
