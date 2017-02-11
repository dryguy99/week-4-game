// set up object luke
var luke = {
		name: "Luke",   
		health: 145,
		attack: 6, 
		counterAttack: 12,
		image: "/assets/images/luke.jpeg",
		toggleOn: function () { //toggleon in main display
			$("#luke").css("display", "inline");
			},
		toggleOff: function () { //toggleoff in main display
			$("#luke").css("display", "none");
			},
		toggleOn1: function () { //toggle on in defender display
			$("#luke1").css("display", "inline");
			},
		toggleOff1: function () { // toggle off in defender display
			$("#luke1").css("display", "none");
			},
		toggleOn2: function () { //toggle on in my champ display
			$("#luke2").css("display", "inline");
			},
		toggleOff2: function () { // toggle off in my champ display
			$("#luke2").css("display", "none");
			},
		toggleOn3: function () { // toggle on in enemy display
			$("#luke3").css("display", "inline");
			},
		toggleOff3: function () { // toggle off in enemy display
			$("#luke3").css("display", "none");
			}
		};
// // set up object obiwan
var obiwan = {			
		name: "Obi-Wan",
		health: 140,
		attack: 6,
		counterAttack: 10,
		image: "/assets/images/obi-wan.jpeg",
		toggleOn: function () { //toggleon in main display
			$("#obiwan").css("display", "inline");
			},
		toggleOff: function () { //toggleoff in main display
			$("#obiwan").css("display", "none");
			},
		toggleOn1: function () { //toggle on in defender display
			$("#obiwan1").css("display", "inline");
			},
		toggleOff1: function () { // toggle off in defender display
			$("#obiwan1").css("display", "none");
			},
		toggleOn2: function () {//toggle on in my champ display
			$("#obiwan2").css("display", "inline");
			},
		toggleOff2: function () { // toggle off in my champ display
			$("#obiwan2").css("display", "none");
			},
		toggleOn3: function () { // toggle on in enemy display
			$("#obiwan3").css("display", "inline");
			},
		toggleOff3: function () { // toggle off in enemy display
			$("#obiwan3").css("display", "none");
			}
		};
// set up object darthvader
var darthvader = {
		name: "Darth-Vader",
		health: 160,
		attack: 6,
		counterAttack: 20,
		image: "/assets/images/darth-vader.jpeg",
		toggleOn: function () { //toggleon in main display
			$("#darthvader").css("display", "inline");
			},
		toggleOff: function () { //toggleoff in main display
			$("#darthvader").css("display", "none");
			},
		toggleOn1: function () { //toggle on in defender display
			$("#darthvader1").css("display", "inline");
			},
		toggleOff1: function () {// toggle off in defender display
			$("#darthvader1").css("display", "none");
			},
		toggleOn2: function () { //toggle on in my champ display
			$("#darthvader2").css("display", "inline");
			},
		toggleOff2: function () { // toggle off in my champ display
			$("#darthvader2").css("display", "none");
			},
		toggleOn3: function () { // toggle on in enemy display
			$("#darthvader3").css("display", "inline");
			},
		toggleOff3: function () { // toggle off in enemy display
			$("#darthvader3").css("display", "none");
			}
		};
// set up object darth maul
var darthmaul = {
		name: "Darth-Maul",
		health: 145,
		attack: 6,
		counterAttack: 18,
		image: "/assets/images/darth-maul.jpeg",
		toggleOn: function () { //toggleon in main display
			$("#darthmaul").css("display", "inline");
			},
		toggleOff: function () { //toggleoff in main display
			$("#darthmaul").css("display", "none");
			},
		toggleOn1: function () { //toggle on in defender display
			$("#darthmaul1").css("display", "inline");
			},
		toggleOff1: function () { // toggle off in defender display
			$("#darthmaul1").css("display", "none");
			},
		toggleOn2: function () { //toggle on in my champ display
			$("#darthmaul2").css("display", "inline");
			},
		toggleOff2: function () { // toggle off in my champ display
			$("#darthmaul2").css("display", "none");
			},
		toggleOn3: function () { // toggle on in enemy display
			$("#darthmaul3").css("display", "inline");
			},
		toggleOff3: function () { // toggle off in enemy display
			$("#darthmaul3").css("display", "none");
			}
		};
//define variables
var myChamp = "";
var myEnemy = "";
var Adefender = "";
var char = "";
var cAttack = 0;
var attack = 6;
var myhealth = 140;
var eHealthL = 145;
var eHealthO = 140;
var eHealthDV = 160;
var eHealthDM = 140;
var htmlclass = "";
var APD = 0;
var y = 0;
var defender;
var z = 0;
var gameOver = false;
var setDefender = false;
//reset screen for new game
function setScreen () {
	luke.toggleOn();
	luke.toggleOff1();
	luke.toggleOff2();
	luke.toggleOff3();
	obiwan.toggleOn();
	obiwan.toggleOff1();
	obiwan.toggleOff2();
	obiwan.toggleOff3();
	darthvader.toggleOn();
	darthvader.toggleOff1();
	darthvader.toggleOff2();
	darthvader.toggleOff3();
	darthmaul.toggleOn();
	darthmaul.toggleOff1();
	darthmaul.toggleOff2();
	darthmaul.toggleOff3();
}
// set up new game
function initialize () {
	setScreen();
	$("h3#start").css("display", "none"); //turn off start message
	$("h3#directions").css("display", "inline"); // turn on directions
	$("#nextpick").css("display", "none"); // turn on next enemy pick message
	$("#fight").css("display", "none"); // turn off fight button
	myChamp = "";
	myEnemy = "";
	Adefender = "";
	attack = 6;
	cAttack = 0;
	eHealthL = 145;
	eHealthO = 140;
	eHealthDV = 160;
	eHealthDM = 145;
	myhealth = 140;
	y = 0;
	APD = 0;
	gameOver = false;
	setDefender = false;
}
// champion attacks enemy
function attackEnemy() {
	//console.log("enemy: " + Adefender + " Champ is: " + myChamp);
	if ((Adefender === 'luke') && (eHealthL <=  attack)) {
				alert("You Killed LUKE!");
				APD++;
				luke.toggleOff3();
				setDefender = false;
				if (APD < 3){
					$("#nextpick").css("display", "inline");
					$("#fight").css("display", "none");}
			}
		else if (Adefender === 'luke') {
				eHealthL = eHealthL - attack;
				$("#you").html(eHealthL);
				//console.log("My Enemy is " + Adefender + " updated Luke Health");
				luke.toggleOn3();
				attack += 9;

				}

			
		else if ((Adefender === 'obiwan') && (eHealthO <= attack)) {
				alert("You Killed OBI-WAN!");
				APD++;
				obiwan.toggleOff3();
				setDefender = false;
				if (APD < 3){
					$("#nextpick").css("display", "inline");
					$("#fight").css("display", "none");}
			}
		else if (Adefender === 'obiwan'){
				eHealthO = eHealthO - attack;
				$("#you").html(eHealthO);
				//console.log("My Enemy is " + Adefender + " updated Obi Wan Health");
				obiwan.toggleOn3();
				attack += 9;}
		else if ((Adefender === 'darthvader') && (eHealthDV <= attack)) {
				alert("You Killed Darth Vader!");
				APD++;
				darthvader.toggleOff3();
				setDefender = false;
				if (APD < 3){
					$("#nextpick").css("display", "inline");
					$("#fight").css("display", "none");}
			}
		else if (Adefender === 'darthvader') {
				eHealthDV = eHealthDV - attack;
				$("#you").html(eHealthDV);
				//console.log("my enemy is " + Adefender + " updated Darth Vader Health");
				darthvader.toggleOn3();
				attack += 9;
			}
		else if	((Adefender === 'darthmaul') && (eHealthDM <= attack)) {
				alert("You Killed Darth Maul!");
				APD++;
				darthmaul.toggleOff3();
				setDefender = false;
				if (APD < 3){
					$("#nextpick").css("display", "inline");
					$("#fight").css("display", "none");}
			}
		else if (Adefender === 'darthmaul') {
				eHealthDM = eHealthDM - attack;
				$("#you").html(eHealthDM);
				//console.log("my enemy is " + Adefender + " updated Darth Maul Health");
				darthmaul.toggleOn3();
				attack += 9;}

}
	

// champion gets hit by enemy
function getHit() {
		myhealth -= cAttack;
		if ((myhealth < 60) && (myhealth > 30)) { $(".champ").css("animation-duration", "0.3s");}
		 else if ((myhealth <=30) && (myhealth > 15)){ $(".champ").css("animation-duration", "0.15s");}
		 else if (myhealth <= 15) { $(".champ").css("animation-duration", "0.07s");}
		if ((myChamp === 'luke') && (myhealth <= 0)) {
				alert(Adefender + " Killed LUKE!  You LOST!");
				gameOver = true;
				luke.toggleOff2();
				initialize();
			}
		else if (myChamp === 'luke') {
				$("#me").html(myhealth);
			}
		else if ((myChamp === 'obiwan') && (myhealth <= 0)) {
				alert(Adefender + " Killed Obi-Wan!  You LOST!");
				gameOver = true;
				obiwan.toggleOff2();
				initialize();
			}
		else if (myChamp === 'obiwan') {
				$("#me").html(myhealth);
			}
		else if ((myChamp === 'darthvader') && (myhealth <= 0)) {
				alert(Adefender + " Killed Obi-Wan!  You LOST!");
				gameOver = true;
				darthvader.toggleOff2();
				initialize();
			}
		else if (myChamp === 'darthvader') {
				$("#me").html(myhealth);
			}
		else if ((myChamp === 'darthmaul') && (myhealth <= 0)) {
				alert(Adefender + " Killed Obi-Wan!  You LOST!");
				gameOver = true;
				darthmaul.toggleOff2();
				initialize();
			}
		else if (myChamp === 'darthmaul') {
				$("#me").html(myhealth);
			}
}

// pick a champion to represent you and set up rest of game
function setChamp() {
	$(".cbutton").on("click", function() {
			myChamp = $(this).val();
			//console.log(myChamp);
			if (myChamp === 'luke') {
					//console.log("display: " + myChamp);
					myhealth = luke.health;
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					$('.mychar').html(('<button id="luke2" class="btn btn-lg champ" value="luke">Luke<br><img src="assets/images/luke1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));		
					luke.toggleOn2();
					obiwan.toggleOn1();
					darthvader.toggleOn1();
					darthmaul.toggleOn1();
					$("div#left").css("display", "inline");
					$("h3#directions").css("display", "none");
					$("#nextpick").css("display", "inline");
				}
			else if (myChamp === 'obiwan') {
					//console.log("display: " + myChamp);
					myhealth = obiwan.health;
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					$('.mychar').html(('<button id="obiwan2" class="btn btn-lg champ" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));
					obiwan.toggleOn2();
					luke.toggleOn1();
					darthvader.toggleOn1();
					darthmaul.toggleOn1();
					$("div#left").css("display", "inline");
					$("h3#directions").css("display", "none");
					$("#nextpick").css("display", "inline");
				}
			else if (myChamp === 'darthvader') {
					//console.log("display: " + myChamp);
					myhealth = darthvader.health;
					//console.log(myhealth);
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					$('.mychar').html(('<button id="darthvader2" class="btn btn-lg champ" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="me">') + myhealth +('</span></button>'));
					darthvader.toggleOn2();
					luke.toggleOn1();
					obiwan.toggleOn1();
					darthmaul.toggleOn1();
					$("div#left").css("display", "inline");
					$("h3#directions").css("display", "none");
					$("#nextpick").css("display", "inline");
				}
			else if	(myChamp === 'darthmaul') {
					//console.log("display: " + myChamp);
					myhealth = darthmaul.health;
					//console.log(myhealth)
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					$('.mychar').html(('<button id="darthmaul2" class="btn btn-lg champ" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));			
					darthmaul.toggleOn2();
					luke.toggleOn1();
					obiwan.toggleOn1();
					darthvader.toggleOn1();
					$("div#left").css("display", "inline");
					$("h3#directions").css("display", "none");
					$("#nextpick").css("display", "inline");
				}
	});
}
// pick an enemy to fight
function setEnemies (){
	$(".enemy").on("click", function() {
			Adefender = $(this).val();
			//console.log(Adefender);
			if (Adefender === 'luke') {
					luke.toggleOff1();
					cAttack = luke.counterAttack;
					eHealthL = luke.health;
					$('.myenemy').html(('<button id="luke3" class="btn btn-lg defender" value="luke">Luke<br><img src="assets/images/luke1.png"><br>Health: <span id="you">') + eHealthL + ('</span></button>'));		
					luke.toggleOn3();
					$("div#right").css("display", "inline");
					$("#nextpick").css("display", "none");
					$("#fight").css("display", "inline");
					setDefender = true;
					}
			else if (Adefender === 'obiwan') {
					eHealthO = obiwan.health;
					cAttack = obiwan.counterAttack;
					obiwan.toggleOff1();
					$('.myenemy').html(('<button id="obiwan3" class="btn btn-lg defender" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="you">') + eHealthO + ('</span></button>'));
					obiwan.toggleOn3();
					$("div#right").css("display", "inline");
					$("#nextpick").css("display", "none");
					$("#fight").css("display", "inline");
					setDefender = true;
					}
			else if (Adefender === 'darthvader') {
					eHealthDV = darthvader.health;
					cAttack = darthvader.counterAttack;
					darthvader.toggleOff1();
					$('.myenemy').html(('<button id="darthvader3" class="btn btn-lg defender" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="you">') + eHealthDV + ('</span></button>'));
					//console.log(myhealth);
					darthvader.toggleOn3();
					$("div#right").css("display", "inline");
					$("#nextpick").css("display", "none");
					$("#fight").css("display", "inline");
					setDefender = true;
					}
			else if (Adefender === 'darthmaul') {
					eHealthDM = darthmaul.health;
					cAttack = darthmaul.counterAttack;
					darthmaul.toggleOff1();
					$('.myenemy').html(('<button id="darthmaul3" class="btn btn-lg defender" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="you">') + eHealthDM + ('</span></button>'));			
					//console.log(myhealth)
					darthmaul.toggleOn3();
					$("div#right").css("display", "inline");
					$("#nextpick").css("display", "none");
					$("#fight").css("display", "inline");
					setDefender = true;
					}
	});	
}
// begin attack and counter attack with your enemy
function fight() {
	$("#fight").click(function() {
		y = 0;
		while (y < 1) {
			attackEnemy();
			y++;}
		if (APD >= 3) {
			alert("YOU WON!");
			initialize();
			}
			else if ((APD < 3) && (setDefender === true)) { getHit();};
	});
}


$(document).ready(function () {
	
 /* Character Buttons */
	$('.characters').append(('<button id="luke" class="btn btn-lg cbutton" value="luke">Luke<br><img src="assets/images/luke1.png"><br>Health: ') + luke.health + ('</button>'));		
	$('.characters').append(('<button id="obiwan" class="btn btn-lg cbutton" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health:') + obiwan.health + ('</button>'));
	$('.characters').append(('<button id="darthvader" class="btn btn-lg cbutton" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health:') + darthvader.health + ('</button>'));
	$('.characters').append(('<button id="darthmaul" class="btn btn-lg cbutton" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health:') + darthmaul.health + ('</button>'));			
	$('.myenemies').append(('<button id="luke1" class="btn btn-lg enemy" value="luke">Luke<br><img src="assets/images/luke1.png"><br>Health: ') + luke.health + ('</button>'));		
	$('.myenemies').append(('<button id="obiwan1" class="btn btn-lg enemy" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health:') + obiwan.health + ('</button>'));
	$('.myenemies').append(('<button id="darthvader1" class="btn btn-lg enemy" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health:') + darthvader.health + ('</button>'));
	$('.myenemies').append(('<button id="darthmaul1" class="btn btn-lg enemy" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health:') + darthmaul.health + ('</button>'));			
	$('.mychar').append(('<button id="luke2" class="btn btn-lg champ" value="luke">Luke<br><img src="assets/images/luke1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));		
	$('.mychar').append(('<button id="obiwan2" class="btn btn-lg champ" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));
	$('.mychar').append(('<button id="darthvader2" class="btn btn-lg champ" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="me">') + myhealth +('</span></button>'));
	$('.mychar').append(('<button id="darthmaul2" class="btn btn-lg champ" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));			
	$('.myenemy').append(('<button id="luke3" class="btn btn-lg defender" value="luke">Luke<br><img src="assets/images/luke1.png"><br>Health: <span id="you">') + eHealthL + ('</span></button>'));		
	$('.myenemy').append(('<button id="obiwan3" class="btn btn-lg defender" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="you">') + eHealthO + ('</span></button>'));
	$('.myenemy').append(('<button id="darthvader3" class="btn btn-lg defender" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="you">') + eHealthDV + ('</span></button>'));
	$('.myenemy').append(('<button id="darthmaul3" class="btn btn-lg defender" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="you">') + eHealthDM + ('</span></button>'));			
	$("#fight").css("display", "none");
	$("#reset").css("display", "none");
});	

// run program	
		$(document).keypress( function() {
			initialize();
			$("#reset").click(initialize());
			var p = 0;
			do { 
				setChamp();
				p++;}
				while (p < 2);
			do {
				setEnemies();
				y++;
			} while (y < 1);
			if (APD < 3) {
				fight();
			}
			else if (APD >= 3){
				alert("Game Over!");
				initialize();
			}
			
		});	


