function calculaSigno(dia, mes){


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
        return "Por favor introduza um dia entre 1 e 28.";
    }

    //SIGNO

    if(dia > 20 && mes === 3 || dia < 21 && mes === 4){
        return "Carneiro";
    }


    else if(dia > 20 && mes === 4 || dia < 21 && mes === 5){
        return "Touro";
    }


    else if(dia > 20 && mes === 5 || dia < 21 && mes === 6){
        return "Gémeos";
    }


    else if(dia > 20 && mes === 6 || dia < 23 && mes === 7){
        return "Caranguejo";
    }


    else if(dia > 22 && mes === 7 || dia < 23 && mes === 8){
        return "Leão";
    }


     else if(dia > 22 && mes === 8 || dia < 23 && mes === 9){
        return "Virgem";
    }


     else if(dia > 22 && mes === 9 || dia < 23 && mes === 10){
        return "Balança";
    }


     else if(dia > 22 && mes === 10 || dia < 22 && mes === 11){
        return "Escorpião";
    }


     else if(dia > 21 && mes === 11 || dia < 22 && mes === 12){
        return "Sagitário";
    }


     else if(dia > 21 && mes === 12 || dia < 21 && mes === 1){
        return "Capricórnio";
    }


     else if(dia > 20 && mes === 1 || dia < 19 && mes === 2){
        return "Aquário";
    }


     else if(dia > 18 && mes === 2 || dia < 21 && mes === 3){
        return "Peixes";
    }

}