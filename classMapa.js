class Mapa {
    
    minhaLista = []

    set(chave, valor){
        if(this.has(chave)){
            this.delete(chave)
        }
        this.minhaLista.push(new Cofre(chave, valor))
    }

    has(chave){
        for(let i = 0; i < this.minhaLista.length; i++){
            if(chave === this.minhaLista[i].chave){
                return true;
            }
        }
        return false;
    }

    get(chave){
        for(let i = 0; i < this.minhaLista.length; i++){
            if(chave === this.minhaLista[i].chave){
                return this.minhaLista[i].valor;
            }
        }
        return undefined;
    }

    clear(){
        this.minhaLista = []
    }

    delete(chave){
        for(let i = 0; i < this.minhaLista.length; i++){
            if(chave === this.minhaLista[i].chave){
                this.minhaLista.splice(i, 1)
            }
        }
    }
}


class Cofre {
    #chave;
    valor;
    constructor(chave, valor){
        this.#chave = chave;
        this.valor = valor;
    }

    get chave (){
        return this.#chave;
    }

}

let listaDeCofres = new Mapa()
listaDeCofres.set(1, "Marcelo")
listaDeCofres.set(2, "Viviane")
listaDeCofres.set(8, "Joias")
console.log(listaDeCofres);
listaDeCofres.delete(8)
console.log(listaDeCofres)
