
let firstCard = 10 
let secondCard = 4
let cards = [ firstCard , secondCard ]
let sum = firstCard + secondCard  
let hasBlackJack = false 
let isAlive = true ; 
let message  = " "

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// let sumEl = document.querySelector(".sum-el")



function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards : " 
   for(let i=0 ; i<cards.length ; i++){
    cardsEl.textContent += cards[i] + " ";
   }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you wan't to draw a new card "
    }else if ( sum === 21){
        message = "you've  got Blackjack "
        hasBlackJack = true 
    }else {
        message = "you' re out of the game "
        isAlive = false
    }

    messageEl.textContent = message
  
}

function newCard() {
    console.log("Drawing a new card ")

    let card = 6
    sum += card
    // push car to array
    cards.push(card)
    renderGame()

}





