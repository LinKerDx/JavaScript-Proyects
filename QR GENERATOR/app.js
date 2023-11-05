let conteinerQr = document.querySelector(".qrCode");
let btn = document.querySelector(".btn")

const qrcode = new QRCode(conteinerQr,{
    width: 200,
    height: 200
})


function crearQR(){
    let texto = document.getElementById('text');

    btn.addEventListener('click', e => {
        if(!texto.value){
            alert("Please, write anything");
            texto.focus();
            return;
        }else{
            qrcode.makeCode(texto.value);
        }
    
    
    })

}

crearQR();