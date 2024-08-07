const  RandomNumber =parseInt(Math.random()*100)
console.log(RandomNumber);

const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHigh=document.querySelector(".loworhigh")
const StartOver=document.querySelector(".resultParas")
// const lowOrHigh=document.querySelector(".lastResult")

let prevGuess=[]
let numGuess=1
let playGame=true
if(playGame){
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const guess=parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
})
}

function validateGuess(guess){
if(isNaN(guess)){
    alert("please enter a valid number")
}else if(guess<1){
    alert("please enter a number grater than 1")
}else if(guess>100){
    alert("please enter a number less than 100")
}else{
    prevGuess.push(guess)
    if(prevGuess.length>10){
        displayGuess(guess)
        displayMessage(` game over !! random number was ${RandomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
if(guess===RandomNumber){
    displayGuess("you guess it right")
    endGame()
}else if(guess<RandomNumber){
    displayMessage("number is too low")
}else{
    displayMessage("number is too high")
}
}

function displayGuess(guess){
userInput.value=""
guessSlot.innerHTML+=`${guess}, `
numGuess++
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
lowOrHigh.innerHTML=`<h2>${message}</h2/`
}
function endGame(){
user
}
function newGame(){

}