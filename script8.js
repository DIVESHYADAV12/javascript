// Write a BMI calculator

function bmi(weight = 0, height = 0) {
    return weight / (height ** 2)
}
console.log(bmi(90, 2.5))


// Build a counter using clouser
function count() {
    count = 0
    return function () {
        count++
        console.log(count)
    }
}
const counter = count()
counter()
counter()
counter()
counter()


// Create a pure function to transform a value
let a = 0
function pure(){
    b = a
    console.log("transformed value: ",++b)
}
pure()

