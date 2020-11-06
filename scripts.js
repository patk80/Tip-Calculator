let billInput = document.querySelector("#bill");
let tipInput = document.querySelector("#tipPrePercent")
let button = document.querySelector("button");
let answer = document.querySelector("#calculatedTip");
let tipPercent = document.querySelector("#tipPercent");

function giveAnswer(){
    let bill = billInput.value;
    let prePercent = tipInput.value;
    let percent =  tipInput.value / 100;    
    let tipAmount = (bill * percent).toFixed(2);
    answer.innerHTML = "$" + tipAmount;
    tipPercent.style.color = "green";
    answer.style.border = "solid green 3px";
    answer.style.padding = "10px";
    tipPercent.innerHTML = prePercent + "%";
}

button.addEventListener("click", function(){
    giveAnswer();
});

tipInput.addEventListener("keypress", function(e){
    if(e.which == 13 || e.keyCode == 13){
        giveAnswer();
    }
});