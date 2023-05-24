function stringSuperReduzida(str) {
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    if (result.length > 0 && result[result.length - 1] === str[i]) {
      result = result.slice(0, -1);
    } else {
      result += str[i];
    }
  }
  
  if (result.length === 0) {
    return "String Vazia";
  } else {
    return result;
  }
}
