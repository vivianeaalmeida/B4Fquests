function tempoEmPalavras(horas, minutos){
    
    const horario = new Map()
    horario.set(0, "meia noite"),
    horario.set(1, "uma"),
    horario.set(2, "duas"),
    horario.set(3, "três"),
    horario.set(4, "quatro"),
    horario.set(5, "cinco"),
    horario.set(6, "seis"),
    horario.set(7, "sete"),
    horario.set(8, "oito"),
    horario.set(9, "nove"),
    horario.set(10, "dez"),
    horario.set(11, "onze"),
    horario.set(12, "meio dia"),
    horario.set(13, "uma"),
    horario.set(14, "duas"),
    horario.set(15, "três"),
    horario.set(16, "quatro"),
    horario.set(17, "cinco"),
    horario.set(18, "seis"),
    horario.set(19, "sete"),
    horario.set(20, "oito"),
    horario.set(21, "nove"),
    horario.set(22, "dez"),
    horario.set(23, "onze")


    const minut = new Map()
    minut.set(0, "em ponto"),
    minut.set(1, "um"),
    minut.set(2, "dois"),
    minut.set(3, "três"),
    minut.set(4, "quatro"),
    minut.set(5, "cinco"),
    minut.set(6, "seis"),
    minut.set(7, "sete"),
    minut.set(8, "oito"),
    minut.set(9, "nove"),
    minut.set(10, "dez"),
    minut.set(11, "onze"),
    minut.set(12, "doze"),
    minut.set(13, "treze"),
    minut.set(14, "catorze"),
    minut.set(15, "um quarto"),
    minut.set(16, "dezasseis"),
    minut.set(17, "dezassete"),
    minut.set(18, "dezoito"),
    minut.set(19, "dezanove"),
    minut.set(20, "vinte"),
    minut.set(21, "vinte e um"),
    minut.set(22, "vinte e dois"),
    minut.set(23, "vinte e três"),
    minut.set(24, "vinte e quatro"),
    minut.set(25, "vinte e cinco"),
    minut.set(26, "vinte e seis"),
    minut.set(27, "vinte e sete"),
    minut.set(28, "vinte e oito"),
    minut.set(29, "vinte e nove"),
    minut.set(30, "meia")

    

    if(minutos >= 1 && minutos < 30){
        return horario.get(horas) + " e " + minut.get(minutos);
    } else if(minutos == 0) {
        return horario.get(horas) + " em " + minut.get(minutos);
    } else {
        return minut.get(60 - minutos) + " para as " + horario.get(horas + 1);
    }

   
}