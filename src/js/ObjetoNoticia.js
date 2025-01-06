export class ObjetoNoticia{
    constructor(titulo, fecha, url, img, contenido, link) {
        this.titulo = titulo;      
        this.fecha = fecha;        
        this.url = url;           
        this.img = img;            
        this.contenido = contenido; 
        this.link = link;          
    }

    // Getters
    get titulo() {
        return this._titulo;
    }

    get fecha() {
        return this._fecha;
    }

    get url() {
        return this._url;
    }

    get img() {
        return this._img;
    }

    get contenido() {
        return this._contenido;
    }

    get link() {
        return this._link;
    }

    // Setters
    set titulo(titulo) {
        this._titulo = titulo;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    set url(url) {
        this._url = url;
    }

    set img(img) {
        this._img = img;
    }

    set contenido(contenido) {
        this._contenido = contenido;
    }

    set link(link) {
        this._link = link;
    }

    // Método para mostrar información de la noticia
    mostrarNoticia() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Fecha: ${this.fecha}`);
        console.log(`URL: ${this.url}`);
        console.log(`Imagen: ${this.img}`);
        console.log(`Contenido: ${this.contenido}`);
        console.log(`Link: ${this.link}`);
    }
}

// Ejemplo de uso
// const noticia = new ObjetoNoticia(
//     "Título de Ejemplo",
//     "2023-10-01",
//     "https://ejemplo.com/noticia",
//     "https://ejemplo.com/imagen.jpg",
//     "Este es el contenido de la noticia.",
//     "https://ejemplo.com/enlace-relacionado"
// );

// noticia.mostrarInformacion();