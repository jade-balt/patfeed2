function checkIt() {
  // Initialize scores
  var twenty_three = 0;
  var sixteen= 0;
  var thirty = 0;
  var nineteen = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'twenty_three') {
        twenty_three++;
      }
      else if (e.value == 'sixteen') {
        sixteen++;
      }
      else if (e.value == 'thirty') {
        thirty++;
      }

      else if (e.value == 'nineteen') {
      nineteen++;
    }
  }
}

  // Determine result
  var counts = "twenty three: " + twenty_three + ", " +
               "sixteen: " + sixteen  + ", " +
               "thirty: " + thirty  + ", " +
               "nineteen:" + nineteen;

  // What is the highest value?
  var max = Math.max(twenty_three, sixteen, thirty, nineteen);

  // Form a message
  var message;

  if (max == twenty_three) {
    message = "You're twenty three and living the life! You are out of college and partying it up is your way of life right now";
  }
  else if (max == sixteen) {
    message = "You're sixteen and I know that because I'm sixteen too! Yay for being in the middle of high school and sadly puberty!";
  }
  else if (max == thirty) {
    message = "You're thirty and mature but not old yet .Thirty is the age when your adult life starts, good luck!";
  }
  else if (max == nineteen) {
    message = "You're nineteen and in college, probably wanting the lest expensive things and even more comfier clothes!";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
   document.getElementById('result').innerHTML = message;
}
