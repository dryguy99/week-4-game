
var luke = {
		name: "Luke",   
		health: 100,
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
		health: 120,
		attack: 6,
		counterAttack: 7,
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
		health: 150,
		attack: 6,
		counterAttack: 25,
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
		health: 100,
		attack: 6,
		counterAttack: 20,
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
var defender = {};
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
var tO ="";
var tOff = "";


function initialize () {
	$("h3#start").css("display", "none");
	$("h3#directions").css("display", "inline");
	myChamp = "";
	myEnemy = "";
	attack = 6;
	cAttack = 0;
	eHealthL = 100;
	eHealthO = 120;
	eHealthDV = 150;
	eHealthDM = 100;
	y = 0;
}

function attackEnemy() {
	console.log(myEnemy);
	if ((myEnemy = 'luke') && (eHealthL<= 0)) {
				alert("You Killed LUKE!");
				APD++;
				luke.toggleOff3();
			}
		else if (myEnemy = 'luke') {
				eHealthL = eHealthL - attack;
				$("#you").html(eHealthL);
				//$('.myenemy').html(('<button id="luke3" class="btn btn-lg defender" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: <span id="you">') + eHealthL + ('</span></button>'));		
				console.log("My Enemy is " + myEnemy + "updated Luke Health");
				luke.toggleOn3();
				attack += 6;}

			
	if 	((myEnemy = 'obiwan') && (eHealthO <= 0)) {
				alert("You Killed OBI-WAN!");
				APD++;
				obiwan.toggleOff3();
			}
		else if (myEnemy = 'obiwan'){
				eHealthO = eHealthO - attack;
				$("you").html(eHealthO);
				//$('.myenemy').html(('<button id="obiwan3" class="btn btn-lg defender" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="you">') + eHealthO + ('</span></button>'));
				console.log("My Enemy is " + myEnemy + "updated Obi Wan Health");
				obiwan.toggleOn3();
				attack += 6;}
	if 	((myEnemy = 'darthvader') && (eHealthDV <= 0)) {
				alert("You Killed Darth Vader!");
				APD++;
				darthvader.toggleOff3();
			}
		else if (myEnemy = 'darthvader') {
				eHealthDV = eHealthDV - attack;
				$("#you").html(eHealthDV);
				//$('.myenemy').html(('<button id="darthvader3" class="btn btn-lg defender" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="you">') + eHealthDV + ('</span></button>'));
				console.log("my enemy is " + myEnemy + "updated Darth Vader Health");
				darthvader.toggleOn3();
				attack += 6;
			}
	if 	((myEnemy = 'darthmaul') && (eHealthDM <= 0)) {
				alert("You Killed Darth Maul!");
				APD++;
				darthmaul.toggleOff3();
			}
		else if (myEnemy = 'darthmaul') {
				eHealthDM = eHealthDM - attack;
				$("#you").html(eHealthDM);
				//$('.myenemy').html(('<button id="darthmaul3" class="btn btn-lg defender" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="you">') + eHealthDM + ('</span></button>'));			
				console.log("my enemy is " + myEnemy + "updated Darth Maul Health");
				darthmaul.toggleOn3();
				attack += 6;}

}
	


function getHit() {
	enemyHealth -= hitPoints;
}

function getcounterHit() {
	myHealth -= cAttack;
}


/* Character Buttons */




function setChamp() {
	$(".cbutton").on("click", function() {
			myChamp = $(this).val();
			z = allCharArray.indexOf(myChamp);
			//tO = ('".mychar > #'+ myChamp +'"');
			console.log(myChamp + "  " + tO);
			switch (myChamp) {
				case mychamp = 'luke':
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					luke.toggleOn2();
					obiwan.toggleOn1();
					darthvader.toggleOn1();
					darthmaul.toggleOn1();
					$("div#left").css("display", "inline");
					return;
				case myChamp = 'obiwan':
					myhealth = obiwan.health;
					$('.mychar').html(('<button id="obiwan2" class="btn btn-lg champ" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					obiwan.toggleOn2();
					luke.toggleOn1();
					darthvader.toggleOn1();
					darthmaul.toggleOn1();
					$("div#left").css("display", "inline");
					return;
				case myChamp = 'darthvader':
					myhealth = darthvader.health;
					$('.mychar').html(('<button id="darthvader2" class="btn btn-lg champ" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="me">') + myhealth +('</span></button>'));
					console.log(myhealth);
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					darthvader.toggleOn2();
					luke.toggleOn1();
					obiwan.toggleOn1();
					darthmaul.toggleOn1();
					$("div#left").css("display", "inline");
					return;
				case myChamp = 'darthmaul':
					myhealth = darthmaul.health;
					$('.mychar').html(('<button id="darthmaul2" class="btn btn-lg champ" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="me">') + myhealth + ('</span></button>'));			
					console.log(myhealth)
					luke.toggleOff();
					obiwan.toggleOff();
					darthvader.toggleOff();
					darthmaul.toggleOff();
					darthmaul.toggleOn2();
					luke.toggleOn1();
					obiwan.toggleOn1();
					darthvader.toggleOn1();
					$("div#left").css("display", "inline");
					return;
			}
	});
}

function setEnemies (){
	$(".enemy").on("click", function() {
			myEnemy = $(this).val();
			switch (myEnemy) {
				case myEnemy = 'luke':
					luke.toggleOff1();
					eHealthL = luke.health;
					$('.myenemy').html(('<button id="luke3" class="btn btn-lg defender" value="luke">Luke Skywalker<br><img src="assets/images/luke1.png"><br>Health: <span id="you">') + eHealthL + ('</span></button>'));		
					luke.toggleOn3();
					$("div#right").css("display", "inline");
					return;
				case myEnemy = 'obiwan':
					eHealthO = obiwan.health;
					$('.myenemy').html(('<button id="obiwan3" class="btn btn-lg defender" value="obiwan">Obi-Wan<br><img src="assets/images/obi-wan1.png"><br>Health: <span id="you">') + eHealthO + ('</span></button>'));
					obiwan.toggleOff1();
					obiwan.toggleOn3();
					$("div#right").css("display", "inline");
					return;
				case myEnemy = 'darthvader':
					eHealthDV = darthvader.health;
					$('.myenemy').html(('<button id="darthvader3" class="btn btn-lg defender" value="darthvader">Darth Vader<br><img src="assets/images/darth-vader1.png"><br>Health: <span id="you">') + eHealthDV + ('</span></button>'));
					//console.log(myhealth);
					darthvader.toggleOff1();
					darthvader.toggleOn3();
					$("div#right").css("display", "inline");
					return;
				case myEnemy = 'darthmaul':
					eHealthDM = darthmaul.health;
					$('.myenemy').html(('<button id="darthmaul3" class="btn btn-lg defender" value="darthmaul">Darth Maul<br><img src="assets/images/darth-maul1.png"><br>Health: <span id="you">') + eHealthDM + ('</span></button>'));			
					//console.log(myhealth)
					darthmaul.toggleOff1();
					darthmaul.toggleOn3();
					$("div#right").css("display", "inline");
					return;
			}
	});	
}

function fight() {
	$(".fight").on("click", function() {
		y = 0;
		while (y < 1) {
			attackEnemy();
			y++;}
	});
}
$(document).ready(function() {
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

	/*for (i=0; i < myCharacters.length; i++) {
        var charBtn = $('<button>');
        charBtn.addClass("btn btn-lg cbutton");
        charBtn.attr("data-letter", myCharacters[i].name);//creating <button data-letter="a" class="letter-button letter letterbuttoncolor"> </button>
        charBtn.text(myCharacters[i].name + "Health: " + myCharacters[i].health);
        charBtn.append('<br><img scr=" + myCharacters[i].image + "><br>');//.text();
        //charBtn.append('<img scr=" + myCharacters[i].image + ">');
        $(".characters").append(charBtn);
        
		}*/
	$(document).keypress( function() {
		initialize();
		setChamp();
		do {
			setEnemies();
			y++;
		} while (y < 1);
		if (APD < 3) {
			fight();
		}
		
			
		
		

	});

	
	//luke.toggleOnLuke(".mychar > #luke") toggle on luke

/*		$(".characters").append("<br><h2>Click on your champion! But choose wisely...</h2>")
		$(".cbutton").on("click", function () {
			z = parseInt(this.value);
			myChamp = btnArray[z];

			console.log(typeof(myChamp) + " " + typeof(DarthMaulBtn));
			console.log(myChamp + " z=" + z); //for testing
			$(".characters").empty();
			$(".mychar").append(myChamp)
			$(".cbutton").addClass("champ")
			$(".champ").removeClass("cbutton");
		
		
			btnArray.splice(z,1);
			for (i=0; i < btnArray.length; i++) {
				//console.log(item);
				var enemybutton = $(btnArray[i]);
				$(".myenemies").append(btnArray[i]).attr('value=" + i +"');

			}
				enemybutton.on("click", function() {
					console.log($(this).attr("value"));

				});
				
			

			$('.cbutton').addClass("enemy");
			$('.enemy').removeClass(".cbutton");
		});
			/*$(".myenemies").on("click", function() {
			var item = $(this);
			var y = parseInt(item.attr("value"));
			defender = btnArray[y];
			console.log(defender + " y= " + y);
			$(".myenemy").append(defender);
				//$("#")
			
			//console.log(lookup[name]);
		});*/
});
/*$(document).ready(function() {
	initialize ();
	$(".characters").on("click", mychar (item) {
		alert(item);
	}); */

   



  