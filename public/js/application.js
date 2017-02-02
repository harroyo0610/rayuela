$(document).ready(function() {
  flag_1 = false;
  flag_2 = false;
  //Dibuja las celdas
  drawCells();
  //Click en jugar
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

        moveCoin("#Player1");
        moveCoin("#Player2");
      };
        
    }, 1000);
  })
});

//Funcion que dibuja las celdas
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

//Mueve la moneda
function moveCoin(jugador){
  clearInterval(intervalo);
  player = $(jugador).find(".active");
  player.next().addClass("active");
  player.removeClass("active");

  if ($(player).attr("id") == "celda91" || flag_1 == true && jugador == "#Player1") {
    console.log("entre player1");
  }else if ($(player).attr("id") == "celda91" || flag_2 == true && jugador == "#Player2") {
    console.log("entre jugador2");
  }else{
    setTimeout(function(){ moveCoin(jugador) }, 80);
  };
};

//Funcion que detecta el evento keyup
$(document).keyup(function(event){

  if (event.keyCode == 37 ) {
    flag_1 = true;
    console.log("banderita1");
  }
  else if (event.keyCode == 39) {
    flag_2 = true;
    console.log("banderita2");
  };
});
