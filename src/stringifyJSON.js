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
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }

  // array
  if (Array.isArray(obj)) {    
    return '[' + obj.map(element => stringifyJSON(element)).join() + ']';
  }
  // object
  else if (obj && typeof obj === "object") {
    if(Object.keys(obj).length === 0) {
      return "{}";
    } else {
      result = [];
      for(var key in obj) {
        if(typeof obj[key] !== "function" && typeof obj[key] !== "undefined") {
          result.push('' + stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
        }
      }
    }
      return "{" + result.join() + "}";  
  }

  else {
    return '' + obj;
  }
};
