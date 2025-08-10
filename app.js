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
        actualizarLista(nombre);
        }
    borrarCaja('amigo');
    return;
}

function actualizarLista(nombre){
        (document.querySelector('#listaAmigos')).innerHTML+=`${nombre}<li>`;
        return;
}

function borrarCaja(elemento){
    document.getElementById(elemento).value="";
    return;
}


function sortearAmigo(){
    asignarTextoElemento("#listaAmigos","");
    tope= Amigos.length;
    if (tope==0){
        alert("No se ha ingresado ninguna persona");
    }
    else{
        let numAleatorio= Math.floor(Math.random()*tope);
        asignarTextoElemento("#resultado", `Su amigo secreto es ${Amigos[numAleatorio]}`);}
    return;
}


