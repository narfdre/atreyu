var mongo = require('promised-mongo');
var db = mongo('hearthside');
var events = db.collection('events');

module.exports.getByIds = function(ids){
  var mongoIds = [];
  ids.forEach(function(id){
    mongoIds.push(mongo.ObjectId(id));
  });

  return events.find({_id: {$in: mongoIds}}).toArray();
};
