//Functions
// declaration
function hello(){ //functoion statment
    console.log("hello divesh")
}
hello()
let ab=function(){//function expression
}

//arrow function
let fnc = () => {
    console.log("this is fat arrow function")
}
fnc()

//parameters and argument
function add(x,y){
    console.log(x+y)
}
add(34,65)

//default parameters
function addition(v1=0,v2=0){ //default values given
    console.log(v1+v2)
}
addition()

//rest and spread
function abcd(...val){
    console.log(val)
}
abcd(1,2,3,4,5,6,7,8)

//return values
function abc(){
    return "divesh"
}
console.log(abc())

//First class Functions
function sub(val){ // This is Higher order function
    val()
}
sub(function (){
    console.log("hey")
})

//Higher order Function
//Those function which return or accept function as their parameter is called higher order function
function aba(){
    return function(){
        console.log("hello")
    }
}
aba()()

// pure vs impure funbction
//pure ->  those function which does not changes the value 
let a = 10
function abab(){
    console.log("doesnot changes the value")
}
//impure -> those function which changes the value is called impure function
function aabb(){
    a++
    console.log("changes the value",a)
}

//closure ->  those function whic return a function and also uses variable of the parent function
function bbaa(){
    let b = 21
    return function(){
        console.log(b)
    }
}

// Lexical Scoping
// Lexical scoping means that a function’s scope is determined by where it is written in the code, not by where it is called
function baba(){
      function inner(){
        console.log("inner function can only be used inside")
        inner() // scope only in baba
      }
}

// IIFE (immediate invoked function expression)
(function(){

})();
