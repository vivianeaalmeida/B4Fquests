function numeroTrilingue(n, lingua) {
    
    let linguaEmPt = new Map()
    linguaEmPt.set(0, "zero"),
    linguaEmPt.set(1, "um"),
    linguaEmPt.set(2, "dois"),
    linguaEmPt.set(3, "três"),
    linguaEmPt.set(4, "quatro"),
    linguaEmPt.set(5, "cinco"),
    linguaEmPt.set(6, "seis"),
    linguaEmPt.set(7, "sete"),
    linguaEmPt.set(8, "oito"),
    linguaEmPt.set(9, "nove"),
    linguaEmPt.set(10, "dez")

    let linguaEmIng = new Map()
    linguaEmIng.set(0, "zero"),
    linguaEmIng.set(1, "one"),
    linguaEmIng.set(2, "two"),
    linguaEmIng.set(3, "three"),
    linguaEmIng.set(4, "four"),
    linguaEmIng.set(5, "five"),
    linguaEmIng.set(6, "six"),
    linguaEmIng.set(7, "seven"),
    linguaEmIng.set(8, "eight"),
    linguaEmIng.set(9, "nine"),
    linguaEmIng.set(10, "ten")

    let linguaEmFr = new Map()
    linguaEmFr.set(0, "zéro"),
    linguaEmFr.set(1, "un"),
    linguaEmFr.set(2, "deux"),
    linguaEmFr.set(3, "trois"),
    linguaEmFr.set(4, "quatre"),
    linguaEmFr.set(5, "cinq"),
    linguaEmFr.set(6, "six"),
    linguaEmFr.set(7, "sept"),
    linguaEmFr.set(8, "huit"),
    linguaEmFr.set(9, "neuf"),
    linguaEmFr.set(10, "dix")

    if(lingua == 'pt'){
        return linguaEmPt.get(n)
    }
    if(lingua == 'eng'){
        return linguaEmIng.get(n)
    }

    if(lingua == 'fr'){
        return linguaEmFr.get(n)
    }
    

}
