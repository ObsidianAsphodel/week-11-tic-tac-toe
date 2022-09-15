let turn = 1; 
//On click, the text changes
$("button").on("Click", () => {
    if(turn == 1) {
        $("screen").text("Player 2 Next");
        $("button").addClass("ButtonCLickedPlayer1");
    turn = 2;
    }
    else {
        $("#screen").text("Player 1's turn");
        $("button").addClass("ButtonClickedPlayer2");
    turn = 1;
    }
});