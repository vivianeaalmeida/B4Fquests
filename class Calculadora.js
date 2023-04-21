class Calculadora {
    constructor(){
       this.historico = [];
       this.ultimoResultado = BigInt(0);
    }

    ultimoResultado;
    historico;

    somar(a, b){
        let inteiro1 = BigInt(a);
        
        if(b === undefined){
            let antesDaSoma = this.ultimoResultado;
            this.ultimoResultado = antesDaSoma + inteiro1;
            this.adicionaHistorico(antesDaSoma, inteiro1, "+", this.ultimoResultado)
        } else {
            let inteiro2 = BigInt(b);
            this.ultimoResultado = inteiro1 + inteiro2;
            this.adicionaHistorico(inteiro1, inteiro2, "+", this.ultimoResultado)
        }
        return this;
    }

    subtrair(a, b){
        let inteiro1 = BigInt(a);

        if(b === undefined){
            let antesDaSoma = this.ultimoResultado;
            this.ultimoResultado -= inteiro1;
            this.adicionaHistorico(antesDaSoma, inteiro1, "-", this.ultimoResultado)
        } else {
            let inteiro2 = BigInt(b);
            this.ultimoResultado = inteiro1 - inteiro2;
            this.adicionaHistorico(inteiro1, inteiro2, "-", this.ultimoResultado)
        }
        return this
    }

    multiplicar(a, b){
        let inteiro1 = BigInt(a);
        let antesDaSoma = this.ultimoResultado;
        if(b === undefined){
            this.ultimoResultado = this.ultimoResultado * inteiro1;
            this.adicionaHistorico(antesDaSoma, inteiro1, "*", this.ultimoResultado)
        } else {
            let inteiro2 = BigInt(b);
            this.ultimoResultado = inteiro1 * inteiro2;
            this.adicionaHistorico(inteiro1, inteiro2, "*", this.ultimoResultado)
        }
        return this
    }

    dividir(a, b){
        let inteiro1 = BigInt(a);
        let antesDaSoma = this.ultimoResultado;
        if(b === undefined){
            this.ultimoResultado = this.ultimoResultado / inteiro1;
            this.adicionaHistorico(antesDaSoma, inteiro1, "/", this.ultimoResultado)
        } else {
            let inteiro2 = BigInt(b);
            this.ultimoResultado = inteiro1 / inteiro2;
            this.adicionaHistorico(inteiro1, inteiro2, "/", this.ultimoResultado)
        }
        return this
    }

    limparHistorico(){
        this.ultimoResultado = BigInt(0);
        this.historico = [];
        return this;
        
    }

    obterResultado(){
        return this.ultimoResultado;
    }

    toJSON(){
        return {
            historico: this.historico, ultimoResultado: (this.ultimoResultado + "") 
        }
    }

    toString(){
        if(this.historico.length === 0){
            return "Calculadora Limpa"
        } else {
            let resposta = "=== Histórico da Calculadora ===\n"
            for(let i = 0; i < this.historico.length; i++){
                resposta += (i + 1) + ". " + this.historico[i] + "\n";
            }
            resposta += "=== Fim do Histórico ===\n"
            resposta += "Foram realizadas " + this.historico.length + " operações\n";
            resposta += "Último Resultado: " + this.ultimoResultado;
        }
    }

    adicionaHistorico(a, b, operador, resultado){
        this.historico.push(a + " " + operador + " " + b + " = " + resultado);

    }
}

let calculadora = new Calculadora()
calculadora.somar(1, 7).dividir(2)

console.log(calculadora.toSring())