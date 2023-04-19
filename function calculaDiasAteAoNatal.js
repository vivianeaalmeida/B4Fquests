function calculaDiasAteAoNatal(dia, mes){
    
    let diasQueFaltam = 0;

    //CONDIÇÕES OBRIGATÓRIAS
   
    if(dia < 1 || dia > 31){
        return "Por favor introduza um dia entre 1 e 31.";
    }

    if(mes < 1 || mes > 12){
        return "Por favor introduza um mês entre 1 e 12.";
    }

    if(dia > 30 && mes === 4 || dia > 30 && mes === 6 || dia > 30 && mes === 9 || dia > 30 && mes === 11){
        return "Por favor introduza um dia entre 1 e 30.";
    }

    if(mes === 2 && dia > 28){
        return "Por favor introduza um dia entre 1 e 28."
    }

    if(mes === 12 && dia === 25){
        return "Hoje é Natal!"
    }

    //DIAS QUE FALTAM

    if(mes === 12){
        diasQueFaltam = 25 - dia;
    }


    if(mes < 12){
        diasQueFaltam += 25;
    }


    if(mes === 11){
        diasQueFaltam += 30 - dia;
    }


    if(mes < 11){
        diasQueFaltam += 30;
    }


    if(mes === 10){
        diasQueFaltam += 31 - dia;
    }


    if(mes < 10){
        diasQueFaltam += 31;
    }


    if(mes === 9){
        diasQueFaltam += 30 - dia;
    }


    if(mes < 9){
        diasQueFaltam += 30;
    }


    if(mes === 8){
        diasQueFaltam += 31 - dia;
    }


    if(mes < 8){
        diasQueFaltam += 31;
    }


    if(mes === 7){
        diasQueFaltam += 31 - dia;
    }


    if(mes < 7){
        diasQueFaltam += 31;
    }


    if(mes === 6){
        diasQueFaltam += 30 - dia;
    }


    if(mes < 6){
        diasQueFaltam += 30;
    }


    if(mes === 5){
        diasQueFaltam += 31 - dia;
    }


    if(mes < 5){
        diasQueFaltam += 31;
    }


    if(mes === 4){
        diasQueFaltam += 30 - dia;
    }


    if(mes < 4){
        diasQueFaltam += 30;
    }


    if(mes === 3){
        diasQueFaltam += 31 - dia;
    }


    if(mes < 3){
        diasQueFaltam += 31;
    }


    if(mes === 2){
        diasQueFaltam += 28 - dia;
    }


    if(mes < 2){
        diasQueFaltam += 28;
    }


    if(mes === 1){
        diasQueFaltam += 31 - dia;
    }

    return "Faltam " + diasQueFaltam + " dias até ao Natal."

}