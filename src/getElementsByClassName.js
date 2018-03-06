// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];  
  var body = document.body;
  var children = body.children;
  console.log(children);
  for (var i=0; i < children.length; i++) {
    console.log('hello', children[i].classList)
    if (children[i].classList.contains(className)) {
      result.push(children[i])
    }
  }
};
