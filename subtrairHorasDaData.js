function subtrairHorasDaData(data, horas) {
  const novaData = new Date(data.getTime());
  novaData.setHours(novaData.getHours() - horas);
  return novaData;
}