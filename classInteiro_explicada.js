class Inteiro {
    #valor
    constructor(valor){ //recebe um valor
    //mantém apenas a parte inteira do valor se for um número
        if(typeof valor == "number"){ 
            this.#valor = Math.trunc(valor);
        } //0 se não for
        else {
            this.#valor = 0;
        }
    }
    
    //Deve ser possível aceder e alterar a propriedade
    set valor(novoValor){
        if(typeof novoValor == "number"){
            this.#valor = Math.trunc(novoValor); //colocar Math.trunc novamente, afinal, é necessário pegar a parte inteira do valor
        } else {
            return this.#valor;
        }
    }

    get valor(){
        return this.#valor; //valor de inteiro
    }
    //só o this (Inteiro) "recebe" a propriedade privada.
}
