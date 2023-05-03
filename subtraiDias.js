function subtraiDias(data, dias) {
    let dia = 1000 * 3600 * 24;
    return new Date(data.valueOf() - dia * dias)
}
