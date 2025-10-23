// if else else if
let i = 0;
if (i == 1) {
    console.log("true")
}
else if (i >= 2) {
    console.log("false")
}
else {
    console.log("another")
}

//switch case
switch (3) {
    case 1:
        break
    case 2:
        break
    case 3:
        console.log("hello divesh")
        break
    default:
        console.log('nice work')
}

//early return pattern
function getgrade(val) {
    if (val < 32) return "fail";
    if (val < 59) return "D"
    if (val < 69) return "C"
    if (val < 79) return "B"
    if (val < 89) return "A"
    if (val < 100) return "A+"
    return "Invalid marks"
}
console.log(getgrade(65))

//Rock-Paper-Scissor
function rps(user, comp) {
    if (user === "rock" && comp === "scissor") return "User wins"
    if (user === "paper" && comp === "scissor") return "Computer wins"
    if (user === "scissor" && comp === "scissor") return "Draw"
    if (user === "rock" && comp === "paper") return "Computer wins"
    if (user === "scissor" && comp === "paper") return "User wins"
    if (user === "paper" && comp === "paper") return "Draw"
    if (user === "rock" && comp === "rock") return "Draw"
    if (user === "paper" && comp === "rock") return "User wins"
    return "computer wins"
}
console.log(rps("scissor", "paper"))
//optimized code
function rps1(user,comp){
    if(user === comp) return "Draw"
    if(user==="rock" && comp === "scissor") return "User wins"
    if(user==="paper" && comp === "rock") return "User wins"
    if(user==="scissor "&& comp === "paper") return "User wins"
    return "Computer wins"
}
console.log(rps1("sissor","rock"))