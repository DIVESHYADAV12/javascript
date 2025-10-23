// This Keyword
// value or nature changes depends on where it is used

// this in global scope, function, method, event handler, class

//global scope
console.log(this) // value is window

//Function
function ab(){
    console.log(this) // value is window
}
ab()

//Method => function defined within object
let obj={
    name:"divesh",
    sayname:function(){
        console.log(this) // value is object
    } 
}
obj.sayname()

// event handler


