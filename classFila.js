class Fila {

        novaFila = []
    

    adicionar(elemento){
        this.novaFila.push(elemento)
    }

    remover(){
        if(this.novaFila.length !== 0){
            this.novaFila.pop() //shift talvez? EH SHIFT
        } else {
            return "Fila vazia!"
        }
    }

    obterElemento(){
        if(this.novaFila.length !== 0){
            return this.novaFila[0];
        } else {
            return "Fila vazia!"
        }
            
    }
}
