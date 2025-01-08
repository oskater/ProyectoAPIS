// Recogemos todos los elementos necesarios
const containerNoticias = document.getElementById("noticias");
// Creamos los arrays necesarios
let arrayNoticias = [];
let noticias=[];

import {ObjetoNoticia} from './ObjetoNoticia.js';
// Funcion para iniciar la pagina de forma limpia
const iniciarPagina=()=>{
    localStorage.clear();
    cargarNoticias();
}

// Mostrar la lista de noticias
const mostrarNoticias = (arrayNoticias) => {
    // Creamos el fragment
    const fragment = document.createDocumentFragment();
    // Por cada noticia imprimimos los datos necesarios
    arrayNoticias.forEach((noticia) => {
        // Verificamos que la noticia no haya sido borrada
        if(noticia.title!='[Removed]'){
            guardarNoticia(noticia);

            const newArticle = document.createElement("Article");
            newArticle.classList = ("bg-white rounded-lg shadow-md mb-6 p-5 transition-transform transform hover:scale-105");
    
            const newTitle = document.createElement("H2");
            newTitle.textContent = noticia.title;
            newTitle.classList = ("text-2xl font-bold mb-2");
    
            const newTime = document.createElement("Time");
            let time=noticia.publishedAt;
            newTime.textContent = time.substring(0,10) + ", " + time.substring(11, 16);
    
            const newImg = document.createElement("IMG");
            newImg.src = noticia.urlToImage;
            newImg.classList = ("mt-4 rounded-lg w-full h-auto")
    
            const newP = document.createElement("P");
            newP.textContent = noticia.content;
            newP.classList = ("mt-3 text-gray-700");
    
            const newLink = document.createElement("A");
            newLink.textContent = "Leer más";
            newLink.href = noticia.url;
            newLink.classList = ("mt-4 inline-block text-blue-500 hover:underline");

            const newButton = document.createElement("BUTTON");
            newButton.textContent="❤️";
            newButton.id="btnGuardar";
            newButton.classList="grayscale ml-[80%] mt-4 text-red-500 hover:text-red-700 focus:outline-none";
    
            newArticle.append(newTitle);
            newArticle.append(newTime);
            newArticle.append(newImg);
            newArticle.append(newP);
            newArticle.append(newLink);
            newArticle.append(newButton);
    
            fragment.append(newArticle);
        }
    });
    containerNoticias.append(fragment);
};

// Fetch de noticias actuales
const cargarNoticias = async (event) => {

    var url = 'https://newsapi.org/v2/top-headlines?' +
        'q=Apple&' +
        'from=&' +
        'sortBy=popularity&' +
        'apiKey=56302d658919469285315d479d2c22c5';

    var req = new Request(url);

    // Dentro del fetch llamamos a la funcion mostrar noticias con el parámetro arrayNoticias
    // array el cual recoge las noticias de la API
    fetch(req)
        .then(response => response.json())
        .then(responseJSON => {
            arrayNoticias = responseJSON.articles;
            mostrarNoticias(arrayNoticias);
        });

};

// Funcion para guardar las noticias en el localStorage
const guardarNoticia=(noticia)=>{
    noticias.push(new ObjetoNoticia(noticia.title, noticia.publishedAt, noticia.url, noticia.urlToImage, noticia.content, noticia.url))
    localStorage.setItem("noticias", JSON.stringify(noticias));
}
// Funcion para guardar nuestras noticias favoritas
const clickFavoritos=(event)=>{
    let elegido=event.target;
    let titulo=event.target.parentElement.firstElementChild.textContent;
    // Verificamos que hemos hecho click en el boton correcto
    if(elegido.tagName=="BUTTON" && event.target.id=="btnGuardar"){ 
        // En caso de que no estuviese añadida la noticia en favoritos (el icono de corazon en gris)
        // Llamamos a la funcion aniadirFavorito() junto al parametro titulo, el cual nos servira para encontrar la noticia seleccionada
        if(elegido.classList!="grayscale-0"){
            aniadirFavorito(titulo);
        }
        // Cambiamos de color el icono del corazon
        elegido.classList.toggle("grayscale-0");
    }
}
// Funcion para añadir la noticia favorita al localStorage
const aniadirFavorito=(titulo)=>{
    // Recogemos las noticias ya guardadas
    let noticiasStorage=JSON.parse(localStorage.getItem("noticias"));
    // Recogemos las noticias favoritas ya guardadas
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    // Por cada noticia del localStorage verificamos el titulo de la notica y de la noticia seleccionada a favorita
    noticiasStorage.forEach(noticia => {
        if(noticia._titulo==titulo){
            // Añadimos la noticia al array favoritos
            favoritos.push(noticia);
            // Añadimos la noticia al localStorage favoritos
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        }
    });

}

document.addEventListener("DOMContentLoaded", iniciarPagina)
containerNoticias.addEventListener("click", clickFavoritos);