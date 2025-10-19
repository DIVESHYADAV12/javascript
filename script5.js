// //Loops
// // For loop
// for (let i = 1; i <= 10; i++) {
//     console.log("21 * ", i, "=", 21 * i)
// }

// // While loop
// let j = 1
// while (j != 10) {
//     console.log("45 * ", j, "=", 45 * j)
//     j++
// }

// //do while
// do {
//     console.log(j)
//     j++
// }
// while (j < 28)

// //break and continue
// for (let k = 10; k > 0; k--) {
//     console.log(k)
//     if (k === 5) break //loop breaks when k == 5
// }
// for (let l = 1; l < 20; l++) {
//     if (l === 5) continue //5 will not be printed
//     console.log(l)
// }


//pattern questions
for ( let m = 2 ; m<=20 ; m+=2){
    console.log(m)
}

for (let n = 1 ; n<=15 ; n+=2){
    console.log(n)
}

var sum = 0
for(let o =1;o<=100;o++){
    sum=sum+o
}
console.log('sum is : ',sum)

// for(let p = 3;p<=50;p+=3){
//     console.log(p)
// }
for(let q =3;q<=50;q++){
    if(q%3===0 && q%5===0){
        console.log(q)
    } 
}

let val = prompt ("Enter a number : ")
val = Number(val)
for(let r = 1; r<=val; r++){
    if(r%2===0){
         console.log("Even number: ",r)
        }
    else {
        console.log("Odd number:",r) 
    }   
}

