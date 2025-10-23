// Create an Object for a student with name, age, and isEnrolled
let student={
    name:"Divesh",
    age:20,
    isEnrolled:true
}

// Try if key of object can be a number or a boolean
let Try = {
    true:"yes",
    12:"age"
}
console.log(Try [12])

// Acess the value of the first name 
const user ={
    "first-name":"harsh",
}
console.log(user['first-name'])  

// Destructure the city and lat from the location object.
const loca={
    city:"mgs",
    coordinate:{
        lat:23.3,
        lng:77.4
    }
}
let {city,coordinate}={...loca}
console.log(city,coordinate)