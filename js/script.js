// alert('JS connected');

let colors = [
`rgb(${makeRandom()}, ${makeRandom()}, ${makeRandom()})`,
`rgb(${makeRandom()}, ${makeRandom()}, ${makeRandom()})`,
`rgb(${makeRandom()}, ${makeRandom()}, ${makeRandom()})`,
`rgb(${makeRandom()}, ${makeRandom()}, ${makeRandom()})`,
`rgb(${makeRandom()}, ${makeRandom()}, ${makeRandom()})`,
`rgb(${makeRandom()}, ${makeRandom()}, ${makeRandom()})`,
]

//set number of tries
let tries = 3;
let x = document.querySelector("#tries");
x.textContent = tries;
let numTries = document.querySelector("#tries");


//assigns the guessing / main color
let guessColor = colors[makeMainColor()];

//create var for the picked color
let pickedColor;


//outputs # mainColor to the header
let y = document.querySelector("#mainColor");
y.textContent= guessColor;

//assign color to boxes
let boxes = document.querySelectorAll(".box");
let i = 0;

boxes.forEach(function(arr) {
	arr.style.backgroundColor = colors[i];
	i++;
})

//add click event to boxes
boxes.forEach(function(arr) {
	arr.addEventListener("click", function(){
		pickedColor = this.style.backgroundColor;
		if(pickedColor=== guessColor){
			correct();
			makeColorSame();
		} else {
			this.style.backgroundColor = "transparent";
			tries--;
			x.textContent = tries;
			if(tries === 0) {
				gameOver();
			}
		}
	})
})

function makeColorSame(){
	boxes.forEach(function(arr) {
	arr.style.backgroundColor = pickedColor;
	})
	let x = document.querySelector("header")
	x.style.backgroundColor = pickedColor;
}

//random rgb number
function makeRandom(){
	return Math.floor(Math.random()*256);
}

function makeMainColor(){
	return Math.floor(Math.random()*6);
}

function gameOver() {
	let a =document.querySelector("#gameOver");
	a.classList.remove("invisible");
}

function correct() {
	let a =document.querySelector("#correct");
	a.classList.remove("invisible");
}