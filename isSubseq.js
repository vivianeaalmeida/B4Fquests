function isSubseq(array, arraySub)
{
    for (let i = 0; i < arraySub.length; i++)
    {
        if (array.indexOf(arraySub[i]) == -1){
          return false;
        }
    }
    return true;
}
