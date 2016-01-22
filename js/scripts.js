  var roman = function(num) {
    if (num >= 4000 || num < 1) {
    return "Hey dumbass give us a real number";
    } else {
    var romanNum = [];
    while (num >= 1000) {
      romanNum.push("M");
      num -= 1000;
    }
  }
    romanNum = romanNum.concat(craziness(num));
    return romanNum.join("");
  };

  var craziness = function(num) {
    var arrayOfArrays = [[500, 900, "CM", "D"],
                         [100, 400, "CD", "C"],
                         [50, 90, "XC", "L"],
                         [10, 40, "XL", "X"],
                         [5, 9, "IX", "V"],
                         [1, 4, "IV", "I"]];
    var romanNums = [];

    for(var i = 0; i < arrayOfArrays.length; i++){
      var romanArray = arrayOfArrays[i];
      var x = romanArray[0];
      var y = romanArray[1];
      var yy = romanArray[2];
      var xx = romanArray[3];

      while(num >= x) {
        if(num >= y) {
          romanNums.push(yy);
          num -= y;
        } else {
          romanNums.push(xx);
          num -= x;
        }
      }
    }
    return romanNums;
  }

  // while(num >= 500) {
  //   if(num >= 900) {
  //     romanNum.push("CM");
  //     num -= 900;
  //   } else {
  //     romanNum.push("D");
  //     num -= 500;
  //   }
  // }
  //
  // while(num >= 100) {
  //   if(num >= 400){
  //     romanNum.push("CD");
  //     num -= 400;
  //   } else {
  //     romanNum.push("C");
  //     num -= 100;
  //   }
  // }
  //
  // while(num >= 50) {
  //   if(num >= 90) {
  //     romanNum.push("XC");
  //     num -= 90;
  //   } else {
  //     romanNum.push("L");
  //     num -= 50;
  //   }
  // }
  //
  // while(num >= 10) {
  //   if(num >= 40) {
  //     romanNum.push("XL");
  //     num -= 40;
  //   } else {
  //     romanNum.push("X");
  //     num -= 10;
  //   }
  // }
  //
  // while(num >= 5) {
  //   if(num >= 9) {
  //     romanNum.push("IX");
  //     num -= 9;
  //   } else {
  //     romanNum.push("V");
  //     num -= 5;
  //   }
  // }
  //
  // while(num >= 1) {
  //   if(num >= 4) {
  //     romanNum.push("IV");
  //     num -= 4;
  //   } else {
  //     romanNum.push("I");
  //     num -= 1;
  //   }
  // }


//};


$(document).ready(function(event) {
    $("form#roman").submit(function(event){

      var input = parseInt($("input#message1").val());
      var result = roman(input);

  $(".result").text(result);
  $("#result").show();
  event.preventDefault();

});
});
