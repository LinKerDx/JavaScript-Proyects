"use strict"

let calc = document.querySelector(".steelCalculator");
let med = document.querySelector(".medicalForm");
let subsc = document.querySelector(".subscription");
let login = document.querySelector(".loginForm");
let homeLink = document.querySelector(".HomeLink");
let proyectsLink = document.querySelector(".ProyectsLink");
let tecnologiesLink = document.querySelector(".tecnologiesLink");


calc.addEventListener("click", function calcPressed() {
    let url = "https://calmat.online/" 
    window.open(url, '_blank');
});

med.addEventListener("click", function medPressed() {
    let url = "medprospect.online" 
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


homeLink.addEventListener("click", function top(e) {
    let X = 0;
    let Y = 0;
    window.scroll(Y,X);});

proyectsLink.addEventListener("click", function mid(e) {
    let X = 720;
    let Y = 0;
    window.scroll(Y,X);});
   
tecnologiesLink.addEventListener("click", function bottom(e) {
    let X = 3120;
    let Y = 0;
    window.scroll(Y,X);});
