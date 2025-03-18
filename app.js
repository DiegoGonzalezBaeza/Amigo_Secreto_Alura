// // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    if (elementoHTML) {
        elementoHTML.innerHTML = `El amigo secreto sorteado es: ${texto}`;
    }
}

function borrarLista() {
    let lista = document.getElementById("listaAmigos");
    if (lista) {
        lista.innerHTML = ""; // Limpiamos la lista antes de agregar nuevos elementos  
    }
}

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {  // Validamos si el input está vacío
        alert("Por favor, ingresa un nombre válido.");
        return; // Detenemos la ejecución de la función
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = ""; // Limpiamos el input
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    borrarLista(); // Limpiar lista antes de actualizarla

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) { // Validamos si la lista de amigos está vacía
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    borrarLista();
    let amigoSorteadoIndex = Math.floor(Math.random() * amigos.length);
    asignarTextoElemento("resultado", amigos[amigoSorteadoIndex]); // Corregimos la referencia al ID
    console.log(`Amigo sorteado: ${amigos[amigoSorteadoIndex]}`);
}


// let amigos = [];

// function asignarTextoElemento(id, texto) {
//     let elementoHTML = document.querySelector(id);
//     elementoHTML.innerHTML = `El amigo secreto sorteado es: ${texto}`;
//     return;
// }

// function borrarlista(){
//     let lista = document.getElementById("listaAmigos");
//     lista.innerHTML = ""; // Limpiamos la lista antes de agregar los nuevos elementos  
// }

// function agregarAmigo() {
//     let nombre = document.getElementById("amigo").value.trim();  

//     if (nombre === "") {  // Validamos si el input está vacío
//         alert("Por favor, ingresa un nombre valido.");
//         return; // Detenemos la ejecución de la función
//     }
    
//         amigos.push(nombre);
//         document.getElementById("amigo").value = ""; // Limpiamos el input
//         actualizarLista();
    
// }

// function actualizarLista() {
//     borrarlista();

//     amigos.forEach(amigo => {
//         let li = document.createElement("li");
//         li.textContent = amigo;
//         lista.appendChild(li);
//     });
// }

// function sortearAmigo() {
//   let amigoSorteadoIndex = Math.floor(Math.random() * amigos.length);
//   borrarlista();
//   asignarTextoElemento("#resultado", amigos[amigoSorteadoIndex]);
//   console.log(amigos[amigoSorteadoIndex]);
//   console.log(amigoSorteadoIndex);
// }