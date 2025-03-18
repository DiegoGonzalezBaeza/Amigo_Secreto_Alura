# 🎉 Amigo Secreto

Un pequeño proyecto web interactivo para organizar un sorteo de "Amigo Secreto" de manera sencilla y rápida.

## 📌 Características

- Permite agregar nombres de amigos a una lista.
- Realiza un sorteo aleatorio para seleccionar un "Amigo Secreto".
- Interfaz simple e intuitiva.
- Validación para evitar entradas vacías.

## 🚀 Tecnologías utilizadas

- **HTML5**: Para la estructura del sitio web.
- **CSS3**: Para el diseño y la apariencia visual.
- **JavaScript (ES6)**: Para la lógica del sorteo y manipulación del DOM.

## 📖 Uso

1. Ingresar un nombre en el campo de texto y presionar "Añadir".
2. Los nombres se mostrarán en una lista debajo.
3. Al presionar "Sortear amigo", se seleccionará aleatoriamente un nombre y se mostrará en pantalla.

## 📂 Estructura del Proyecto

```
📁 amigo-secreto/
│── 📄 index.html  # Estructura del sitio web
│── 📄 style.css   # Estilos del sitio
│── 📄 app.js      # Lógica del sorteo
│── 📁 assets/     # Imágenes y recursos
```

## 🛠 Instalación y ejecución

No se requiere instalación. Solo descarga o clona el repositorio y abre `index.html` en tu navegador.

```sh
git clone https://github.com/tu-usuario/amigo-secreto.git
cd amigo-secreto
open index.html  # O abrir en el navegador manualmente
```

## 📜 Código Fuente

### **index.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <title>Amigo Secreto</title>
</head>
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagen representativa de amigo secreto">
        </header>
        <section class="input-section">
            <h2 class="section-title">Digite el nombre de sus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
                <button class="button-add" onclick="agregarAmigo()">Añadir</button>
            </div>
            <ul id="listaAmigos" class="name-list"></ul>
            <ul id="resultado" class="result-list"></ul>
            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()">
                    <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>
    <script src="app.js" defer></script>
</body>
</html>
```

### **app.js**

```javascript
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
        lista.innerHTML = ""; 
    }
}

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === "") {  
        alert("Por favor, ingresa un nombre válido.");
        return; 
    }
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    borrarLista();
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    borrarLista();
    let amigoSorteadoIndex = Math.floor(Math.random() * amigos.length);
    asignarTextoElemento("resultado", amigos[amigoSorteadoIndex]);
    console.log(`Amigo sorteado: ${amigos[amigoSorteadoIndex]}`);
}
```

## 📜 Licencia

Este proyecto está bajo la licencia MIT.

## 📬 Contacto

Si tienes alguna pregunta o sugerencia, ¡no dudes en contactarme! 😊

