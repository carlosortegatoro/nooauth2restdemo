var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);
app.get('/get',getResponse);

function getResponse(req, res, next) {
	res.json({ message : 'everything is ok'});
}


console.log('todo list RESTful API server started on: ' + port);
