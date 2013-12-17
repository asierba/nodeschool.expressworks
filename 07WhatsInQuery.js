var express = require('express'),
	app = express();

app.get('/search', function(req, res) {
	var response = {};

	for(variable in req.query) {
		response[variable] = req.query[variable];
	}

	res.send(response);
});
app.listen(process.argv[2]);