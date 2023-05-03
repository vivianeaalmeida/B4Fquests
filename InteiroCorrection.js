class Inteiro {
    #inteiro
    constructor(inteiro) {
        if (!Number.isNaN(Number(inteiro))) { //aqui ele verifica se é um número. Se for, recebe o numero e arredonda
            this.#inteiro = Math.floor(inteiro);
        } else {

        this.#inteiro = 0
        }
    }

    get valor() {
    return this.#inteiro
    }
    
    set valor(nv) {
        if (!Number.isNaN(Number(nv))) { //aqui, verifica se o valor inserido (nv) é um número !NaN diferente de Not A Number
            this.#inteiro = Math.floor(nv);
        }
    }
}



//se não for um número, this inteiro recebe o valor ou recebe 0.
