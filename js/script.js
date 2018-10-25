function buildCypherGrid(sentenceLengthNum) {
  var size = Math.sqrt(sentenceLengthNum)
  var height = Math.ceil(size);
  var length = Math.round(size);

  return {sentenceLengthNum, height, length};
}

function alphaCharsOnly(dirtyArray) {
  const regex = /[A-Za-z]/gim;
  var results = dirtyArray.match(regex);

  results = results.map(function(x){
    return x.toLowerCase();
  });
  return buildCypherGrid(results.length);
}

$(function() {

  $("#formOne").submit(function(e) {
    e.preventDefault();

    var userInput = $("#user-sentence").val()

    console.log(alphaCharsOnly(userInput));
  })

})
