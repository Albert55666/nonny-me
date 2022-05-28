let display = document.getElementById("display")
let semi = document.getElementById("mage1")

const select = 'img/dice' + 1 + '.png';

semi.setAttribute('src', select)

const select2 = 'img/dice' + 1 + '.png';

document.querySelectorAll("img")[1].setAttribute('src', select2)

function ref() {
const select = 'img/dice' + 1 + '.png';

semi.setAttribute('src', select)

const select2 = 'img/dice' + 1 + '.png';

document.querySelectorAll("img")[1].setAttribute('src', select2)
    display.textContent = ""

}

function start() {
const randomNumber = Math.floor(Math.random()*6)+1

console.log(randomNumber);
const select = 'img/dice' + randomNumber + '.png';

semi.setAttribute('src', select)


const secondNumber = Math.floor(Math.random()*6)+1

console.log(secondNumber);
const select2 = 'img/dice' + secondNumber + '.png';

document.querySelectorAll("img")[1].setAttribute('src', select2)

if (select > select2) {
    display.textContent = "Player 1 has won"
}else if (select2 > select) {
    let display = document.getElementById("display")
    display.textContent = "Player 2 has won"
}else{
    let display = document.getElementById("display")
    display.textContent = "Una no get winner"
}    
}