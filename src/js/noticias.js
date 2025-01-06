const containerNoticias = document.getElementById("noticias");
const btnGuardar = document.getElementById("btnGuardar");

let arrayNoticias = [];
let noticias=[];

import {ObjetoNoticia} from './ObjetoNoticia.js';

// Mostrar lista de cócteles
const mostrarNoticias = (arrayNoticias) => {
    const fragment = document.createDocumentFragment();

    arrayNoticias.forEach((noticia) => {
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
            newButton.classList="grayscale ml-[85%] mt-4 text-red-500 hover:text-red-700 focus:outline-none";
    
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


const cargarNoticias = async (event) => {

    var url = 'https://newsapi.org/v2/top-headlines?' +
        'q=Apple&' +
        'from=&' +
        'sortBy=popularity&' +
        'apiKey=56302d658919469285315d479d2c22c5';

    var req = new Request(url);

    fetch(req)
        .then(response => response.json())
        .then(responseJSON => {
            arrayNoticias = responseJSON.articles;
            mostrarNoticias(arrayNoticias);
        });

};

const guardarNoticia=(noticia)=>{
    noticias.push(new ObjetoNoticia(noticia.title, noticia.publishedAt, noticia.urlToImage, noticia.content, noticia.url))
    localStorage.setItem("noticias", JSON.stringify(noticias));
}

const aniadirFavoritos=()=>{

}

document.addEventListener("DOMContentLoaded", cargarNoticias)
// btnGuardar.addEventListener("click", aniadirFavoritos);