const mes = new Map()
 
    month_value = data.getMonth() + 1;

    mes.set(1, "janeiro"),
    mes.set(2, "fevereiro"),
    mes.set(3, "março"),
    mes.set(4, "abril"),
    mes.set(5, "maio"),
    mes.set(6, "junho"),
    mes.set(7, "julho"),
    mes.set(8, "agosto"),
    mes.set(9, "setembro"),
    mes.set(10, "outubro"),
    mes.set(11, "novembro"),
    mes.set(12, "dezembro")

 return mes.get(mesAtual);
