class GarrafaDeAgua {
    #capacidade
    #quantidade
    #aberta 

    constructor(capacidade) { //PASSO 1
        this.#capacidade = capacidade
        this.#quantidade = 0 //PASSO 3
        this.#aberta = false //PASSO 2
    }

    beber() {
        if (this.#aberta) {
            
            if(this.#quantidade >= 200){
                this.#quantidade -= 200;
            }
            if(this.#quantidade < 200){
                this.#quantidade = 0
            }
            if (this.#quantidade === 0) {
                return "A garrafa está vazia"
            }
        } 
        else { 
            return "A garrafa está fechada" 
        }
    }

    encher(quant) {
        if (this.#aberta) { //se está aberta
            if(this.#quantidade < this.#capacidade){ //se tem espaço na garrafa;
                if(this.#quantidade + quant > this.#capacidade){ //se ultrapassar qtdade max
                    this.#quantidade = this.#capacidade;
                }else { //se nao ultrapassar a qtdade max
                    this.#quantidade += quant; 
                }

            } else { //se não tem espaço
                    return "A garrafa está cheia"
                }
        }
            //cap quant = capacidade ou menor que a capacide 

        else { //se está fechada
            return "A garrafa está fechada" 
        }
    }
    //PASSO 5
    abrirFechar() {
        //this.#aberta = !this.#aberta (!true tava aberta !false tava fechada)
        if (!this.#aberta) {
            this.#aberta = true;
        } else {
            this.#aberta = false;
        }
    }

    //PASSO 4
    get quantidade() {
        return this.#quantidade
    }
    get aberta() {
        return this.#aberta
    }
    get capacidade() {
        return this.#capacidade
    }
}
