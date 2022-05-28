var display = document.getElementById("display")
var button1 = document.querySelector(".button1")
var button2 = document.querySelector(".button2")
var button3 = document.querySelector(".button3")
var button4 = document.querySelector(".button4")
var button5 = document.querySelector(".button5")
var button6 = document.querySelector(".button6")
var button7 = document.querySelector(".button7")
var button8 = document.querySelector(".button8")
var button9 = document.querySelector(".button9")
var button10 = document.querySelector(".button10")
var button11 = document.querySelector(".button11")
var button12 = document.querySelector(".button12")
var button13 = document.querySelector(".button13")
var button14 = document.querySelector(".button14")
var button15 = document.querySelector(".button15")
var button16 = document.querySelector(".button16")
var button17 = document.querySelector(".button17")
var button18 = document.querySelector(".button18")
var button19 = document.querySelector(".button19")
var button20 = document.querySelector(".button20")


button1.onclick = function () {
    display.innerHTML = ""
}
button2.onclick = function () {
    display.innerHTML += button2.innerText
}
button3.onclick = function () {
    display.innerHTML += button3.innerText
}
button4.onclick = function () {
    display.innerHTML = display.innerText.slice(0, -1)
}
button5.onclick = function () {
    display.innerHTML += button5.innerText
}
button6.onclick = function () {
    display.innerHTML += button6.innerText
}
button7.onclick = function () {
    display.innerHTML += button7.innerText
}
button8.onclick = function () {
    display.innerHTML += button8.innerText
}
button9.onclick = function () {
    display.innerHTML += button9.innerText
}
button10.onclick = function () {
    display.innerHTML += button10.innerText
}
button11.onclick = function () {
    display.innerHTML += button11.innerText
}
button12.onclick = function () {
    display.innerHTML += button12.innerText
}
button13.onclick = function () {
    display.innerHTML += button13.innerText
}
button14.onclick = function () {
    display.innerHTML += button14.innerText
}
button15.onclick = function () {
    display.innerHTML += button15.innerText
}
button16.onclick = function () {
    display.innerHTML += button16.innerText
}
button17.onclick = function () {
    display.innerHTML += button17.innerText
}
button18.onclick = function () {
    display.innerHTML += button18.innerText
}
button19.onclick = function () {
    display.innerHTML += button19.innerText
}
button20.onclick = function () {
    display.innerHTML = eval(display.innerText)
}






































// var display = document.getElementById("display")
// var button = Array.from(document.getElementsByClassName("button"))

// button.map(button =>{
//     button.addEventListener('click', (e) => {
//         switch (e.target.innerText) {
//             case 'C':
//                 display.innerText = ""
//                 break;
//                 case '=':
//                     display.innerText = eval(display.innerText)
//                     break;
//             default:
//                 display.innerText += e.target.innerText
//         }
//     })
// })