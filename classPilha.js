class Pilha {
    
    capacidade;
    lista;

    constructor(capacidade){
        if(capacidade != undefined){
            this.capacidade = capacidade;
        } else {
            this.capacidade = Infinity;
        }
        this.lista = []
    } //PASSO 1: OK
    
    //Não deve ser possível adicionar mais elementos à pilha do que a  da mesma.

    adicionar(elem){
        if(this.capacidade == this.lista.length){
            return "Pilha cheia!"
        }
        else {
            this.lista.push(elem)
        }
    }    

    remover(){
        if(this.lista.length == 0){  
            return "Pilha vazia!"
        } else {
           this.lista.pop()
        }
    }

    obterValor(){
        if(this.lista.length == 0){
            return "Pilha vazia!"
        } else {
            return this.lista[this.lista.length -1]
        }
    }
}
//TESTE
let nomeDaClasse = new Pilha(200)
nomeDaClasse.adicionar(5)
console.log(nomeDaClasse.obterValor())
