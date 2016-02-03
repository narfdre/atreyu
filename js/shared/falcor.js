angular
  .module('Atreyu')
  .service('Falcor', Falcor);

function Falcor(){

  var models = {};

  function get(source, path, ids, keys){
    if(!models[source]){
      models[source] = new falcor.Model({source: new falcor.HttpDataSource(source) });
    }
    var model = models[source];
    var args = path;
    if(ids){
      args += '["' + ids.join('","') + '"]';
    }
    if(keys){
      args += '["' + keys.join('","') + '"]';
    }
    console.log(args);

    return model.get(args)
      .then(function(response) {
        return response.json;
      });
  }


  return {
    get: get
  };
}
