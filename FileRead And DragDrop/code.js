"use strict";

const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", e=>{
    e.preventDefault();
    changeStyle(e.srcElement, "#444")
})
zona.addEventListener("dragleave", e=>{
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
})
zona.addEventListener("drop", e=>{
    e.preventDefault();+
    console.log(e.dataTransfer.files[0]);
    changeStyle(e.srcElement, "#888");
    if (e.dataTransfer.files[0].type == "image/png") {
        cargarArchivoImagen(e.dataTransfer.files[0]);    
    } else {
        cargarArchivoVideo(e.dataTransfer.files[0]);
        
    }
    zona.style.border = "4px solid #888";

})

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

const cargarArchivoText = ar => {
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("progress",e=>{
        let carga = Math.round(e.loaded / ar.size * 100);
        zona.textContent = `${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px"; 
        document.querySelector(".barra-de-carga").style.width = `${carga/1.3}%`;
    })


    reader.addEventListener("load", e=>{
        document.querySelector(".resultado").textContent = e.currentTarget.result;
    })

}

const cargarArchivoImagen = ar => {
    const reader = new FileReader();
    reader.readAsDataURL(ar);
    reader.addEventListener("progress",e=>{
        let carga = Math.round(e.loaded / ar.size * 100);
        zona.textContent = `${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px"; 
        document.querySelector(".barra-de-carga").style.width = `${carga/1.3}%`;
    })

    reader.addEventListener("load", e=>{
        let url = URL.createObjectURL(ar);
        let img = document.createElement("IMG");
        img.setAttribute("src", url);
        document.querySelector(".resultado").appendChild(img);
    })
    reader.addEventListener("loadend", e=>{
        changeStyle(zona,"#4f9");
        zona.style.borderStyle = "solid"
        document.querySelector(".barra-de-carga").style.background = `#4f9`;
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer";
            zona.textContent = "¡Completado!";

        },0.5);

    })
    
}



const cargarArchivoVideo = ar => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress",e=>{
        let carga = Math.round(e.loaded / ar.size * 100);
        zona.textContent = `${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px"; 
        document.querySelector(".barra-de-carga").style.width = `${carga/1.3}%`;
    })
    reader.addEventListener("loadend", e=>{
        changeStyle(zona,"#4f9");
        zona.style.borderStyle = "solid"
        document.querySelector(".barra-de-carga").style.background = `#4f9`;
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer";
            zona.textContent = "¡Completado!";

        },0.5);

    })
    reader.addEventListener("load", e=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: "video/mp4"})
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src", url);
        document.querySelector(".resultado").appendChild(img);
        zona.style.border = "4px solid #888";
        img.play();


    })
}