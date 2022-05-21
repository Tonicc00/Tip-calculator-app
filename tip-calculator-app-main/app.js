const amount = document.querySelector(".amount");
const tipBtn = document.querySelectorAll(".tip");
const custom = document.querySelector(".custom");
const people = document.querySelector(".people");
const perPerson = document.querySelector(".tip-amount-value");
const total = document.querySelector(".total-value");
const amtError = document.querySelector(".amt-error");
const pplError = document.querySelector(".people-error");
const reset = document.querySelector(".reset");

rst()

let tip = 0, amt = 0, ppl = 1;

tipBtn.forEach(btn => {
    btn.addEventListener("click", () =>{
        if(btn.classList.contains("selected")){
            tip = 0;
            btn.classList.remove("selected");
            btn.classList.add("unselected");
        } else {
            tipBtn.forEach(e => {
                e.classList.remove("selected")
            })
            tip = btn.value;
            btn.classList.remove("unselected");
            btn.classList.add("selected");
        }

        custom.value = "";
        calculator();
    })
});

custom.addEventListener("input", () => {
    if(custom.value >= 0){
        tipBtn.forEach(e => {
            e.classList.remove("selected");
        })
        tip = custom.value;
        calculator();
    }
});

amount.addEventListener("input", () => {
    amt = Number(amount.value);
    if (amt <= 0 && amt != ""){
        amount.classList.add("error");
        amtError.style.visibility = "visible";
    } else {
        amount.classList.remove("error");
        amtError.style.visibility = "hidden";
        calculator();
    }
});

people.addEventListener("input", () => {
    ppl = people.value;
    if (ppl <= 0 && ppl != ""){
        people.classList.add("error");
        pplError.style.visibility = "visible";
    } else {
        people.classList.remove("error");
        pplError.style.visibility = "hidden";
        calculator();
    }
});

reset.addEventListener("click", rst);
function rst(){
    amount.value = "";
    people.value = "1";
    custom.value = "";
    perPerson.innerHTML = "$0.00";
    total.innerHTML = "$0.00";

    tipBtn.forEach(e => {
        e.classList.remove("selected");
        e.classList.add("unselected");
    })
};

function calculator(){
    if (amt >= 0 && ppl >= 1){
        let totalTip = (tip*amt) / (100);
        let totalAmt = amt + totalTip;
        perPerson.innerHTML = `$${((totalTip)/(ppl)).toFixed(2)}`;
        total.innerHTML = `$${((totalAmt)/(ppl)).toFixed(2)}`;
    }
};