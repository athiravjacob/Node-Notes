// function outerFunction() {
//     var outerVariable = 'I am outside!';
    
//     function innerFunction() {
//       console.log(outerVariable);
//     }
    
//     return innerFunction;
//   }
  
//   const myFunction = outerFunction();
//   myFunction();
  

// change var with let to get diff output

// function createFunctions() {
//     var arr = [];
//     for (var i = 0; i < 3; i++) {
//       arr.push(function() {
//         console.log(i);
//       });
//     }
//     return arr;
//   }
  
//   const functions = createFunctions();
//   functions[0]();
//   functions[1]();
//   functions[2]();
  

//************************************************************** */
function createFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
      (function(i) {
        arr.push(function() {
          console.log(i);
        });
      })(i);
    }
    return arr;
  }
  
  const functions = createFunctions();
  functions[0]();
  functions[1]();
  functions[2]();
  