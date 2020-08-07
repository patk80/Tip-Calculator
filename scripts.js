var billInput = document.querySelector("#bill");
var tipInput = document.querySelector("#tipPrePercent")
var button = document.querySelector("button");
var answer = document.querySelector("#calculatedTip");
var tipPercent = document.querySelector("#tipPercent");

button.addEventListener("click", function(){
    var bill = billInput.value;
    var prePercent = tipInput.value;
    var percent =  tipInput.value / 100;    
    var tipAmount = (bill * percent).toFixed(2)
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