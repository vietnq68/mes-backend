var express = require('express');

//Generic CRUD Route factory
module.exports = function(model) {
	var router = express.Router();
	var modelName = model.modelName.toLowerCase();

	router.get('/',function(req,res) {
		var filter = {}
		for (var key in req.query) {
    	var value = req.query[key];
			filter[key] = value
		}
		if (Object.keys(filter).length  > 0){
			return model.findOne(filter,function(err,instance){
				return res.json(instance);
			})
		}
		return model.find({}).then(function(data){
			return res.json(data);
		})
	});

	router.post('/',function(req,res) {
		return model.create(req.body).then(function(data) {
			return res.json(data);
		})
	});

	router.get('/:id',function(req,res){
		var filter = {}
		filter['_id'] = req.params.id;
		return model.findOne(filter,function(err,instance){
			return res.json(instance);
		})
	})

	router.put('/:id',function(req,res) {
		var filter = {}
		filter['_id'] = req.params.id;
		data = req.body;
		return model.findOne(filter,function(err,instance) {
			for(var attr in data) {
				if(attr!=='_id') {
					instance[attr] = data[attr];
				}
			}
			return instance.save(function(err,updated) {
				return res.json(updated);
			})
		})
	});

	router.delete('/:id',function(req,res) {
		var filter = {};
		filter['_id'] = req.params.id;
		return model.remove(filter,function(err) {
			return res.status(200).end();
		})
	})

	return router;
}
