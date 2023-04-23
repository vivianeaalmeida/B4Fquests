function superficieDoParalelepipedoQuadrado(ladodabase, comprimento){
    let areaquad=  (2 * (ladodabase**2))
    let arearect= ( 4* (ladodabase*comprimento))
    let total = areaquad + arearect;
    return total;
}