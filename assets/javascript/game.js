
var luke = {
		name: "Luke",   
		health: 130,
		attack: 6, 
		counterAttack: 5,
		image: "/assets/images/luke.jpeg",
		toggleOn: function () {
			$("#luke").css("display", "inline");
			},
		toggleOff: function () {
			$("#luke").css("display", "none");
			},
		toggleOn1: function () {
			$("#luke1").css("display", "inline");
			},
		toggleOff1: function () {
			$("#luke1").css("display", "none");
			},
		toggleOn2: function () {
			$("#luke2").css("display", "inline");
			},
		toggleOff2: function () {
			$("#luke2").css("display", "none");
			},
		toggleOn3: function () {
			$("#luke3").css("display", "inline");
			},
		toggleOff3: function () {
			$("#luke3").css("display", "none");
			}
		};
var obiwan = {			
		name: "Obi-Wan",
		health: 140,
		attack: 6,
		counterAttack: 10,
		image: "/assets/images/obi-wan.jpeg",
		toggleOn: function () {
			$("#obiwan").css("display", "inline");
			},
		toggleOff: function () {
			$("#obiwan").css("display", "none");
			},
		toggleOn1: function () {
			$("#obiwan1").css("display", "inline");
			},
		toggleOff1: function () {
			$("#obiwan1").css("display", "none");
			},
		toggleOn2: function () {
			$("#obiwan2").css("display", "inline");
			},
		toggleOff2: function () {
			$("#obiwan2").css("display", "none");
			},
		toggleOn3: function () {
			$("#obiwan3").css("display", "inline");
			},
		toggleOff3: function () {
			$("#obiwan3").css("display", "none");
			}
		};
var darthvader = {
		name: "Darth-Vader",
		health: 160,
		attack: 6,
		counterAttack: 20,
		image: "/assets/images/darth-vader.jpeg",
		toggleOn: function () {
			$("#darthvader").css("display", "inline");
			},
		toggleOff: function () {
			$("#darthvader").css("display", "none");
			},
		toggleOn1: function () {
			$("#darthvader1").css("display", "inline");
			},
		toggleOff1: function () {
			$("#darthvader1").css("display", "none");
			},
		toggleOn2: function () {
			$("#darthvader2").css("display", "inline");
			},
		toggleOff2: function () {
			$("#darthvader2").css("display", "none");
			},
		toggleOn3: function () {
			$("#darthvader3").css("display", "inline");
			},
		toggleOff3: function () {
			$("#darthvader3").css("display", "none");
			}
		};
var darthmaul = {
		name: "Darth-Maul",
		health: 155,
		attack: 6,
		counterAttack: 18,
		image: "/assets/images/darth-maul.jpeg",
		togglerOn: function () {
			$("#darthmaul").css("display", "inline");
			},
		toggleOff: function () {
			$("#darthmaul").css("display", "none");
			},
		toggleOn1: function () {
			$("#darthmaul1").css("display", "inline");
			},
		toggleOff1: function () {
			$("#darthmaul1").css("display", "none");
			},
		toggleOn2: function () {
			$("#darthmaul2").css("display", "inline");
			},
		toggleOff2: function () {
			$("#darthmaul2").css("display", "none");
			},
		toggleOn3: function () {
			$("#darthmaul3").css("display", "inline");
			},
		toggleOff3: function () {
			$("#darthmaul3").css("display", "none");
			}
		};
var allCharArray = [luke, obiwan, darthvader, darthmaul]	
var myChamp = "";
var myEnemy = "";
var Adefender = "";
var char = "";
var cAttack = 0;
var attack = 6;
var myhealth = 100;
var eHealthL = 100;
var eHealthO = 120;
var eHealthDV = 150;
var eHealthDM = 100;
var htmlclass = "";
var APD = 0;
var y = 0;
var defender;
var z = 0;
var gameOver = false;


function initialize () {
	$("h3#start").css("display", "none");
	$("h3#directions").css("display", "inline");
	$("#nextpick").css("display", "none");
	myChamp = "";
	myEnemy = "";
	Adefender = "";
	attack = 6;
	cAttack = 0;
	eHealthL = 100;
	eHealthO = 120;
	eHealthDV = 150;
	eHealthDM = 100;
	myhealth = 100;
	y = 0;
	APD = 0;
}

function attackEnemy() {
	console.log("enemy: " + Adefender + " Champ is: " + myChamp);
	if ((Adefender === 'luke') && (eHealthL <=  attack)) {
				alert("You Killed LUKE!");
				APD++;
				luke.toggleOff3();
				if (APD < 3){
					$("#nextpick").css("display", "inline");}
			}
		else if (Adefender === 'luke') {
				eHealthL = eHealthL - attack;
				$("#you").html(eHealthL);
				//$('.myenemy').html(('<button id="luke3" class="btn btn-lg defender" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: <span id="you">') + eHealthL + ('</span></button>'));		
				console.log("My Enemy is " + Adefender + " updated Luke Health");
				luke.toggleOn3();
				attack += 9;

				}

			
		else if ((Adefender === 'obiwan') && (eHealthO <= attack)) {
				alert("You Killed OBI-WAN!");
				APD++;
				obiwan.toggleOff3();
				if (APD < 3){
					$("#nextpick").css("display", "inline");}
			}
		else if (Adefender === 'obiwan'){
				eHealthO = eHealthO - attack;
				$("#you").html(eHealthO);
				//$('.myenemy').html(('<button id="obiwan3" class="btn btn-lg defender" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="you">') + eHealthO + ('</span></button>'));
				console.log("My Enemy is " + Adefender + " updated Obi Wan Health");
				obiwan.toggleOn3();
				attack += 9;}
		else if ((Adefender === 'darthvader') && (eHealthDV <= attack)) {
				alert("You Killed Darth Vader!");
				APD++;
				darthvader.toggleOff3();
				if (APD < 3){
					$("#nextpick").css("display", "inline");}
			}
		else if (Adefender === 'darthvader') {
				eHealthDV = eHealthDV - attack;
				$("#you").html(eHealthDV);
				//$('.myenemy').html(('<button id="darthvader3" class="btn btn-lg defender" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="you">') + eHealthDV + ('</span></button>'));
				console.log("my enemy is " + Adefender + " updated Darth Vader Health");
				darthvader.toggleOn3();
				attack += 9;
			}
		else if	((Adefender === 'darthmaul') && (eHealthDM <= attack)) {
				alert("You Killed Darth Maul!");
				APD++;
				darthmaul.toggleOff3();
				if (APD < 3){
					$("#nextpick").css("display", "inline");}
			}
		else if (Adefender === 'darthmaul') {
				eHealthDM = eHealthDM - attack;
				$("#you").html(eHealthDM);
				//$('.myenemy').html(('<button id="darthmaul3" class="btn btn-lg defender" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="you">') + eHealthDM + ('</span></button>'));			
				console.log("my enemy is " + Adefender + " updated Darth Maul Health");
				darthmaul.toggleOn3();
				attack += 9;}

}
	


function getHit() {
		myhealth -= cAttack;
		if ((myChamp === 'luke') && (myhealth <= 0)) {
				alert(Adefender + " Killed LUKE!  You LOST!");
				gameOver = true;
				luke.toggleOff2();
			}
		else if (myChamp === 'luke') {
				$("#me").html(myhealth);
			}
		else if ((myChamp === 'obiwan') && (myhealth <= 0)) {
				alert(Adefender + " Killed Obi-Wan!  You LOST!");
				gameOver = true;
				obiwan.toggleOff2();
			}
		else if (myChamp === 'obiwan') {
				$("#me").html(myhealth);
			}
		else if ((myChamp === 'darthvader') && (myhealth <= 0)) {
				alert(Adefender + " Killed Obi-Wan!  You LOST!");
				gameOver = true;
				darthvader.toggleOff2();
			}
		else if (myChamp === 'darthvader') {
				$("#me").html(myhealth);
			}
		else if ((myChamp === 'darthmaul') && (myhealth <= 0)) {
				alert(Adefender + " Killed Obi-Wan!  You LOST!");
				gameOver = true;
				darthmaul.toggleOff2();
			}
		else if (myChamp === 'darthmaul') {
				$("#me").html(myhealth);
			}
}




/* Character Buttons */




function setChamp() {
	$(".cbutton").on("click", function() {
			myChamp = $(this).val();
			console.log(myChamp);
			if (myChamp === 'luke') {
					console.log("display: " + myChamp);
					myhealth = luke.health;
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					$('.mychar').html(('<button id="luke2" class="btn btn-lg champ" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));		
					luke.toggleOn2();
					obiwan.toggleOn1();
					darthvader.toggleOn1();
					darthmaul.toggleOn1();
					$("div#left").css("display", "inline");
					$("h3#directions").css("display", "none");
				}
			else if (myChamp === 'obiwan') {
					console.log("display: " + myChamp);
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
				}
			else if (myChamp === 'darthvader') {
					console.log("display: " + myChamp);
					myhealth = darthvader.health;
					console.log(myhealth);
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
				}
			else if	(myChamp === 'darthmaul') {
					console.log("display: " + myChamp);
					myhealth = darthmaul.health;
					console.log(myhealth)
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
				}
	});
}

function setEnemies (){
	$(".enemy").on("click", function() {
			Adefender = $(this).val();
			console.log(Adefender);
			if (Adefender === 'luke') {
					luke.toggleOff1();
					cAttack = luke.counterAttack;
					eHealthL = luke.health;
					$('.myenemy').html(('<button id="luke3" class="btn btn-lg defender" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: <span id="you">') + eHealthL + ('</span></button>'));		
					luke.toggleOn3();
					$("div#right").css("display", "inline");
					$("#nextpick").css("display", "none");
					}
			else if (Adefender === 'obiwan') {
					eHealthO = obiwan.health;
					cAttack = obiwan.counterAttack;
					obiwan.toggleOff1();
					$('.myenemy').html(('<button id="obiwan3" class="btn btn-lg defender" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="you">') + eHealthO + ('</span></button>'));
					obiwan.toggleOn3();
					$("div#right").css("display", "inline");
					$("#nextpick").css("display", "none");
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
					}
	});	
}

function fight() {
	$("#fight").click(function() {
		y = 0;
		while (y < 1) {
			attackEnemy();
			y++;}
		if (APD >= 3) {
			alert("YOU WON!");
			}
			else if (APD < 3) { getHit();};
	});
}


$(document).ready(function () {
	
 //This will be run  only once.

	$('.characters').append(('<button id="luke" class="btn btn-lg cbutton" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: ') + luke.health + ('</button>'));		
	$('.characters').append(('<button id="obiwan" class="btn btn-lg cbutton" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health:') + obiwan.health + ('</button>'));
	$('.characters').append(('<button id="darthvader" class="btn btn-lg cbutton" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health:') + darthvader.health + ('</button>'));
	$('.characters').append(('<button id="darthmaul" class="btn btn-lg cbutton" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health:') + darthmaul.health + ('</button>'));			
	$('.myenemies').append(('<button id="luke1" class="btn btn-lg enemy" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: ') + luke.health + ('</button>'));		
	$('.myenemies').append(('<button id="obiwan1" class="btn btn-lg enemy" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health:') + obiwan.health + ('</button>'));
	$('.myenemies').append(('<button id="darthvader1" class="btn btn-lg enemy" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health:') + darthvader.health + ('</button>'));
	$('.myenemies').append(('<button id="darthmaul1" class="btn btn-lg enemy" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health:') + darthmaul.health + ('</button>'));			
	$('.mychar').append(('<button id="luke2" class="btn btn-lg champ" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));		
	$('.mychar').append(('<button id="obiwan2" class="btn btn-lg champ" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));
	$('.mychar').append(('<button id="darthvader2" class="btn btn-lg champ" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="me">') + myhealth +('</span></button>'));
	$('.mychar').append(('<button id="darthmaul2" class="btn btn-lg champ" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));			
	$('.myenemy').append(('<button id="luke3" class="btn btn-lg defender" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: <span id="you">') + eHealthL + ('</span></button>'));		
	$('.myenemy').append(('<button id="obiwan3" class="btn btn-lg defender" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="you">') + eHealthO + ('</span></button>'));
	$('.myenemy').append(('<button id="darthvader3" class="btn btn-lg defender" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="you">') + eHealthDV + ('</span></button>'));
	$('.myenemy').append(('<button id="darthmaul3" class="btn btn-lg defender" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="you">') + eHealthDM + ('</span></button>'));			
	
});	

	
		$(document).keypress( function() {
			initialize();
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
			else {
				alert("Game Over!");
				initialize();
				setChamp();
			}
			//$("#reset").click(location.reload());
		});	


