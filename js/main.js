$("#stopButton").on("click", function(){
	$(".bulb").css("background-color","red");
	$("#slowLight").css("background-color","black");
	$("#goLight").css("background-color","black");
});
	
$("#slowButton").on("click", function(){
	$(".bulb").css("background-color","yellow");
	$("#stopLight").css("background-color","black");
	$("#goLight").css("background-color","black");
});

$("#goButton").on("click", function(){
	$(".bulb").css("background-color","green");
	$("#stopLight").css("background-color","black");
	$("#slowLight").css("background-color","black");
});




/*
document.getElementById('stopButton').onclick = function(){
  document.getElementById('stopLight').style.backgroundColor = "red";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
document.getElementById('slowButton').onclick = function(){
  document.getElementById('slowLight').style.backgroundColor = "yellow";
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
document.getElementById('goButton').onclick = function(){
  document.getElementById('goLight').style.backgroundColor = "green";
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
}




$("#goButton").on("click", function(){
	$(".bulb").css("background-color","green");
	$("#stopLight").removeClass("bulb");
	$("#slowLight").removeClass("bulb");
	$("#goLight").addClass("bulb");
});

$("#goButton").on("click", function(){
    $("#traffic-light").removeClass("bulb");
    $("#goLight").addClass("bulb");
});

*/
