
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
var myEnemy = 0;
var defender = {};
var char = "";
var cAttack = 0;
var hitPoints = 6;
var myhealth = 0;
var enemyHealth = 0;
var htmlclass = "";


function initialize () {
	hitPoints = 6;
	cAttack = 0;
	myCharacters = [{
		name: "Luke",   
		health: 100,
		attack: 6, 
		counterAttack: 5,
		image: "/assets/images/luke1.png"},
			{
		name: "Obi-Wan",
		health: 120,
		attack: 6,
		counterAttack: 7,
		image: "/assets/images/obi-wan1.png"},
			{
		name: "Darth-Vader",
		health: 150,
		attack: 6,
		counterAttack: 25,
		image: "/assets/images/darth-vader1.png"},
			{
		name: "Darth-Maul",
		health: 100,
		attack: 6,
		counterAttack: 20,
		image: "/assets/images/darth-maul1.png"}
		];	
		btnArray = [LukeBtn, ObiWanBtn, DarthVaderBtn, DarthMaulBtn];
}

function attackEnemy() {
	hitPoints += 6;
}

function getHit() {
	enemyHealth -= hitPoints;
}

function getcounterHit() {
	myHealth -= cAttack;
}
function pickEnemy() {
	$(".myenemy").on("click", function () {
		myEnemy = this.myCharacters;
		console.log(this.myCharacters); // for testing
	});
}
/* Character Buttons */
var LukeBtn = (('<button id="Luke" class="btn btn-lg cbutton" value="0">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health:') + myCharacters[0].health + ('</button>'));		
var ObiWanBtn = (('<button id="ObiWan" class="btn btn-lg cbutton" value="1">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health:') + myCharacters[1].health + ('</button>'));
var DarthVaderBtn = (('<button id="DarthVader" class="btn btn-lg cbutton" value="2">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health:') + myCharacters[2].health + ('</button>'));
var DarthMaulBtn = (('<button id="DarthMaul" class="btn btn-lg cbutton" value="3">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health:') + myCharacters[3].health + ('</button>'));			
var btnArray = [LukeBtn, ObiWanBtn, DarthVaderBtn, DarthMaulBtn];
var defender;
var z = 0;

function displayBtn (/*item*/) {
			for (i=0; i < btnArray.length; i++) {
				//console.log(item);
			$(".characters").append(btnArray[i]);}
}
$(document).ready(function() {
	/*for (i=0; i < myCharacters.length; i++) {
        var charBtn = $('<button>');
        charBtn.addClass("btn btn-lg cbutton");
        charBtn.attr("data-letter", myCharacters[i].name);//creating <button data-letter="a" class="letter-button letter letterbuttoncolor"> </button>
        charBtn.text(myCharacters[i].name + "Health: " + myCharacters[i].health);
        charBtn.append('<br><img scr=" + myCharacters[i].image + "><br>');//.text();
        //charBtn.append('<img scr=" + myCharacters[i].image + ">');
        $(".characters").append(charBtn);
        
		}*/
		initialize();
		displayBtn();
		$(".cbutton").on("click", function () {
			z = parseInt(this.value);
			myChamp = btnArray[z];
			console.log(typeof(myChamp) + " " + typeof(DarthMaulBtn));
			console.log(myChamp + " z=" + z); //for testing
			$(".mychar").append(myChamp);
			$(".characters").empty();
		
		
			btnArray.splice(z,1);
			for (i=0; i < btnArray.length; i++) {
				//console.log(item);
				$(".myenemies").append(btnArray[i]);}
			$(".myenemies").on("click", function(item) {
			var y = parseInt(item.value);
			defender = btnArray[y];
			console.log(defender + " y= " + y);
			$(".myenemy").append(defender);
				//$("#")
			});
			//console.log(lookup[name]);
		});
});
/*
$(document).ready(function() {
	initialize ();
	$(".characters").on("click", mychar (item) {
		alert(item);
	}); */

   



  