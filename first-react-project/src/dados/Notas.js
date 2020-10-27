export default class ArrayDeNotas {
    constructor(){
        this.notas = []; 
    }

    adicionarNota(title, text, categoria) {
        const novaNota = new Nota(title, text, categoria);
        this.notas.push(novaNota);
    }

    apagarNota(indice) {
        this.notas.splice(indice, 1)
    }
}

class Nota {
    constructor(title, text, categoria){
        this.title = title;
        this.text = text;
        this.categotia = categoria;
    }
}
