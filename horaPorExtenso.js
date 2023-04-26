function horaPorExtenso(data){

    let date = new Date(data)
    let hora = date.getUTCHours();
    console.log(hora)
    let minuto = date.getMinutes();
    console.log(minuto)

    let mapMinutos = new Map()
    mapMinutos.set(0, "em ponto"),
    mapMinutos.set(1, "uma"),
    mapMinutos.set(2, "duas"),
    mapMinutos.set(3, "três"),
    mapMinutos.set(4, "quatro"),
    mapMinutos.set(5, "cinco"),
    mapMinutos.set(6, "seis"),
    mapMinutos.set(7, "sete"),
    mapMinutos.set(8, "oito"),
    mapMinutos.set(9, "nove"),
    mapMinutos.set(10, "dez"),
    mapMinutos.set(11, "onze"),
    mapMinutos.set(12, "doze"),
    mapMinutos.set(13, "treze"),
    mapMinutos.set(14, "catorze"),
    mapMinutos.set(15, "um quarto"),
    mapMinutos.set(16, "dezasseis"),
    mapMinutos.set(17, "dezassete"),
    mapMinutos.set(18, "dezoito"),
    mapMinutos.set(19, "dezanove"),
    mapMinutos.set(20, "vinte"),
    mapMinutos.set(21, "vinte e uma"),
    mapMinutos.set(22, "vinte e duas"),
    mapMinutos.set(23, "vinte e três"),
    mapMinutos.set(24, "vinte e quatro"),
    mapMinutos.set(25, "vinte e cinco"),
    mapMinutos.set(26, "vinte e seis"),
    mapMinutos.set(27, "vinte e sete"),
    mapMinutos.set(28, "vinte e oito"),
    mapMinutos.set(29, "vinte e nove"),
    mapMinutos.set(30, "meia"),
    mapMinutos.set(31, "trinta e um"),
    mapMinutos.set(32, "trinta e dois"),
    mapMinutos.set(33, "trinta e três"),
    mapMinutos.set(34, "trinta e quatro"),
    mapMinutos.set(35, "trinta e cinco"),
    mapMinutos.set(36, "trinta e seis"),
    mapMinutos.set(37, "trinta e sete"),
    mapMinutos.set(38, "trinta e oito"),
    mapMinutos.set(39, "trinta e nove"),
    mapMinutos.set(40, "quarenta"),
    mapMinutos.set(41, "quarenta e um"),
    mapMinutos.set(42, "quarenta e dois"),
    mapMinutos.set(43, "quarenta e três"),
    mapMinutos.set(44, "quarenta e quatro"),
    mapMinutos.set(45, "três quartos"),
    mapMinutos.set(46, "quarenta e seis"),
    mapMinutos.set(47, "quarenta e sete"),
    mapMinutos.set(48, "quarenta e oito"),
    mapMinutos.set(49, "quarenta e nove"),
    mapMinutos.set(50, "cinquenta"),
    mapMinutos.set(51, "cinquenta e um"),
    mapMinutos.set(52, "cinquenta e dois"),
    mapMinutos.set(53, "cinquenta e três"),
    mapMinutos.set(54, "cinquenta e quatro"),
    mapMinutos.set(55, "cinquenta e cinco"),
    mapMinutos.set(56, "cinquenta e seis"),
    mapMinutos.set(57, "cinquenta e sete"),
    mapMinutos.set(58, "cinquenta e oito"),
    mapMinutos.set(59, "cinquenta e nove")

    let mapHoras = new Map()
    mapHoras.set(1, "uma"),
    mapHoras.set(2, "duas"),
    mapHoras.set(3, "três"),
    mapHoras.set(4, "quatro"),
    mapHoras.set(5, "cinco"),
    mapHoras.set(6, "seis"),
    mapHoras.set(7, "sete"),
    mapHoras.set(8, "oito"),
    mapHoras.set(9, "nove"),
    mapHoras.set(10, "dez"),
    mapHoras.set(11, "onze"),
    mapHoras.set(12, "doze"),
    mapHoras.set(13, "treze"),
    mapHoras.set(14, "catorze"),
    mapHoras.set(15, "quinze"),
    mapHoras.set(16, "dezasseis"),
    mapHoras.set(17, "dezassete"),
    mapHoras.set(18, "dezoito"),
    mapHoras.set(19, "dezanove"),
    mapHoras.set(20, "vinte"),
    mapHoras.set(21, "vinte e uma"),
    mapHoras.set(22, "vinte e duas"),
    mapHoras.set(23, "vinte e três"),
    mapHoras.set(24, "vinte e quatro")

    if(minuto == 0){
        return mapHoras.get(hora) + " em " + mapMinutos.get(minuto)
    } 
    //if(minuto > 30){

    else {
        return mapHoras.get(hora) + " e " + mapMinutos.get(minuto)
    }
} 
