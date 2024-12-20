const container_cocteles = document.getElementById('container_cocteles');
const btn_populares=document.getElementById("btn_populares");
const btn_buscar=document.getElementById("btn_populares");
const form=document.getElementById("form");
const input_cocteles=document.getElementById("input_cocteles");


// Fetch lista de cócteles populares
const cargarCoctelesPopulares = async () => {
    console.log("hola mundo")
    container_cocteles.innerHTML = '';
    for (let i = 0; i < 21; i++) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const data = await response.json();
        const cocteles = data.drinks;
        mostrarCocteles(cocteles);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    cargarCoctelesPopulares();
})

btn_populares.addEventListener("click", cargarCoctelesPopulares);

// Mostrar lista de cócteles
const mostrarCocteles = (cocteles) => {
    const fragment = document.createDocumentFragment();

    cocteles.forEach((coctel) => {
        const newDiv = document.createElement("DIV");
        newDiv.classList = ("bg-purple-100 rounded shadow shadow-purple-500 p-4");

        const newImg = document.createElement("IMG");
        newImg.src = coctel.strDrinkThumb;
        newImg.alt = coctel.strDrink;
        newImg.classList = ("w-full h-80 object-cover rounded")

        const newTitle = document.createElement("H2");
        newTitle.textContent = coctel.strDrink;
        newTitle.classList = ("text-lg font-semibold mt-2 text-purple-500");

        newDiv.append(newImg);
        newDiv.append(newTitle);
        fragment.append(newDiv);
    });
    container_cocteles.append(fragment);
    
};

const cargarCoctelesByName = async (event) => {
    event.preventDefault();
    container_cocteles.innerHTML = '';
    
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input_cocteles.value);
    const data = await response.json();
    const cocteles=data.drinks;
    mostrarCocteles(cocteles);
    input_cocteles.value='';
};

form.addEventListener("submit", cargarCoctelesByName);