// Creamos el objeto ObjetoNoticia
export class ObjetoNoticia{
    // Creamos el constructor
    constructor(titulo, fecha, url, img, contenido, link) {
        this.titulo = titulo;      
        this.fecha = fecha;        
        this.url = url;           
        this.img = img;            
        this.contenido = contenido;          
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
}