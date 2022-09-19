let turn = 1;
let symbol = 'fa';
$("button").click(function(){
    if(turn == 1) {
        $("#screen").text("O's turn");
        $(this).addClass("fa fa-solid fa-xmark");
        $(this).css("background-color", "orange");
        turn = 2;           
    }
    else{   
        $("#screen").text("X's turn");
        $(this).addClass("fa fa-solid fa-o");
        $(this).css("background-color", "cyan");
        turn = 1;
    }
    check(symbol);
});
function winScreen(){
  $("body").append(
    `
    <br>
    <div class="alert alert-success text-center" role="alert" id="winScreen">
  Player Won!
  </div>
    `
  )
}
function check(symbol) {
  if (
    $(".sq1").hasClass(symbol) &&
    $(".sq2").hasClass(symbol) &&
    $(".sq3").hasClass(symbol)
  ) {
    $(".sq1").css("color", "green");
    $(".sq2").css("color", "green");
    $(".sq3").css("color", "green");
    winScreen();
    return true;
  } else if (
    $(".sq4").hasClass(symbol) &&
    $(".sq5").hasClass(symbol) &&
    $(".sq6").hasClass(symbol)
  ) {
    $(".sq4").css("color", "green");
    $(".sq5").css("color", "green");
    $(".sq6").css("color", "green");
    winScreen();
    return true;
  } else if (
    $(".sq7").hasClass(symbol) &&
    $(".sq8").hasClass(symbol) &&
    $(".sq9").hasClass(symbol)
  ) {
    $(".sq7").css("color", "green");
    $(".sq8").css("color", "green");
    $(".sq9").css("color", "green");
    winScreen();
    return true;
  } else if (
    $(".sq1").hasClass(symbol) &&
    $(".sq4").hasClass(symbol) &&
    $(".sq7").hasClass(symbol)
  ) {
    $(".sq1").css("color", "green");
    $(".sq4").css("color", "green");
    $(".sq7").css("color", "green");
    winScreen();
    return true;
  } else if (
    $(".sq2").hasClass(symbol) &&
    $(".sq5").hasClass(symbol) &&
    $(".sq8").hasClass(symbol)
  ) {
    $(".sq2").css("color", "green");
    $(".sq5").css("color", "green");
    $(".sq8").css("color", "green");
    winScreen();
    return true;
  } else if (
    $(".sq3").hasClass(symbol) &&
    $(".sq6").hasClass(symbol) &&
    $(".sq9").hasClass(symbol)
  ) {
    $(".sq3").css("color", "green");
    $(".sq6").css("color", "green");
    $(".sq9").css("color", "green");
    winScreen();
    return true;
  } else if (
    $(".sq1").hasClass(symbol) &&
    $(".sq5").hasClass(symbol) &&
    $(".sq9").hasClass(symbol)
  ) {
    $(".sq1").css("color", "green");
    $(".sq5").css("color", "green");
    $(".sq9").css("color", "green");
    winScreen();
    return true;
  } else if (
    $(".sq3").hasClass(symbol) &&
    $(".sq5").hasClass(symbol) &&
    $(".sq7").hasClass(symbol)
  ) {
    $(".sq3").css("color", "green");
    $(".sq5").css("color", "green");
    $(".sq7").css("color", "green");
    winScreen();
    return true;
  } else {
    return false;
  }
}
function reset() {
  $("#screen").text("X's go first");
  $("button").css("background-color", "rgba(255, 255, 255, 0.575)");
  $("#screen").css("background-color", "transparent");
  $(".r").removeClass("fa fa-solid fa-xmark");
  $(".r").removeClass("fa fa-solid fa-o");
  $("#winScreen").remove();
  turn = 1;

  // Reset Colors
  $(".sq1").css("color", "black");
  $(".sq2").css("color", "black");
  $(".sq3").css("color", "black");
  $(".sq4").css("color", "black");
  $(".sq5").css("color", "black");
  $(".sq6").css("color", "black");
  $(".sq7").css("color", "black");
  $(".sq8").css("color", "black");
  $(".sq9").css("color", "black");
}
