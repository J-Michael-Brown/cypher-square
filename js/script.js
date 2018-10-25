function buildCypherGrid(sentenceLengthNum) { // takes length of parsed sentence array and gives x- and y-axis
  var size = Math.sqrt(sentenceLengthNum)
  var height = Math.ceil(size);
  var length = Math.round(size);

  return {height, length};
}

function alphaCharsOnly(dirtyArray) { // takes user input sentence and gives an array of the sentence without capitols, special symbols, or numbers. and transforms to all lower case.
  const regex = /[A-Za-z]/gim;
  var results = dirtyArray.match(regex);

  results = results.map(function(x){
    return x.toLowerCase();
  });

  return results
  // return buildCypherGrid(results.length);
}

function createCypherArray(cleanArray, length, height) {
  var cypherArray = [];
  for (var i = 0; i < length; i++) {
    for (var j = i; j < height*length; j += length){
      if (cleanArray[j]){
        cypherArray.push(cleanArray[j]);
      }
    }
  }
  // console.log(cypherArray);
  return cypherArray;
}

function cleanedResults(word) {
  const spacing = 6;

  for (var i=0; i<word.length;i+=spacing) {
    word.splice(i, 0, " ");
  }

  console.log(word.join(""));


}

$(function() {

  $("#formOne").submit(function(e) {
    e.preventDefault();

    var userInput = $("#user-sentence").val()

    // console.log(alphaCharsOnly(userInput));

    var cleanedSentence = alphaCharsOnly(userInput);
    var coords = buildCypherGrid(cleanedSentence.length);

    cleanedResults(createCypherArray(cleanedSentence, coords.length, coords.height));
    // coords.height
    // coord.length



  })

})
