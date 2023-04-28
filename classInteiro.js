class Inteiro {

    #valor;

    constructor(valor){
        this.#valor = valor
        if(typeof valor === "number"){
            this.#valor = Math.floor(valor)
        } 
        else {
            this.#valor = 0;
        }
    }
    get valor(){
        return this.#valor;
    }
}
