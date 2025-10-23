//Data Type

//Primitive data types
//string, number, boolean, null, undefined, symbol, bigint

//string('', "", ``  -> Ways to create string)
let a = 'hii';
let b = "i am";
let c = `Divesh`;

//numbers
var d = 12, e = 12.01;

//boolean
let f = true, g = false;

//null (Holds no value)
var h = null;

//undefined
var i;//no value is given -> default value

//symbol (unique immutable value)
let j = Symbol(rollno);

//bigint
let k = 20304020340242n;


//Reference data type
//array,object,function

//arrays (list of objects)
let l =[1,2,3];
let m = l //if you change value of m value of l also changes

//objects
let n = {
    n1 :"divesh",
};
let o = n;
o.n1="ankesh" // changing o will also change n because value is not copied insted refrence is passed



//Dynamic typing
let p = 12;
p = "Divesh";
p = true;
p = 12.435;
p = 12343241323n;

//typeof quirks (used to find out type of data type)
typeof null;//object
typeof 12;//number

//type coercion(== or ===)
//convert one type automatically into another
"5"+1;//output = '51' -> concatinate
"4"-1;// output = 3 -> subtract

//Truthy and falsy values
//falsy values-> 0,null,"",NaN,undefined,document.all
//true values-> all other
if(NaN){  }


//predict result
true + false //output 1 or true
null + 1 // output 1
"5"+ 5 //output "55"
!!undefined //output false
