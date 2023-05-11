class Mapa {
    lista = []

    constructor(){

    }
    set(chave, valor){

        for(let i = 0; i < lista.length; i++){
            let valorDentroDaPosicao = lista[i];
            if(valorDentroDaPosicao.chave === chave){
                valorDentroDaPosicao.set(valor)
            }
        }
        lista.push(new ChaveValor(chave, valor))
    }
    has(chave){
        let tem = false
        for(let i = 0; i < lista.length; i++){
            let elementoAtual = lista[i];
            if(elementoAtual.chave === chave){
                tem = true;
                continue;
            } 
        }
        return tem;
    }

    get(chave){
        let valorDaChave = undefined;
        for(let i = 0; i < lista.length; i++){
            let objetoChaveevalor = lista[i];
            if(objetoChaveevalor.chave === chave){
                valorDaChave = objetoChaveevalor.valor;
                continue
            }
        }
        return valorDaChave;
    }

    clear(){
        this.lista = []
    }
    delete(chave){
        for(let i = 0; i < lista.length; i++){
            let elementoAtual = lista[i]
            if(elementoAtual.chave === chave){
                delete lista[i]
            }
        }
    }
}


class ChaveValor {
    constructor(chave, valor){
        this.chave = chave;
        this.valor = valor;
    }

    get chave(){
        return this.chave;
    }

    set(novoValor){
        this.valor = novoValor;
    }

}
