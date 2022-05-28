// function increment() {
//     console.log("vivian");
//     console.log("tochi");
// }

// function jump() {
//     var x = 33
//     var y = 34
//     var z = 36
//     console.log(x+y+z);
//     // console.log(2);
//     // console.log(1);
// }

// jump()

// console.log("-------------------");

// jump()

// var lapsCompleted = 0

// function goro() {
//     console.log(lapsCompleted += -1);
// }

// goro()
// goro()
// goro()
var saveEl = document.getElementById("save-el")
var count = document.getElementById("count-el")
var forf = 0


function increment() {
    // var t = forf + 1
    // console.log(forf += 1);
    forf = forf + 1
    // console.log(forf);
    count.textContent = forf  
    console.log(forf );
}
// console.log("-------------------");

function save() {
    // console.log(forf);
    saveEl.textContent += forf + "-" 
    count.innerText = 0
    forf = 0
    console.log(count.textContent);
}


// var namwe = "Hi; my name is"
// var intro = "chinonso"

// var myGreeting = (namwe + " " + intro)
// console.log(myGreeting);

// var gre = document.getElementById("yrt")

// var mum = "i love her " 
// var dad = "i love him too"

// gre.innerText = mum + dad