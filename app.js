let Amigos=[];
let tope;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre=="" || Amigos.includes(nombre)){
        alert("Ingrese un nombre valido que no haya sido usado");
    }
    else{
        Amigos.push(nombre);
    
        let elementoHTML = document.getElementById('listaAmigos');
        elementoHTML.innerHTML += `${nombre}<li>`;}


    borrarInfo('amigo');

    console.log(Amigos);
    return;
}

function borrarInfo(elemento){
    document.getElementById(elemento).value="";
    return;
}


function sortearAmigo(){
    asignarTextoElemento("ul","");
    tope= Amigos.length;
    if (tope==0){
        alert("No se ha ingresado ninguna persona");
    }
    else{
        let numAleatorio= Math.floor(Math.random()*tope);
        asignarTextoElemento("#resultado", `Su amigo secreto es ${Amigos[numAleatorio]}`);}
    return;
}
