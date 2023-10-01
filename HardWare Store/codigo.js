menú = document.querySelector(".barButton1");
menú2 = document.querySelector(".barButton2");
side = document.querySelector(".Side");
aside = document.querySelector(".menu");
aside2 = document.querySelector(".menu2");



function ocultarMenú(e){
    side.removeAttribute("hidden")
}
function ocultarMenú2(ev){
    side.setAttribute("hidden", side.getAttribute("hidden"));
}
menú.addEventListener("click", ocultarMenú)
menú2.addEventListener("click", ocultarMenú2)
aside.addEventListener("click", ocultarMenú)
aside2.addEventListener("click", ocultarMenú2)
