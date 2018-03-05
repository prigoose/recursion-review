// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //function
  var result; 
  if (typeof obj === 'function') {
    return;
  } 
  // string

  // array
  // object
  else if (obj && typeof obj === "object") {
    if(Object.keys(obj).length === 0) {
      return "{}";
    } else {
    result = [];
    for(var key in obj) {
      if(typeof obj[key] === "function") {
        return;
      } else {
        result.push('' + key + ":" + obj[key]);
      }
    }  
    }
  }
  // all else
};
