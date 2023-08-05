
let body=document.querySelector("todo");
let barra_opciones = document.getElementById("barra_opciones");
let boton_menu=document.getElementById("boton_menu");
let boton_close_menu=document.getElementById("boton_close_menu");

let Features=document.getElementById('Features');
let opcion1=document.getElementById('opcion1');
let down_Features = document.getElementById("down_Features");
let Company=document.getElementById('Company');
let opcion2=document.getElementById('opcion2');
let down_Company = document.getElementById("down_Company");

opcion1.style.display="none";
opcion2.style.display="none";

Features.addEventListener("click", ()=>{
    if(opcion1.style.display=="none"){
        Focus(opcion1);
    }
    else{
        opcion1.style.display="none";
        down_Features.style.transform="rotate(0deg)";
    }
})
Company.addEventListener("click", ()=>{
    if(opcion2.style.display=="none"){
        Focus(opcion2);
    }
    else{
        opcion2.style.display="none";
        down_Company.style.transform="rotate(0deg)";
    }
})
function Focus(option){
    if(option.id == "option1"){
        down_Features.style.transform="rotate(180deg)";
    }
    if(option.id == "option2"){
        down_Company.style.transform="rotate(180deg)";
    }
    option.style.display="block";
}
function focusOut(option){
    if(option.id == "option1"){
        down_Features.style.transform="rotate(180deg)";
    }
    if(option.id == "option2"){
        down_Company.style.transform="rotate(180deg)";
    }
    option.style.display="none";
}
Features.addEventListener("focusout", ()=>{
    focusOut(opcion1);
})
Company.addEventListener("focusout", ()=>{
    focusOut(opcion2);  
})

boton_menu.addEventListener("click", ()=>{
    barra_opciones.classList.toggle('open_menu');
    boton_close_menu.style.transform = "scale(1)";
    boton_menu.style.transform = "scale(0)";
})
boton_close_menu.addEventListener("click", ()=>{
    barra_opciones.classList.toggle('open_menu');
    boton_close_menu.style.transform = "scale(0)";
    boton_menu.style.transform = "scale(1)";
})