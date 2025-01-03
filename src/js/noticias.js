const noticias = document.getElementById("noticias");

// Mostrar lista de cócteles
const mostrarNoticias = (arrayNoticias) => {
    const fragment = document.createDocumentFragment();

    arrayNoticias.forEach((noticia) => {
        const newArticle = document.createElement("Article");
        newArticle.classList = ("bg-white rounded-lg shadow-md mb-6 p-5 transition-transform transform hover:scale-105");

        const newTitle = document.createElement("H2");
        newTitle.textContent = noticia.title;
        newTitle.classList = ("text-2xl font-bold mb-2");

        const newTime = document.createElement("Time");
        newTime.textContent = noticia.publishedAt;

        const newImg = document.createElement("IMG");
        newImg.src = noticia.urlToImage;
        newImg.classList = ("mt-4 rounded-lg w-full h-auto")

        const newP= document.createElement("P");
        newP.textContent=noticia.content;
        newP.classList=("mt-3 text-gray-700");

        const newLink= document.createElement("A");
        newLink.textContent="Leer más";
        newLink.href=noticia.url;
        newLink.classList=("mt-4 inline-block text-blue-500 hover:underline");

        newArticle.append(newTitle);
        newArticle.append(newTime);
        newArticle.append(newImg);
        newArticle.append(newP);
        newArticle.append(newLink);

        fragment.append(newArticle);
    });
    noticias.append(fragment);

};

let arrayNoticias = [];

const cargarNoticias = async (event) => {

    var url = 'https://newsapi.org/v2/top-headlines?' +
        'q=Apple&' +
        'from=2025-01-01&' +
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

document.addEventListener("DOMContentLoaded", cargarNoticias)