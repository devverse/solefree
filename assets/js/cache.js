var Cache = {};


Cache.get = function(functionName){
    var retrievedObject = localStorage.getItem(functionName);

    if (typeof retrievedObject === 'string' || typeof retrievedObject == undefined){
      return JSON.parse(retrievedObject);
    } else{
       var data = makePost(functionName,'');
       Cache.set(functionName,data);
       return data;
    }
};


Cache.set = function(functionName,data){
  localStorage.setItem(functionName, JSON.stringify(data));
};