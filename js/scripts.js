var rules = function(num) {
  var answer = [ ]; //empty array

  for (i=0; i<=num; i++) {
    if(i.toString().includes("3")) {
      answer.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }else if(i.toString().includes("2")) {
      answer.push("Boop");
    }else if(i.toString().includes("1")) {
      answer.push("Beep");
    }else
      answer.push(" "+ i);
    }
    return answer;
  };


$(document).ready(function(){

  $("form#formOne").submit(function(event){

    event.preventDefault();

  var yes = parseInt($("#input").val());

  $("#please").text(rules(yes));


  });
});
