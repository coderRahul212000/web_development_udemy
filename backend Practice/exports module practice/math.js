// const add = (x,y) => x+y;
// const PI = 3.14159;

// const square = x => x*x ;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square; 

// module.exports is an object here on which we are providing properties

//method 2 for exporting

// const math = {
//     add: add,
//     PI: PI,
//     sqaure: square
// }

// module.exports = math;



//method 3 for exporting


// module.exports.add = (x,y) => x+y;
// module.exports.PI = 3.14159;

// module.exports.square = x => x*x ;

//method 4 for exporting

const add = (x,y) => x+y;
const PI = 3.14159;

const square = x => x*x ;
exports.square = square;
exports.PI = PI;
exports.add = add;

