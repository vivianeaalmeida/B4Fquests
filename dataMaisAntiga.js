function dataMaisAntiga(datas) {
    let oldest = datas.reduce((c, n) => 
    Date.parse(n) < Date.parse(c) ? n : c)
    return oldest;
}