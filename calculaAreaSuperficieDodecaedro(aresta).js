function calculaAreaSuperficieDodecaedro(aresta) {
    // Escreve aqui o teu código



 if(aresta < 0){
     return "Por favor insira um valor positivo."
 }

 let area = Math.round(3 * (aresta**2) * Math.sqrt(25+10*Math.sqrt(5)))
   return area
}
