// Create an array with 3 fruits and print the 2nd fruit
let a = ["banana","apple","peach"]
console.log(a[1])

//add "Mango" at the end and "pineappple" at the begning of this array
a.push("Mango")
a.unshift("pineapple")
console.log(a)

// repalce banana with kiwi
let b = ["banana","apple"]
b.shift()
b.unshift("kiwi")
console.log(b)

//remove last item from this array using a method
let numb = [1,2,3,4]
numb.pop()
console.log(numb)

// Insert "red" and "blue" at index 1 in this array
let color = ["green","yellow"]
color.splice(1,0,"red","blue") //splice can also be used to add items at specific index
console.log(color)

// Extract only middle three elements from this array
let items = [1,2,3,4,5,6]
let c = items.slice(2,5)
console.log(c)

// Sort this array alphabetically and then reverse it
let names = ["zara","Arjun","Mira","Bhavya"]
console.log("sorted array : ",names.sort())
console.log("reverse array : ",names.reverse(names.sort()))

// Use map to square each number
let arr = [1,2,3,4]
let d = arr.map(function(val){
    return val**2
})
console.log(d)

// Use .filter() to keep numbers greater then 10
let arr2 = [5,12,8,20,3]
let e = arr2.filter(function(val){
    return val>10
})
console.log(e)

// Use .reduce() to find the sum of this array
let arr3 = [10,20,30]
let f = arr3.reduce(function(acc,val){
    return acc + val
},0)
console.log(f)

// Use .find() to get the first number less then 10
let arr4 = [12,15,3,8,20]
let g =arr4.find((val) => val<10) 
console.log(g)

// Use .some() to checck if any student has record below 35
let rec = [45,60,28,90]
let h = rec.some((val) => val<35)
console.log(h)

// Use .every to check if all numbers are even or not
let num = [2,4,6,8,10]
let i = num.every((val)=>val%2===0)
console.log(i)

// Destructure this array to get firstname and lastname
let fullname = ["harsh","Sharma"]
let [firstname,lastname] = fullname
console.log(firstname)
console.log(lastname)

// Merge two arrays using spread operators
let x = [1,2]
let y = [3,4]
let xy = [...x,...y]
console.log(xy)

// Add "India" to the start of this arry using spread
let countaries = ["USA","UK"]
let newcountries = ["India",...countaries]
console.log(newcountries)

// Clone this array(not by refrence)
let arr5 = [1,2,3]
let newarr = [...arr5]
