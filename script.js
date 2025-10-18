// Variable and Decleration
// 1st way
var a = 12;      // declare and initialize
var b;          //declare
// 2nd way
let c = 11;
let d;
// 3rd way
const e = 10;


// reassingment and redecleration
var f = 9;
f = 8;      // reassignment
var f = 7;  // redeclare allowed for var

let g = 6;
g = 5;       // reassignment
// let g = 4; // redeclare not allowed for let


// scope (global,block,functional)
var h = 4; // globally available throughout the code
function add(){
    var i = 3; // available throughout the function
}
{
    var j = 3; // does not restricted to block
    let k = 2; // available within the block only
}


// Temporal dead zone
console.log(l)
let l = 1;  // tdz is when you try to access element before you try to initialize it not applicable for var.


