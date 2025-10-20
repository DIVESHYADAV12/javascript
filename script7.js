// Questions
// Q1: whats the differenfce between function declaration and expression in terms of hoisting?
// function declaration in terms of hoisting
a()
function a(){
    console.log("can call function before declaring")
}
// Expression in terms of hoisting
// b()
// let b = function (){
//     console.log("gives error when call function before declaration")
// }

// Q2: consvert given function into arrow function
// function multiply(a,b){
//     return a*b
// }
let multiply = (a,b) => {
    return a*b
}

// Q3: use rest parameter to accept any number of score and return the total
function c(...scr){
    let total = 0
    scr.forEach(function(val){
        total = total + val
    })
    return total
}
console.log(c(12,34,43,56,3,23,4,5,56,45))

// Q4:  fix function using early return
//function checkAge(age){
//     if (age<18){
//         console.log("too young")
//     }else{
//         console.log("Allowed")
//     }
// }
function checkAge(age){
    if(age<18) return console.log("too younge")
        return console.log("Allowed")
}
checkAge(16)

// Q5: can you assign a function to a variable and then call it show how
let d = function (){
    console.log("assigned to a variable")
}
d()

// Q6: pass a function into another function and execute it inside
function e(val){
    val()
}
e(function(){
    console.log("passing a function into another function")
})

// Q7: covert the impure function into pure function
let total = 0
// function addtototal(num){ //impure
//     total += num
// }
function addtototal(num){ //pure
    pure = total
    pure += sum
}

// Q8: convert this normal function into IIFE
//function init(){
//     console.log("Initialized")
// }
(function(){
    console.log("Initialized")
})();
