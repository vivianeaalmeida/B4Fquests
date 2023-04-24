function dataMaisRecente(data1, data2) {
   let primeira = new Date(data1);
   let segunda = new Date(data2)
   if(primeira < segunda){
       return segunda;
   } else {
       return primeira;
   }
}