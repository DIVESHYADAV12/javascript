// Objects

// Derclaration
let student={
    name: "Divesh", //key value structure
    age:20,
    favfood:"samosa"
}

// Accessing
console.log(student.name,student['age'])

// Nesting and deep access
let user= {
    name:"divesh",
    address:{
        city:"mughalsari",
        location:{
            lat:24.43,
            lng:34.23
        }
    }
}
console.log(user.address.location.lng) // deep access

// Object destructuring
// used to deep access by getting values in variables
let {lat,lng}=user.address.location
console.log(lat,lng)


// Loops

//for-in
for(let key in user){
    console.log(key,user['key'])
}

// Object.keys (makes array of all keys of the object)
console.log(Object.keys(user)) 

// Object.entries (make array of aarays of keys and its values)
console.log(Object.entries(user))


// Copying Objects

//spread (create's an actual copy not by refrence)
let obj ={
    name : "Divesh",
    age:20,
    eamil:"abz@gmail.com"
}
 let obj2= {...obj}
 console.log(obj2)

// Object.assign (also used to create a copy)
let obj3=Object.assign({},obj)
let obj4 = Object.assign({state:"up"},obj) //Also used to add new key value pair

// Deep cloning
//when copying a nested object with spred only refrence of the nested part is copied to make actual copy of the whole object we use deep cloning
let obj1 ={
    name : "Divesh",
    age:20,
    eamil:"abz@gmail.com",
    address:{
        city:"mgs"
    }
}
let q = JSON.parse(JSON.stringify(obj1)) //used to make actual copy of nested object

//Optional chaining
obj?.assress?.city // used to prevent error by having options if exesist the show result if not then undefined

// Computer Properties
let roll = "rollno"
let obj5 ={
    name : "Divesh",
    age:20,
    eamil:"abz@gmail.com",
    [roll]:26,
}

 











