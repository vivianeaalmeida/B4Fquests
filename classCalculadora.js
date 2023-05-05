class Calculadora {
    historico;

    constructor(){
        this.historico = [];
    }

    somar(a, b){
        let resultado = a + b;
        this.adicionaHistorico("soma", a, b, resultado);
        return resultado;
    }

    subtrair(a, b){
        let resultado = a - b;
        this.adicionaHistorico("subtração", a, b, resultado);
        return resultado;
    }

    multiplicar(a, b){
        let resultado = a * b;
        this.adicionaHistorico("multiplicação", a, b, resultado);
        return resultado;
    }

    dividir(a, b){
        let resultado = a / b;
        this.adicionaHistorico("divisão", a, b, resultado);
        return resultado;
    }

    adicionaHistorico(operacao, a, b, resultado){
        this.historico.push({
                operacao: operacao,
                a: a,
                b: b,
                resultado: resultado

        });
    }

    lerHistorico(operacao){
        if(operacao == undefined){
            this.historico = this.historico;
        }
        
        let novoArray = []
        for(let i = 0; i < this.historico.length; i++){
            let meuObjetoComPropriedades = this.historico[i];
            if(meuObjetoComPropriedades.operacao == operacao){
                novoArray.push(meuObjetoComPropriedades);
            }
        }
        return novoArray
        
    }
}
