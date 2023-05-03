function dataPorExtenso(data){
    let dia = Intl.DateTimeFormat('pt', {day: 'numeric'}).format(data);
    let diaSemana = Intl.DateTimeFormat('pt', {weekday: 'long'}).format(data);
    let mes = Intl.DateTimeFormat('pt', {month: "long"}).format(data);
    let ano = Intl.DateTimeFormat('pt', {year: 'numeric'}).format(data);

    return diaSemana + ', ' + dia + ' de ' + mes + ' de ' + ano;
}
