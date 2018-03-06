// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];  
  // var body = document.body;
  var recursiveFunc = function(node) {
    // current node - does class list exist? if so, does className exist? Push to results
    if (node.classList) {
      if (node.classList.contains(className)) {
        result.push(node);
        console.log('result', result)
      }
    }
    // if children node exists - do the same
    var children = node.childNodes;
    if (children) {
      for (var i = 0; i < children.length; i++) {
      recursiveFunc(children[i]);
      }
    }
  }
  recursiveFunc(document.body);
  return result;
}
//     var children = node.childNodes;
//     if(children !== undefined) {
//       for (var i=0; i < children.length; i++) {
//         var list = children[i].classList;
//         // if(typeof list !== "undefined" && list.length > 0) {
//           if (list && list.contains(className)) {
//             result.push(children[i]);
//           }
//           recursiveFunc(children[i]);
//         // }
//       }
//     }
//   }
//   recursiveFunc(document.body);
//   console.log(result);
//   return result;
// }

