function checkIt() {
  // Initialize scores
  var not_a_risk_taker = 0;
  var classical= 0;
  var extra = 0;
  var energetic = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'not_a_risk_taker') {
        not_a_risk_taker++;
      }
      else if (e.value == 'classical') {
        classical++;
      }
      else if (e.value == 'extra') {
        extra++;
      }

      else if (e.value == 'energetic') {
      energetic++;
    }
  }
}

  // Determine result
  var counts = "not risk: " + not_a_risk_taker + ", " +
               "classical: " + classical  + ", " +
               "extra: " + extra  + ", " +
               "energetic:" + energetic;

  // What is the highest value?
  var max = Math.max(not_a_risk_taker, classical, extra, energetic);

  // Form a message
  var message;

  if (max == not_a_risk_taker) {
    message = "It seems like you really don't like to take risks in life. You're pretty normal and live a basic life, which is fine, but when it comes to change you're not always excited.";
  }
  else if (max == classical) {
    message = "You're obviously more classical and like to keep it old school.You don't really like to change things up because why fix it if it's not broken?.";
  }
  else if (max == extra) {
    message = "Your are probably the most extra person you know. You like the more lavish things in life and enjoy anything that is over the top.";
  }
  else if (max == energetic) {
    message = "Your are super energetic and are a person people love to have around! You're always out trying to do something new and like to live a fast life.";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
   document.getElementById('result').innerHTML = message;
}
