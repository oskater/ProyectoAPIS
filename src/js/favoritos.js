// Recogemos todos los elementos necesarios
const noticiasFavoritas = document.getElementById("noticiasFavoritas");
// Creamos los arrays necesarios
let arrayNoticias = [];
let noticias = [];
// Hacemos import del objeto ObjetoNoticia
import { ObjetoNoticia } from './ObjetoNoticia.js';

// Mostrar la lista de noticias favoritas
const mostrarNoticias = (noticias) => {
    // Creamos el fragment
    const fragment = document.createDocumentFragment();
    // Por cada noticia favorita imprimimos los datos necesarios
    noticias.forEach(noticia=>{
        const newArticle = document.createElement("Article");
        newArticle.classList = ("bg-white rounded-lg shadow-md mb-6 p-5 transition-transform transform hover:scale-105");
    
        const newTitle = document.createElement("H2");
        newTitle.textContent = noticia._titulo;
        newTitle.classList = ("text-2xl font-bold mb-2");
    
        const newTime = document.createElement("Time");
        let time = noticia._fecha;
        newTime.textContent = time.substring(0, 10) + ", " + time.substring(11, 16);
    
        const newImg = document.createElement("IMG");
        newImg.src = noticia._img;
        newImg.classList = ("mt-4 rounded-lg w-full h-auto")
    
        const newP = document.createElement("P");
        newP.textContent = noticia._contenido;
        newP.classList = ("mt-3 text-gray-700");
    
        const newLink = document.createElement("A");
        newLink.textContent = "Leer más";
        newLink.href = noticia._url;
        newLink.classList = ("mt-4 inline-block text-blue-500 hover:underline");
    
        const newButton = document.createElement("BUTTON");
        newButton.textContent = "❤️";
        newButton.id = "btnGuardar";
        newButton.classList = "ml-[80%] mt-4 text-red-500 hover:text-red-700 focus:outline-none";
    
        newArticle.append(newTitle);
        newArticle.append(newTime);
        newArticle.append(newImg);
        newArticle.append(newP);
        newArticle.append(newLink);
        newArticle.append(newButton);
    
        fragment.append(newArticle);
    })
    noticiasFavoritas.append(fragment);
};
// Funcion para cargar las noticias favoritas
const cargarNoticiasFavoritas = async (event) => {
    // Recogemos las noticias favoritas guardadas en el localStorage "favoritos"
    let noticias = JSON.parse(localStorage.getItem("favoritos"));
    // Llamamos a la funcion mostrarNoticias() junto al parametro que ha recogido las noticias favoritas
    mostrarNoticias(noticias);
};

document.addEventListener("DOMContentLoaded", cargarNoticiasFavoritas)