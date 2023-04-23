function diaDaSemana(dia){

    if(dia < 1 || dia > 7){
        return "Número inválido. Por favor insira um número entre 1 e 7."
    }

    const diasCorrespondentes = new Map()
    
    diasCorrespondentes.set(1, "Domingo"),
    diasCorrespondentes.set(2, "Segunda-Feira"),
    diasCorrespondentes.set(3, "Terça-Feira"),
    diasCorrespondentes.set(4, "Quarta-Feira"),
    diasCorrespondentes.set(5, "Quinta-Feira"),
    diasCorrespondentes.set(6, "Sexta-Feira"),
    diasCorrespondentes.set(7, "Sábado")

    return diasCorrespondentes.get(dia);
}