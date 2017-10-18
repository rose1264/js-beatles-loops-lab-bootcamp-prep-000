function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (var i=0;i<musicians.length;i++){
    emptyArray.push(musicians[i] + ' plays ' +instruments[i] )
  };
  return emptyArray;
}

function johnLennonFacts(facts){
  var result = [];
  var i=0
while (i<facts.length)
  result.push(facts[i] + "!!!")
  return result
  i++;
}
