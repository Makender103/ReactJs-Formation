
export default class Categorias {
    constructor() {
        this.categorias= [];
        this._inscritos = []
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria)
    }
}