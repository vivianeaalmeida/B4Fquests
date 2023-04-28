function mesPorExtensoBilingue(data, lingua){
    
    let mesAtual = data.getMonth() + 1;
    console.log(mesAtual)
    
    const mesEmPt = new Map()
    mesEmPt.set(1, "Janeiro"),
    mesEmPt.set(2, "Fevereiro"),
    mesEmPt.set(3, "Março"),
    mesEmPt.set(4, "Abril"),
    mesEmPt.set(5, "Maio"),
    mesEmPt.set(6, "Junho"),
    mesEmPt.set(7, "Julho"),
    mesEmPt.set(8, "Agosto"),
    mesEmPt.set(9, "Setembro"),
    mesEmPt.set(10, "Outubro"),
    mesEmPt.set(11, "Novembro"),
    mesEmPt.set(12, "Dezembro")

    const mesEmIn = new Map()
    mesEmIn.set(1, "January"),
    mesEmIn.set(2, "February"),
    mesEmIn.set(3, "March"),
    mesEmIn.set(4, "April"),
    mesEmIn.set(5, "May"),
    mesEmIn.set(6, "June"),
    mesEmIn.set(7, "July"),
    mesEmIn.set(8, "August"),
    mesEmIn.set(9, "September"),
    mesEmIn.set(10, "October"),
    mesEmIn.set(11, "November"),
    mesEmIn.set(12, "December")

    if(lingua == "pt"){
        return mesEmPt.get(mesAtual);
    } else {
        return mesEmIn.get(mesAtual);
    }
    
} 
