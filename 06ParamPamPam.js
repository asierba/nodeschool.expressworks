var express = require('express');
var app = express();

app.put('/message/:id', function(req, res) {	
	var id = req.params.id;
	var response = require('crypto')
	    .createHash('sha1')
	    .update(new Date().toDateString().toString() + id)
	    .digest('hex');

	res.end(response);
});
app.listen(process.argv[2]);