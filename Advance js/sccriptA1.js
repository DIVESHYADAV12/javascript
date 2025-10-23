// Scope
// where can a variable and function can be accesed

// Functional scope, global Scope, block scope

//Functional scope => can only be accesed within the function
function a (){
    var b = 12 //accesible only within function a
}
// Global scope => can be accesed anywhere within the whole code
var A = 12 // accesed anywhere within the code 

// Block scope => can only be accesed within the curly braces {}
if(true){
    let c = 11 // accesed within the block only
}

// Execution Context

// Every time a function is called, a new execution context is created for that function.
// Each function call gets its own execution context.
// It handles:
// Function’s own variables
// Parameters
// Inner functions

// 1. Creation Phase
// Memory is allocated for variables and functions.
// Variables are set to undefined
// Functions are stored as they are.

// 2. Execution Phase
// Code runs line by line
// Variables get actual values
// Functions are executed when called.


// Dynamic scoping vs Lexical Scoping

//lexical scoping => variable or function scope is determined by where it is written followed in javascript
function ab(){
    let a = 12
    function ba(){
        console.log(a)
    }
}

// Dynamic scoping => scope is determined by from where it is called


// Closures => function that returns a funtion and the function must uses variable of the parent functon
function aa (){
    let d = 1
    return function(){
        console.log(d)
    }
}

//count
function count(){
    let c = 0
    return function(){
        c++
        console.log(c)
    }
}
let fun = count()
fun()
fun()
let fun2 = count()
fun2()
fun2()
fun2()
fun2()

// Encaptulatin through clouser
function click (){
    let c = 0
    return function(){
        if (c<5){
        c++
        console.log(c)
    }
        else {
            console.error("clicked enough")
        }
    }
}
let cl = click()
cl()
cl()
cl()
cl()
cl()
cl()
