var express 			= require('express'),
    app     			= express(),
    bodyParser			= require('body-parser'),
    mongoose			= require('mongoose'),
    meetupsController 	= require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://ec2-52-25-98-186.us-west-2.compute.amazonaws.com:27017/mean-demo');
app.use(bodyParser());
app.get('/', function(req, resp) 
	{
		resp.sendFile(__dirname + '/client/views/index.html');
	});

app.use('/js', express.static(__dirname + '/client/js'));

//Rest API
app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.listen(3000,function()
	{
		console.log('I am listening');

	});

//console.log("Hello from NodeJs");