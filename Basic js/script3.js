// Operators
// assingnment,comparison,logical,arithmetic,unary,ternary

// Arithmeetic(+,-,*,**,/,%)
1+2 //3
2-1 //1
2**3 //8
4/2 //2
2*3 //6
3%2 //1

// Comparison (==,<,>,<=,>=,!==,!=,===)
2=="2" //true do not check type
2==="2" //false checks type as well
2>3 //false
3<4 //true
2>=1 //true
5<=8 //true
1!="2" //false not strict only checks value not type
1!=="2" //true strict comparison checks type as well

// Assingmment (=,+=,-=,*=,/=,%=)
var a = 1 // assingns a value
a += 1 // add 1 in the assingned value
a -= 1 // subtract 1
a *= 2 // multiply by 2
a /= 2 // divide a by 2
a %= 2 // modulus 

// logical (||,&&,!)
true || true //true
true || false //true
true && false // false
true && true // true
!true //false
!false // true
 
// unary (operates on single value)
// +,-,!,typeof,++,--
typeof 12 //number
! 12 // false
+"5" //5
let a = 12  
++a // 13 increment
--a//12 decrement

// ternary (?:)
12>13 ? console.log("when true") : console.log("when false")



// typeof (used with primitive value)
typeof null // object
typeof [] //object
typeof {} // object
typeof NaN // number

// instanceof (used only with refrence value)
let a = []
typeof a //object
a instanceof Array // true
a instanceof Object // true
let b ={}
b instanceof Array // flase
b instanceof object // true