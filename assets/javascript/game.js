// wins & losses tally

var wins = 0;
var losses = 0;

$(document).ready(function start() {

$(".w-l").hide();
$("#alert").hide();
$("#info").text("Choose a Cowboy!");
var reset_html = $(".container").html();
$(".container").html(reset_html);
$("#charSelect").show();
$("#clint").show();
$("#john").show();
$("#lee").show();
$("#sam").show();
$("userHealth").show();
$("opponentHealth").show();

// Variables

var user = false;
var userDead = false;
var opponent = false;
var opponent2 = false;
var opponentsLeft = 3;

// Character objects with stats 

// Clint

var clint = {
	name: "'The Man with No Name'",
	hp: 150,
	attack: 25 + Math.floor(Math.random() * 125),
	counterAttack: 20 + Math.floor(Math.random() * 20)
}

// John

var john = {
	name: "'The Duke'",
	hp: 180,
	attack: 15 + Math.floor(Math.random() * 85),
	counterAttack: 10 + Math.floor(Math.random() * 20)
}

// Lee

var lee = {
	name: "'Angel Eyes'",
	hp: 170,
	attack: 20 + Math.floor(Math.random() * 100),
	counterAttack: 15 + Math.floor(Math.random() * 20)
}

// Sam

var sam = {
	name: "'The Stranger'",
	hp: 200,
	attack: 10 + Math.floor(Math.random() * 75),
	counterAttack: 5 + Math.floor(Math.random() * 20)
}
// Sounds to be added if time permits

var clintSound;
var johnSound;
var leeSound;
var samSound;
var gunShot;
var winSound;
var loseSound;
var backgroundMusic;

// Hide toggle between title and duel screen

function hideToggle () {
	$('.hide').toggleClass('unhidden hidden');
}

// Character selection

$(".chars").one("click", function () {
	if (user === false) {
		$(this).hide();
		var newImg = $("<img class='remove'>");
		userImage = $(this).attr("src");
		// $("#userPick").attr("src", userImage);
		$("#userPick").append(newImg);
		newImg.attr("src", userImage);
		console.log(userImage);
		userChar = $(this).attr("id");
		user = true;
		opponents();
	}
	else {
		return;
	}
});


function opponents () { 
	if (opponent === false) {
		$("#info").html("<h2 id='info'>Choose your Opponent<h2>")
		$(".chars").one("click", function() {
			$(this).hide();
			$("#opponentPick img").remove();
			opponent = true;
			newImg = $("<img class='remove'>");
			opponentImage = $(this).attr("src");
			// $("#opponentPick").attr("src", opponentImage);
			$("#opponentPick").append(newImg);
			newImg.attr("src", opponentImage);
			opponentChar = $(this).attr("id");
			console.log(opponentImage);
			console.log("OPPONENT" + opponentChar);
			$("#info").html("<h2 id='info'>Press Draw to Attack</h2>");
			hideToggle();
			health();
		});
	}
	else {
		return;
	}
}

function health () {
	switch (userChar) {
		case "clint":
			$("#userHealth").html("Health: " + clint.hp);
			break;
		case "john":
			$("#userHealth").html("Health: " + john.hp);
			break;
		case "lee":
			$("#userHealth").html("Health: " + lee.hp);
			break;
		case "sam":
			$("#userHealth").html("Health: " + sam.hp);
			break;
	}

	switch (opponentChar) {
		case "clint":
			// $("#opponentHealth").empty();
			$("#opponentHealth").html("Health: " + clint.hp);
			break;
		case "john":
			// $("#opponentHealth").empty();
			$("#opponentHealth").html("Health: " + john.hp);
			break;
		case "lee":
			$("#opponentHealth").html("Health: " + lee.hp);
			break;
		case "sam":
			// $("#opponentHealth").empty();
			$("#opponentHealth").html("Health: " + sam.hp);
			break;
	}
}

// Determine which characters are currenlty fighting and set up draw event to attack

$("#DRAW").on("click", function() {
	if (user && opponent) {
		if ((userChar === "clint" || opponentChar === "clint") && (userChar === "john" || opponentChar === "john")) {
			console.log("CLINT v JOHN");
			console.log("2" + opponentChar);
			switch (userChar) {
				case "clint":
					clint.hp -= john.counterAttack;
					john.hp -= clint.attack;
					health();
					console.log(clint.hp);
					console.log(john.hp);
					check();
					checkHealth();
					break;
				case "john":
					john.hp -= clint.counterAttack;
					clint.hp -= john.attack;
					health();
					console.log(john.hp);
					console.log(clint.hp);
					check();
					checkHealth();
					break;
			}
		}
		else if ((userChar === "clint" || opponentChar === "clint") && (userChar === "lee" || opponentChar === "lee")) {
			console.log("CLINT v LEE");
			switch (userChar) {
				case "clint":
					clint.hp -= lee.counterAttack;
					lee.hp -= clint.attack;
					health();
					console.log(clint.hp);
					console.log(lee.hp);
					check();
					checkHealth();
					break;
				case "lee":
					lee.hp -= clint.counterAttack;
					clint.hp -= lee.attack;
					health();
					console.log(lee.hp);
					console.log(clint.hp);
					check();
					checkHealth();
					break;
			}
		}
		else if ((userChar === "clint" || opponentChar === "clint") && (userChar === "sam" || opponentChar === "sam")) {
			console.log("CLINT v SAM");
			switch (userChar) {
				case "clint":
					clint.hp -= sam.counterAttack;
					sam.hp -= clint.attack;
					health();
					console.log(clint.hp);
					console.log(sam.hp);
					check();
					checkHealth();
					break;
				case "sam":
					sam.hp -= clint.counterAttack;
					clint.hp -= sam.attack;
					health();
					console.log(sam.hp);
					console.log(clint.hp);
					check();
					checkHealth();
					break;
			}
		}
		else if ((userChar === "john" || opponentChar === "john") && (userChar === "lee" || opponentChar === "lee")) {
			console.log("JOHN v LEE");
			switch (userChar) {
				case "john":
					john.hp -= lee.counterAttack;
					lee.hp -= john.attack;
					health();
					console.log(john.hp);
					console.log(lee.hp);
					check();
					checkHealth();
					break;
				case "lee":
					lee.hp -= john.counterAttack;
					john.hp -= lee.attack;
					health();
					console.log(lee.hp);
					console.log(john.hp);
					check();
					checkHealth();
					break;
			}
		}
		else if ((userChar === "john" || opponentChar === "john") && (userChar === "sam" || opponentChar === "sam")) {
			console.log("JOHN v SAM");
			switch (userChar) {
				case "john":
					john.hp -= sam.counterAttack;
					sam.hp -= john.attack;
					health();
					console.log(john.hp);
					console.log(sam.hp);
					check();
					checkHealth();
					break;
				case "sam":
					sam.hp -= john.counterAttack;
					john.hp -= sam.attack;
					health();
					console.log(sam.hp);
					console.log(john.hp);
					check();
					checkHealth();
					break;
			}
		}
		else if ((userChar === "lee" || opponentChar === "lee") && (userChar === "sam" || opponentChar === "sam")) {
			console.log("LEE v SAM");
			switch (userChar) {
				case "lee":
					lee.hp -= sam.counterAttack;
					sam.hp -= lee.attack;
					health();
					console.log(lee.hp);
					console.log(sam.hp);
					check();
					checkHealth();
					break;
				case "sam":
					sam.hp -= lee.counterAttack;
					lee.hp -= sam.attack;
					health();
					console.log(sam.hp);
					console.log(lee.hp);
					check();
					checkHealth();
					break;
			}
		}
		else {
			console.log("got to else");
		}
	}


// Check if game is over

function check () {
	if (opponentsLeft === 0) {
		$(".w-l").show();
		wins++;
		console.log("wins " + wins);
		$("#wins").html("Wins: " + wins);
		$("#info").html("YOU WON!!!");
		$("#charSelect").hide();
		gameOver();
	}
	else if (userDead) {
		$(".w-l").show();
		losses++;
		$("#losses").html("Losses: " + losses);
		$("#info").html("YOU LOST!");
		$("#charSelect").hide();
		hideToggle();
		gameOver();
	}
	else {
		return;
	}
}

// Check health of each character if >= 0 then check if game is over or choose another opponent

function checkHealth () {
	if (userChar && (opponentsLeft >= 1)) {
			if ((userChar === "clint" || opponentChar === "clint") && (userChar === "john" || opponentChar === "john")) {
				if (clint.hp <= 0) {
					if (userChar === "clint") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Clint Lose" + opponentsLeft);
				}
				else if (john.hp <= 0) {
					if (userChar === "john") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("John lose" + opponentsLeft);
				}
			}
			else if ((userChar === "clint" || opponentChar === "clint") && (userChar === "lee" || opponentChar === "lee")) {
				if (clint.hp <= 0) {
					if (userChar === "clint") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Clint Lose" + opponentsLeft);
				}
				else if (lee.hp <= 0) {
					if (userChar === "lee") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Lee lose" + opponentsLeft);
				}
			}
			else if ((userChar === "clint" || opponentChar === "clint") && (userChar === "sam" || opponentChar === "sam")) {
				if (clint.hp <= 0) {
					if (userChar === "clint") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Clint Lose" + opponentsLeft);
				}
				else if (sam.hp <= 0) {
					if (userChar === "sam") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Sam lose" + opponentsLeft);
				}
			}
			else if ((userChar === "john" || opponentChar === "john") && (userChar === "lee" || opponentChar === "lee")) {
				if (john.hp <= 0) {
					if (userChar === "john") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("JOHN Lose" + opponentsLeft);
				}
				else if (lee.hp <= 0) {
					if (userChar === "lee") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("LEE lose" + opponentsLeft);
				}
			}
			else if ((userChar === "john" || opponentChar === "john") && (userChar === "sam" || opponentChar === "sam")) {
				if (john.hp <= 0) {
					if (userChar === "john") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("John Lose" + opponentsLeft);
				}
				else if (sam.hp <= 0) {
					if (userChar === "sam") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Sam lose" + opponentsLeft);
				}
			}
			else if ((userChar === "lee" || opponentChar === "lee") && (userChar === "sam" || opponentChar === "sam")) {
				if (lee.hp <= 0) {
					if (userChar === "lee") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("LEE Lose" + opponentsLeft);
				}
				else if (sam.hp <= 0) {
					if (userChar === "sam") {
						userDead = true;
						check();
						return;
					}
					opponentsLeft--;
					$("#info").html("<h2 id='info'>Choose your Opponent<h2>");
					check();
					hideToggle();
					console.log(opponent);
					opponents();
					console.log("Sam lose" + opponentsLeft);
				}
			}
			else {
				console.log("ELLSLELSLSELELSSEEE");
				return;
			}		
		}
	}

function gameOver () {
	// $("#DRAW").html("Restart");
	clint.hp = 150;
	john.hp = 180;
	lee.hp = 170;
	sam.hp = 200;
	// $("#DRAW").on("click", function () {
	// 	$("#DRAW").html("DRAW");
	// 	start();
	// });
	$(".remove").remove();
	$("#alert").show();
	user = false;
	userDead = false;
	opponent = false;
	opponentsLeft = 3;
	userDead = false;
	opponent = false;
	user = false;
	document.body.addEventListener('keypress', start);
	}
});

// function reset () {
// 	window.location.reload();
// }
});

// Whats left to be added
// -------------
// Play sounds when choosing characters/hitting draw/win/lose/restart/etc.


// Known Bugs
// -----------
// When you win it still displays choose your opponent instead of you win! 
// Event listener stays active after first round to restart the game

// Random thoughts 
// ---------------
// Maybe create an instance of the game to reset var instance1 = new game; (probably doesn't work but might try if everything else fixed)
// Or could reset html containers

