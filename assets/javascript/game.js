
myCharacters = {
		name: ["Luke", "Obi-Wan", "Darth-Vader", "Darth-Maul"],
		health: [100, 120, 150, 100],
		attack: [6, 6, 6, 6],
		counterAttack: [5, 7, 25, 20],
		image: ["/assets/images/luke.jpeg", "/assets/images/obi-wan.jpeg", "/assets/images/darth-vader.jpeg", "/assets/images/darth-maul.jpeg"]
	}
var myChamp = "";
var myEnemies = {};
var defender = {};
var char = "";



function initialize () {
	
	
	
}
$(document).ready(function() {
	$(".characters").append(('<button id="Luke" class="btn btn-lg cbutton" value="Luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health:') + myCharacters.health[0] + ('</button>'));
	
	//console.log(myCharacters.health[0]);
	$(".characters").append(('<button id="Obi-Wan" class="btn btn-lg cbutton" value="Obi-Wan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health:') + myCharacters.health[1] + ('</button>'));
	//$("#Obi-Wan").val("Obi-Wan");​​​​​​
	//console.log(myCharacters.health[1]);
	$(".characters").append(('<button id="Darth-Vader" class="btn btn-lg cbutton" value="Darth-Vader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health:') + myCharacters.health[1] + ('</button>'));
	$(".characters").append(('<button id="Darth Maul" class="btn btn-lg cbutton" value="Darth-Maul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health:') + myCharacters.health[1] + ('</button>'));
	//$("#Luke").val(Characters.name[0]);​​​​​
	$(".characters").on("click", function () {
		myChamp = this.value;
		var value = $(this).val();
		console.log($(this).val());
		console.log(myChamp + " " + value);
	});
/*
$(document).ready(function() {
	initialize ();
	$(".characters").on("click", mychar (item) {
		alert(item);
	}); */

   
});


  