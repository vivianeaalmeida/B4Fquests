function calculaDiaDoAno(dia, mes){
    const diaDoMes = new Map ()
    diaDoMes.set(1, 31);
    diaDoMes.set(2, 28);
    diaDoMes.set(3, 31);
    diaDoMes.set(4, 30);
    diaDoMes.set(5, 31);
    diaDoMes.set(6, 30);
    diaDoMes.set(7, 31);
    diaDoMes.set(8, 31);
    diaDoMes.set(9, 30);
    diaDoMes.set(10, 31);
    diaDoMes.set(11, 30);
    diaDoMes.set(12, 31);

    let diasQuePassaram = 0; //dia

    for(let i = 1; i < mes; i++){
        diasQuePassaram += diaDoMes.get(i);
    }
    diasQuePassaram += dia; //nao existiria
    return diasQuePassaram;
}
