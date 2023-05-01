class Inteiro {
       #valor;

    constructor(valor){
        this.#valor = valor
        if(typeof valor === "number"){
            this.#valor = Math.trunc(valor) //parte inteira
        } 
        else {
            this.#valor = 0; //0 se não for
        }
    }

    set valor(novoValor){
        if(typeof novoValor === "number"){
            this.#valor = Math.trunc(novoValor);
        }
    }

    get valor(){
        return this.#valor;
    }
}

/*
Cria a classe Inteiro que tem um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for.

Deve ser possível aceder e alterar a propriedade valor garantindo as regras acima.

Se o valor estiver definido e for passado um novo valor inválido, deve manter-se o valor anterior.

Deves utilizar o # para marcar a propriedade privada e implementar o set e o get . As regras podem ser garantidas na implementação do set.




*/
