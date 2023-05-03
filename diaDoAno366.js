function diaDoAno(data){
    let now = data; //a data atual recebe TODA a data
    let inicio = new Date(now.getFullYear(), 0, 0) //inicio do ano
    let diferenca = now - inicio; //data atual - inicio do ano
    let umDia = 1000 * 60 * 60 *24; //um dia inteiro 24hrs 
    let dia = Math.floor(diferenca / umDia); //pega a diferença de dias e divide por 1 dia, arredondando para pegar o dia exato.
    return dia;
} 
