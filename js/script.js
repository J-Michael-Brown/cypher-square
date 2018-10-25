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
  return cypherArray;
}

function cleanedResults(word) {
  const spacing = 6;

  for (var i=0; i<word.length;i+=spacing) {
    word.splice(i, 0, " ");
  }
  return word.join("");
}

// ----------------- UI Logic below -----------------  //

function gridBuilder(length, height) {
  var totalCells = 0
  var htmlCode = "<table>\n"

  for (var h=0; h<height; h++) {
    htmlCode = htmlCode + "\t<tr>\n"
    for (var l=0; l<length; l++) {
      htmlCode = htmlCode + '\t\t<td id="cell-'+ totalCells++ + '"></td> \n';
    }
    htmlCode = htmlCode + "\t</tr>\n"
  }
  htmlCode = htmlCode + "</table>\n";

  return htmlCode;
}

function gridFiller(cleanArray) {
  var iMax = cleanArray.length;

  for (var i=0; i<iMax; i++) {
    $("#cell-"+i).text(cleanArray[i]);
  }

}

$(function() {


  $("#formOne").submit(function(e) {
    e.preventDefault();
    var userInput = $("#user-sentence").val();
    var cleanedSentence = alphaCharsOnly(userInput);

    var coords = buildCypherGrid(cleanedSentence.length);
    var cypherArray = createCypherArray(cleanedSentence, coords.length, coords.height)
    var spyLanguage = cleanedResults(cypherArray);

    $("#coded-message").text(spyLanguage);
    $("#user-sentence").val("");

    var gridPattern = gridBuilder(coords.length, coords.height);

    $("#results-graph").append(gridPattern);

    gridFiller(cleanedSentence);

    $(".result-area").show();




  })

})
