window.onload = function() {
    let elementBody = document.querySelector('html');
    let elementBtnIncreaseFont = document.getElementById('increase-font');
    let elementBtnDecreaseFont = document.getElementById('decrease-font');
    let fontSize = 100;
    let increaseDecrease = 10;

    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
        });

    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
    }


    const openContatoButton = document.querySelector("#open-contato");
const closeContatoButton = document.querySelector("#close-contato");
const modals = document.querySelector("#modal");
const fades = document.querySelector("#fade");


const toggleModal = () => {
  modals.classList.toggle("hide");
  fades.classList.toggle("hide");
};



[openContatoButton, closeContatoButton, fades].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});