function formataString(string){
    let novaString = "";
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase){
            novaString += string[i].toLowerCase();
        } else {
            novaString += string[i].toUpperCase();
        }
    }
    return novaString;
}
