// Arrays

// Declaration
let marks = [12, 23, 3, 44, 45, 67] // indexing starts from 0
// Access
console.log(marks[1]) // Access through index
// Modify
marks[4] = 0
console.log(marks[4])


//Array Methods

// Push
let arr1 = [1, 2, 3, 4, 5]
arr.push(6)
console.log(arr)

// Pop (remove value from last index)
arr.pop()
console.log(arr)

// shift (remove value of first index)
arr.shift()
console.log(arr)

// unshift (adds a value at starting index)
arr.unshift(1)
console.log(arr)

// splice (removes value from the given index)
arr.splice(2, 2) // 1st argument refers to index no. 2nd refers to no. of values removed
console.log(arr)

// slice (returns a new array)
let newarr = arr.slice(0, 2) // 1st argument refers to the inxed from where slicing starts 2nd refers to index-1 to which array returned
console.log(newarr)
 
// reverse (revrse the array)
arr.reverse()
console.log(arr)

// sort (sort array in ascending order)
let arrr = [45,34,56,234,86,43,23]
console.log(arrr.sort()) // do not sort numerically insted sort in dictionary order

// numeric sort => Ascending order
console.log(arrr.sort((a,b) => a-b))

// numeric sort => Descending order
console.log(arrr.sort((a,b) => b-a))


// forEach
let ab = [1,2,3,4,5,6,7,8,9]
ab.forEach(function(val){
    console.log(val + 5)
})

// Map (creates a new array and must return a value)
let newab = ab.map(function(val){
    return val+1
})
console.log(newab) 

// filters (creates a new array and return values of old array in it )
let newba = ab.filter(function(val){
    if(val>4) return true
})
console.log(newba)

 // reduce (reducing the whole array to a single value also creates s new array)
 let newar =ab.reduce(function(accumulator,val){
     return accumulator+val
 },0)
 console.log(newar)

// find
let z = ab.find(function(val){
    return val === 8
})
console.log(z)

// some (return true if even one value satisfies the condition )
  let y = ab.some(function(val){
    return val > 6
  })
  console.log(y)

// every (returns true if every value satisfie the consition)
let x =ab.every(function(val){
    return val>1
})
console.log(x)


// Destructuirng
let arr2 = [1,2,3,4,5]
let [a,b,,d] = arr // used to get values of array in vaiables a=1,b=2,d=4
console.log(a,b,d)

// spread operator
let arr3 = [1,2,3,4,5,6,7,8,9]
let arr4 = [...arr] // used to make copy of exesisting arry do not make refrence











