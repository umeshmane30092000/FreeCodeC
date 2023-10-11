
// document.getElementById("count-el").innerText=60

let countEl = document.getElementById("count-el")
let saveEl  = document.getElementById("save-el")
let count = 0 

function increment() {
    count += 1
    countEl.textContent = count 
}

function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash 
    countEl.textContent = 0
    count = 0
    console.log(count)
}


let myPoints = 3
function add3Points() {
    myPoints += 3

 }

 function removePoint() {
    myPoints -= 1
 }

 add3Points()
 add3Points()
 add3Points()
 removePoint()
 removePoint()

 console.log(myPoints)

 // "22" 18   "65"  "My points: 59"   4    "1114"

 // onclick= "purchase()"

 let errorEl = document.getElementById("error")

 function  changePara() {
    errorEl.textContent = "something went wrong"
 }



