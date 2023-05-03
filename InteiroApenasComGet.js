class Inteiro {

    #valor

    constructor(valor){
        if(typeof valor === "number"){
            this.#valor = Math.trunc(valor);
        } else {
            this.#valor = 0;
        }
    }

    get valor(){
        return this.#valor;
    }
}
