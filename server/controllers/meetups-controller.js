var Meetup = require ('../models/meetup');

module.exports.create = function (req, resp)
{
	//console.log(req.body);
	var meetup = new Meetup(req.body);
	meetup.save(function (err, result){

		resp.json(result);
	});
}
module.exports.list = function (req, resp)
{
	Meetup.find({}, function(err, result){

		resp.json(result);

	});
}