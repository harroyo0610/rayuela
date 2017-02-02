var flag_1 = false;
var flag_2 = false;

$(document).ready(function() {
  drawCells();

	$("#start_btn").on("click", function(){
    var start = new Date;
    intervalo = setInterval(function() {
      counter = Math.round((new Date - start) / 1000)
      if (counter == 1) {
        $('#counter_start').text(3);
      }else if (counter == 2) {
        $('#counter_start').text(2); 
      }else if (counter == 3) {
        $('#counter_start').text(1); 
      }else if (counter == 4) {
        $('#counter_start').text("Empieza!"); 
        $("#start_btn").text("Reiniciar");

        moveCoin("#Player1", null);
        //stopCoin => bind con keyup/down/press
        moveCoin("#Player2", null);
        //stopCoin => bind con keyup/down/press
        // stopCoin();
        $(document).bind("keyup", stopCoin());
      };
        
    }, 1000);
  })



});

function moveCoin(jugador, player_stop){
  clearInterval(intervalo);
  player = $(jugador).find(".active");
  if ($(player).attr("id") == "celda90") { 
    clearTimeout(function(){ moveCoin(jugador, null) });        
  }
  else{
    if (player_stop != null) {
      if (player_stop == "Player1") {

        if (flag_1) {
          //clearTimeout(function(){ moveCoin(jugador, null) });
          //player.removeClass("active");
          console.log("banderita1");
          console.log(jugador);
        }

      }

      else if (player_stop == "Player2") {

        if (flag_2) {
          clearTimeout(function(){ moveCoin(jugador, null) });
          console.log("banderita2");
          console.log(jugador);

        }

      }
    }else{
      player.next().addClass("active");
      player.removeClass("active");
      setTimeout(function(){ moveCoin(jugador, null) }, 80);
    };
  };

};

function drawCells(){
  for (var i = 1; i <= 100; i++) {
    $("tr").append("<td></td>").children();
    player_1 = $("#Player1").find("*");
    player_1.eq(i+1).attr("id", "celda"+i)
    player_2 = $("#Player2").find("*");
    player_2.eq(i+1).attr("id", "celda"+i)
  };
  $("#player1").next().addClass("active");
  $("#player2").next().addClass("active");
  $("#Player1").children().eq(90).addClass("lost_zone");
  $("#Player2").children().eq(90).addClass("lost_zone");
}

function stopCoin(){
  $(document).keyup(function(event){

    if (event.keyCode == 37 ) {
      flag_1 = true;
      moveCoin("#Player1", "Player1");
    }
    else if (event.keyCode == 39) {
      flag_2 = true;
      moveCoin("#Player2", "Player2");

    };
  });
}
