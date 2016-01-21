var countUp = function(countTo, countBy) {
  if (countTo <= 0 || countBy <= 0) {
    return "Please enter a positive number";
  } else if (countBy <= countTo) {
    return multiplyUp(countTo, countBy);
  } else {
    return "Invalid Input";
  }
};

var multiplyUp = function(countTo, countBy) {
  var multiples = [];

  for (var i = countBy; i <= countTo; i += countBy) {
    multiples.push(i);
  }
  return multiples;
};



$(document).ready(function(event) {
    $("form#count").submit(function(event){

      var countBy= parseInt($("input#message1").val());
      var countTo = parseInt($("input#message2").val());
      var result = countUp(countTo, countBy);

  $(".result").text(result);
  $("#result").show();
  event.preventDefault();

});
});
