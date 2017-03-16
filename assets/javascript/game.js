
var wins= 0;
var losses= 0;
var counter=0;
gameOver = false;


// document.ready for first loading of page - target number and number for each crystal chosen randomly. 
$ (document).ready(function() { 

targetNumber = [Math.floor(Math.random()*50)+25];
 
  $("#number-to-guess").text(targetNumber);

   	var crystals1= (Math.floor(Math.random() * 11))+1;
    var crystals2= (Math.floor(Math.random() * 11))+1;
    var crystals3= (Math.floor(Math.random() * 11))+1;
    var crystals4= (Math.floor(Math.random() * 11))+1;

console.log(crystals1);
console.log(crystals2);

// restart function to run after a win or loss is achieved, I can't get the counter to reset to 0 untill after I have clicked another crystal....:(
function restart(){
	counter = 0;
	targetNumber = [Math.floor(Math.random()*50)+25];
	$("#number-to-guess").text(targetNumber);
	targetNumber= Math.floor(Math.random()*50+25);
	var crystals1= (Math.floor(Math.random() * 11))+1;
	var crystals2= (Math.floor(Math.random() * 11))+1;
	var crystals3= (Math.floor(Math.random() * 11))+1;
	var crystals4= (Math.floor(Math.random() * 11))+1;
	gameOver=false;
}

// on click events for each crystal, update counter with the value of that crystal for that round, print the the counter, checkScore function to see if a win or loss has been achieved.

$("#blue-crystal").on("click", function() {
	counter = counter + crystals1;
	$("#counter").html(counter);
	checkScore();

});

$("#lavender-crystal").on("click", function() {
	counter = counter + crystals2;
	$("#counter").html(counter);
	checkScore();
});

$("#pink-crystal").on("click", function() {
	counter = counter + crystals3;
	$("#counter").html(counter);
	checkScore();
});

$("#purple-crystal").on("click", function() {
	counter = counter + crystals4;
	$("#counter").html(counter);
	checkScore();
});

// checkScore function if else statment, if counter = target number you win! restart function is run. If your counter is larger than target number you lose! restart function is run. the wins and losses counters are updated by ++. 
function checkScore(){

        if (counter == targetNumber) {
            gameOver=true;
            wins++;
            $("#wins").html(wins);
           	restart();
			alert("You Win!");
        }

		if (counter > targetNumber) {
            losses++;
            $("#losses").html(losses);
           	restart();
            alert("You Lose!"); 
             
        }
    }

});
  
