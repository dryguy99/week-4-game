
var myCharacters = [{
		name: "Luke",   
		health: 100,
		attack: 6, 
		counterAttack: 5,
		image: "/assets/images/luke.jpeg"},
			{
		name: "Obi-Wan",
		health: 120,
		attack: 6,
		counterAttack: 7,
		image: "/assets/images/obi-wan.jpeg"},
			{
		name: "Darth-Vader",
		health: 150,
		attack: 6,
		counterAttack: 25,
		image: "/assets/images/darth-vader.jpeg"},
			{
		name: "Darth-Maul",
		health: 100,
		attack: 6,
		counterAttack: 20,
		image: "/assets/images/darth-maul.jpeg"}
		];
	
var myChamp = "";
var myEnemies = {};
var defender = {};
var char = "";
var hitPoints = 6;



function initialize () {
	
	
	
}
//var lookup = {};
//for (var i = 0, len = myCharacters.length; i < len; i++) {
 //   lookup[myCharacters[i].id] = array[i]; // now I can use lookup[id]
//}

$(document).ready(function() {
	$(".characters").append(('<button id="Luke" class="btn btn-lg cbutton" value="Luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health:') + myCharacters[0].health + ('</button>'));
	$("#Luke").val = 1;
	//console.log(myCharacters.health[0]);
	$(".characters").append(('<button id="Obi-Wan" class="btn btn-lg cbutton" value="Obi-Wan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health:') + myCharacters[1].health + ('</button>'));
	//$("#Obi-Wan").val("Obi-Wan");​​​​​​
	//console.log(myCharacters.health[1]);
	$(".characters").append(('<button id="Darth-Vader" class="btn btn-lg cbutton" value="Darth-Vader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health:') + myCharacters[2].health + ('</button>'));
	$(".characters").append(('<button id="Darth Maul" class="btn btn-lg cbutton" value="Darth-Maul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health:') + myCharacters[3].health + ('</button>'));
	//$("#Luke").val(Characters.name[0]);​​​​​
	$(".characters").on("click", function () {
		myChamp = this.characters;
		var value = $(this).val();
		console.log($(this).val());
		console.log(myChamp + " " + value);
		//console.log(lookup[name]);
	});

/*
$(document).ready(function() {
	initialize ();
	$(".characters").on("click", mychar (item) {
		alert(item);
	}); */

   
});


  