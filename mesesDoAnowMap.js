function mesesDoAno(mes){

    if(mes < 1 || mes > 12){
        return "Por favor insira um número entre 1 e 12."
    }

    const mesAtual = new Map()

    mesAtual.set(1, "Janeiro"),
    mesAtual.set(2, "Fevereiro"),
    mesAtual.set(3, "Março"),
    mesAtual.set(4, "Abril"),
    mesAtual.set(5, "Maio"),
    mesAtual.set(6, "Junho"),
    mesAtual.set(7, "Julho"),
    mesAtual.set(8, "Agosto"),
    mesAtual.set(9, "Setembro"),
    mesAtual.set(10, "Outubro"),
    mesAtual.set(11, "Novembro"),
    mesAtual.set(12, "Dezembro")

    return mesAtual.get(mes);
}