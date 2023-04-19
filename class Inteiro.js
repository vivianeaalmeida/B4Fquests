class Inteiro {
//minha 1 versão
    #valor;

    constructor(valor){
        this.valor = valor;
        if(this.valor != isNan()){ //(?)
            return Math.floor(this.valor);
        } else {
            return 0;
        }
    }  
    
    get valor(){
        return this.valor;
    }
} 