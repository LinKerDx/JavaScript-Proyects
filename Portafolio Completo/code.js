"use strict"

let calc = document.querySelector(".steelCalculator");
let med = document.querySelector(".medicalForm");
let subsc = document.querySelector(".subscription");
let login = document.querySelector(".loginForm");


calc.addEventListener("click", function calcPressed() {
    let url = "http://calmat.online/" 
    window.open(url, '_blank');
});

med.addEventListener("click", function medPressed() {
    let url = "https://softlinkdx.com/medicalForm/index.html" 
    window.open(url, '_blank');
});



subsc.addEventListener("click",  function subscPressed() {
    let url = "https://softlinkdx.com/subscriptionPanel/index.html" 
    window.open(url, '_blank');
})


login.addEventListener("click", function loginPressed() {
    let url = "https://softlinkdx.com/loginProyect/index.html" 
    window.open(url, '_blank');
});