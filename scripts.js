let billInput = document.querySelector("#bill");
let tipInput = document.querySelector("#tipPrePercent")
let button = document.querySelector("button");
let answer = document.querySelector("#calculatedTip");
let tipPercent = document.querySelector("#tipPercent");

button.addEventListener("click", function(){
    let bill = billInput.value;
    let prePercent = tipInput.value;
    let percent =  tipInput.value / 100;    
    let tipAmount = (bill * percent).toFixed(2)
    answer.innerHTML = "$" + tipAmount
    answer.style.border = "solid green 3px";
    answer.style.padding = "10px";
    tipPercent.innerHTML = prePercent + "%";
});

/* Event fired when enter is clicked in an "input"

var input = document.querySelector("input");
var button = document.querySelector("button");

input.addEventListener("keyup", function(event){
    if(event.which == 13 || event.keyCode == 13){
        button.style.color = "red";
    }
});

*/