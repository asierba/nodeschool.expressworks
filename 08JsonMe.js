var express = require('express'),
	fs = require('fs'),
	app = express();



app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function (err, data) {
		if (err) throw err;

		var response = JSON.parse(data);
		res.json(response);
	});	
});

app.listen(process.argv[2]);