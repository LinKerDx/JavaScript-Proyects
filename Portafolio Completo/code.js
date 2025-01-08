"use strict"

let calc = document.querySelector(".steelCalculator");
let med = document.querySelector(".medicalForm");
let subsc = document.querySelector(".subscription");
let login = document.querySelector(".loginForm");
let qrGen = document.querySelector(".QrGenerator");
let send = document.querySelector(".send");
let clear = document.querySelector(".clear");
let homeLink = document.querySelector(".HomeLink");
let proyectsLink = document.querySelector(".ProyectsLink");
let tecnologiesLink = document.querySelector(".tecnologiesLink");
let inputName = document.querySelector(".inputName");
let inputPhone = document.querySelector(".inputPhone");
let inputEmail = document.querySelector(".inputEmail");
let textTarea = document.querySelector(".textTarea");

calc.addEventListener("click", function calcPressed() {
    let url = "https://calmat.online/" 
    window.open(url, '_blank');
});

med.addEventListener("click", function medPressed() {
    let url = "https://medprospect.online/" 
    window.open(url, '_blank');
});



subsc.addEventListener("click",  function subscPressed() {
    let url = "https://softlinkdx.com/Subspanel/index.html" 
    window.open(url, '_blank');
})


login.addEventListener("click", function loginPressed() {
    let url = "https://softlinkdx.com/Logpro/index.html" 
    window.open(url, '_blank');
});

qrGen.addEventListener("click", function qrPressed() {
    let url = "https://xn--fbricadeqr-s4a.online/" 
    window.open(url, '_blank');
});

send.addEventListener("click", function sendPressed() {
    send.setAttribute("disabled", calculatePlate.getAttribute("disabled"));
});
clear.addEventListener("click", function clearPressed(e) {
    inputName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
    textTarea.value = "";
    
    e.preventDefault();
});



homeLink.addEventListener("click", function top(e) {
    let X = 0;
    let Y = 0;
    window.scroll(Y,X);
    e.preventDefault();

}
    
    );

proyectsLink.addEventListener("click", function mid(e) {
    let X = 718;
    let Y = 0;
    window.scroll(Y,X);
    e.preventDefault();
});
   
tecnologiesLink.addEventListener("click", function bottom(e) {
    let X = 8820;
    let Y = 0;
    window.scroll(Y,X);
    e.preventDefault();
});
