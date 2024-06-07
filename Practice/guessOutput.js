// setTimeout(() => {
//     console.log('Timeout 1');
//   }, 100);
  
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 50);
  
//   setTimeout(() => {
//     console.log('Timeout 3');
//   }, 0);
  
//   console.log('Start');
  
/* **********************Question**************************/
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// process.nextTick(() => {
//   console.log('Next Tick');
// });

// console.log('End');
/******************************QUESTION*******************************/

// console.log('Start');

// Promise.resolve().then(() => {
//   console.log('Promise 1');
// }).then(() => {
//   console.log('Promise 2');
// });

// console.log('End');
// ***********************************************************************

// console.log('Start');

// setImmediate(() => {
//   console.log('Immediate');
// });

// process.nextTick(() => {
//   console.log('Next Tick 1');
// });

// process.nextTick(() => {
//   console.log('Next Tick 2');
// });

// console.log('End');

// *****************************************************

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');

//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log('Promise inside Timeout');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
// }).then(() => {
//   console.log('Promise 2');
// });

// console.log('End');

// ************************************************

// process.nextTick(() => {
//     console.log('Next Tick 1');
//   });
  
//   Promise.resolve().then(() => {
//     console.log('Promise 1');
//   });
  
//   process.nextTick(() => {
//     console.log('Next Tick 2');
//   });
  
//   Promise.resolve().then(() => {
//     console.log('Promise 2');
//   });
  
//   console.log('End');
  
//******************************************************* */

// console.log('Start');

// setImmediate(() => {
//   console.log('Immediate 1');

//   setImmediate(() => {
//     console.log('Immediate 2');
//   });

//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
// });

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// console.log('End');

// ************************************************************************

// console.log('Start');

// async function asyncFunction() {
//   console.log('Async Function Start');
//   await Promise.resolve();
//   console.log('Async Function End');
// }

// asyncFunction();

// process.nextTick(() => {
//   console.log('Next Tick');
// });

// console.log('End');


// *************************************************************

// console.log('Start');

// process.nextTick(() => {
//   console.log('Next Tick 1');

//   process.nextTick(() => {
//     console.log('Next Tick 2');
//   });

//   setImmediate(() => {
//     console.log('Immediate 1');
//   });
// });

// setImmediate(() => {
//   console.log('Immediate 2');
// });

// console.log('End');

// *****************************************************************

// const fs = require('fs');

// console.log('Start');

// fs.readFile(__filename, () => {
//   console.log('File Read');

//   setTimeout(() => {
//     console.log('Timeout');
//   }, 0);

//   setImmediate(() => {
//     console.log('Immediate');
//   });
// });

// setTimeout(() => {
//     console.log('Timeout outside i/o');
//   }, 0);

//   setImmediate(() => {
//     console.log('Immediate outside i/o');
//   });

// console.log('End');

//**************************************************************************** */

const fs = require('fs');

console.log('Start');

fs.readFile(__filename, () => {
  console.log('File Read 1');

  setImmediate(() => {
    console.log('Immediate 1');
  });

  setTimeout(() => {
    console.log('Timeout 1');
  }, 0);

  fs.readFile(__filename, () => {
    console.log('File Read 2');

    setImmediate(() => {
      console.log('Immediate 2');
    });

    setTimeout(() => {
      console.log('Timeout 2');
    }, 0);
  });
});

console.log('End');

















