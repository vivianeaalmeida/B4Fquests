function adicionaSemanas(data, semanas) {
    //data.setDate(data.getDate() + 7 * semanas);
    //return data; 

    let milissegundos = 7 * 24 * 60 * 60 * 1000;
    let semanaMil = semanas * milissegundos;
    let novaData = data.getTime() + semanaMil;
    let dataAtualizada = new Date(novaData);

    return dataAtualizada;
}
