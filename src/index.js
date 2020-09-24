
//give user input AKA get bill
const tipForm = document.querySelector("#tip-form"); //global scope
// ORRRR const tipForm = document.getElementById("tip-form");


tipForm.addEventListener('submit', function(e){
    e.preventDefault();
    const billAmount = Number(document.querySelector("#bill-amount").value); 
    //concept called scope to function, function scoped
    const tipPercentage = Number(document.querySelector("#tip-amount").value);
    const tipAmount = document.querySelector("#final-tip");
    tipAmount.innerHTML = "50";
    //`${tipPercent}`

    //insert math and 
});

//all html are documents and css are selectors

//get tip percentage


//process values (combine n calcuate)


//display to user