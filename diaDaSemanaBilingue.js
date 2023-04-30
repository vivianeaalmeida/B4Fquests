function diaDaSemanaBilingue(data, lingua) {
  let diasDaSemanaPt = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  let diasDaSemanaIng = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  let dia = new Date(data).getDay();

  if (lingua == "pt") {
    return diasDaSemanaPt[dia];
  } 
  if (lingua == "en") {
    return diasDaSemanaIng[dia];
  
