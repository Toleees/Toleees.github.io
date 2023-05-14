let tg = window.Telegram.WebApp;

tg.expand();

tg.Mainbutton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn1 = document.getElementById("btn2");
let btn1 = document.getElementById("btn3");
let btn1 = document.getElementById("btn4");
let btn1 = document.getElementById("btn5");
let btn1 = document.getElementById("btn6");

bnt1.addEventListener("click", function(){
    if (tg.Mainbutton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 1!");
    }
});
bnt2.addEventListener("click", function(){
    if (tg.Mainbutton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 2!");
    }
});
bnt3.addEventListener("click", function(){
    if (tg.Mainbutton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 3!");
    }
});
bnt4.addEventListener("click", function(){
    if (tg.Mainbutton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 4!");
    }
});
bnt5.addEventListener("click", function(){
    if (tg.Mainbutton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 5!");
    }
});
bnt6.addEventListener("click", function(){
    if (tg.Mainbutton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар 6!");
    }
});

Telegram.WebAp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
})

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = '${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name';

usercard.appendChild(p);