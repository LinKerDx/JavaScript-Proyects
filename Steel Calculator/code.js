

let large = document.querySelector(".large");
let caliber = document.querySelector(".caliber");
let pieces = document.querySelector(".pieces");
let width2 = document.querySelector(".width2");

let width3 = document.querySelector(".width3");
let large2 = document.querySelector(".large2");
let caliber2 = document.querySelector(".caliber2");
let pieces2 = document.querySelector(".pieces2");

let large3 = document.querySelector(".large3");
let caliber3 = document.querySelector(".caliber3");
let pieces3 = document.querySelector(".pieces3");


let RoundBar = document.querySelector(".imageRoundBar");
let Plate = document.querySelector(".imagePlate");
let PTR = document.querySelector(".imagePTR");
let calculateRoundBar = document.querySelector(".div-roundBar");
let calculatePlate = document.querySelector(".div-Plate");
let calculatePTR = document.querySelector(".div-PTR");
let boton1 = document.querySelector(".inputSubmitCalculate1");
let boton2 = document.querySelector(".inputSubmitCalculate2");
let boton3 = document.querySelector(".inputSubmitCalculate3");
let inpBar = document.querySelector(".inpBar");
let inpPlate = document.querySelector(".inpPlate");
let inpPTR = document.querySelector(".inpPTR");
let spanTotal = document.querySelector(".spanBar");
let spanTotal2 = document.querySelector(".spanPlate");
let spanTotal3 = document.querySelector(".spanPTR");

let steelDensity = 7.850;
let pi = Math.PI;


function clickImg(e) {
     if(e.target == PTR) {
        calculatePTR.removeAttribute("hidden");
        calculatePlate.setAttribute("hidden", calculatePlate.getAttribute("hidden"));
        calculateRoundBar.setAttribute("hidden", calculateRoundBar.getAttribute("hidden"));

    }
    else if (e.target == Plate) {
        calculatePlate.removeAttribute("hidden");
        calculatePTR.setAttribute("hidden", calculatePTR.getAttribute("hidden"));
        calculateRoundBar.setAttribute("hidden", calculateRoundBar.getAttribute("hidden"));
    } 
    else if(e.target == RoundBar){
        calculateRoundBar.removeAttribute("hidden");
        calculatePTR.setAttribute("hidden", calculatePTR.getAttribute("hidden"));
        calculatePlate.setAttribute("hidden", calculatePlate.getAttribute("hidden"));
    }
    

}
PTR.addEventListener("click", clickImg);
Plate.addEventListener("click", clickImg);
RoundBar.addEventListener("click", clickImg);

function btnCalculate(evento) {
    
    let calib = caliber.value;
    let larg = large.value;
    let piez = pieces.value
    
    let wid2 = width2.value;
    let calib2 = caliber2.value;
    let larg2 = large2.value;
    let piez2 = pieces2.value

    let calib3 = caliber3.value;
    let larg3 = large3.value;
    let piez3 = pieces3.value
    let wid3 = width3.value;


    if (evento.target == inpPTR)
    {
        let F = 4 * ((wid3 * calib3) * calib3);
        let weight = (steelDensity *(F * larg3))/1000; 
        let total = weight * piez3
        let material = "PTR";
        let resultado = `The ${material} weight is:  <b>${weight}</b> `
        let resultado2 = `The weight of one ${material} is: <b>${weight} KGS</b><br>
                           In ${piez3} pieces is: <b>${total} KGS</b><br>`
         if (pieces3.value == 1) spanTotal3.innerHTML = resultado; 
         else if (pieces3.value == 0) alert("Please put a valid number")
         else spanTotal3.innerHTML = resultado2;
   
    }else if((evento.target == inpPlate)){
     let weight  = (calib2 *(wid2 * (larg2 * steelDensity)))/1000000;
     let total = weight * piez2;
     let material = "Plate";
     let resultado = `The ${material} weight is:  <b>${weight}</b> `
     let resultado2 = `The weight of one ${material} is: <b>${weight} KGS</b><br>
                      In ${piez2} pieces is: <b>${total} KGS</b><br>`
     if (pieces2.value == 1) spanTotal2.innerHTML = resultado;
     else if (pieces2.value == 0) alert("Please put a valid number");
     else spanTotal2.innerHTML = resultado2;
    
    }else if (evento.target == inpBar){
        
        let volumenRoundBar = (larg *(pi *(calib * calib))) / 4;
        let weight = (volumenRoundBar * steelDensity)/10;
        let total = weight * piez;
        let material = "Round Bar";
        let resultado = `The ${material} weight is:  <b>${weight}</b> KGS `
        let resultado2 = `The weight of one ${material} is: <b>${weight} KGS</b><br>
                     In ${piez} pieces is: <b>${total} KGS</b><br>`
        if (pieces.value == 1) spanTotal.innerHTML = resultado;
        else if (pieces.value == 0)alert("Please put a valid number");
        else spanTotal.innerHTML = resultado2;
    }
}
boton1.addEventListener("click", btnCalculate);
boton2.addEventListener("click", btnCalculate);
boton3.addEventListener("click", btnCalculate);



