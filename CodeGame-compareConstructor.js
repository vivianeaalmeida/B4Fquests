class Pessoa {
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    comparaIdade(pessoa){
        const artigo = pessoa.sexo === "m" ? "o" : "a"

        let res = `${artigo.toUpperCase()} ${pessoa.nome}`
        
        if(pessoa.idade > this.idade){
            res += `é mais velh${artigo} do `
        }
        else if(pessoa.idade < this.idade){
            res += `é mais nov${artigo} do `
        }
        else {
            res += `é da mesma idade `
        }
        res += "que eu.";
        return res;
    }
    
}
