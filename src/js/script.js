// Recogemos todos los elementos necesarios
const container_cocteles = document.getElementById('container_cocteles');
const btn_populares=document.getElementById("btn_populares");
const btn_buscar=document.getElementById("btn_populares");
const form=document.getElementById("form");
const input_cocteles=document.getElementById("input_cocteles");
// Creamos los arrays necesarios
let coctelesPopulares=[];
let coctelesByName=[];

// Fetch de cócteles populares
const cargarCoctelesPopulares = async () => {
    // Eliminamos los cocteles anteriores
    container_cocteles.innerHTML = '';
    // Hacemos un for para indicar la cantidad de cocteles que queremos añadir
    // Usamos `https://www.thecocktaildb.com/api/json/v1/1/random.php` debido a que popular.php era una seccion de pago
    for (let i = 0; i < 21; i++) {
        // Recogemos la respuesta del fetch
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        // Guardamos la informacion usando json()
        const data = await response.json();
        // Guardamos en la variable cocteles las bebidas encontradas (.drinks)
        const cocteles = data.drinks;
        // Llamamos a la funcion mostrarCocteles(cocteles)
        mostrarCocteles(cocteles);
    }
};



// Funcion para mostrar la lista de cócteles
const mostrarCocteles = (cocteles) => {
    // Creamos el fragment
    const fragment = document.createDocumentFragment();
    // Por cada coctel del array cocteles imprimimos los datos necesarios
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
// Funcion para cargar los cocteles segun el nombre introducido
const cargarCoctelesByName = async (event) => {
    // Prevenimos la funcion por defecto del submit
    event.preventDefault();
    // Verificamos si el campo de texto está vacío o rellenado
    if(input_cocteles.value!=""){
        container_cocteles.innerHTML = '';
        // Recogemos los cocteles segun el nombre introducido por el cliente
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input_cocteles.value);
        const data = await response.json();
        const cocteles=data.drinks;
        // Mostramos los cocteles encontrados
        mostrarCocteles(cocteles);
        // Y vaciamos el campo de texto usado para la busqueda
        input_cocteles.value='';
    }
};

// Llamada a las funciones
document.addEventListener("DOMContentLoaded", cargarCoctelesPopulares)
btn_populares.addEventListener("click", cargarCoctelesPopulares);
form.addEventListener("submit", cargarCoctelesByName);