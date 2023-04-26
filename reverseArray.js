function reverseArray (toBeReversed){
  var reversed = [];

  function reverser (toBeReversed){
    if (toBeReversed.length !== 0){
      reversed.push( toBeReversed.pop() );
      reverser( toBeReversed );
    }
  }

  reverser(toBeReversed);
  return reversed;
}