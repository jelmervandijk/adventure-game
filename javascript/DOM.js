var optie1 = document.getElementById("optie1");
var optie3 = document.getElementById("optie2");
var optie3 = document.getElementById("optie3");
var img = document.getElementById("img");
var title = document.getElementById("title")
var optie4 = document.getElementById("optie4")
var h1 = document.getElementById("h1")

function Bunker() {
    title.innerHTML ="Bunker";
    img1.src = "images/Bunker.png"; 
    optie1.innerHTML ="Go Back";
    optie2.innerHTML = "Forest";
    optie3.innerHTML = "Beach";
    h1.innerHTML = "Bunker";
    h1.style.display ="block";
   	document.body.style.backgroundImage = "url('images/background2.jpg')";
    optie1.setAttribute("onclick", "start()");
    img1.style.display = "block";
    optie3.style.display = "block";
    optie4.style.display = "block";
    optie2.setAttribute("onclick", "Forest()");
    optie3.setAttribute("onclick", "Beach()");

}

function start() {
    title.innerHTML = "Escape from tarkov"; 	
    optie1.innerHTML = "Start";
    optie2.innerHTML = "How to play"
    img1.src = "#"; 
    optie1.setAttribute("onclick", "Bunker()"); 
    document.body.style.backgroundImage = "url('images/mainmenu.jpg')";
    img1.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
    h1.style.display ="none";
}

function Forest() {
	title.innerHTML = "The Forrest";
	img1.src = "images/nightforest.jpg";
	h1.innerHTML = "Forest";
	optie1.innerHTML = "Bunker";
	optie2.innerHTML = "look for items"
	optie3.innerHTML = "Military base"
	optie1.setAttribute("onclick", "Bunker()");
	optie3.setAttribute("onclick", "Military()");
	optie2.setAttribute("onclick", "");
	optie4.style.display = "none"
}
function dead() {
	title.innerHTML = "Game over";
	document.body.style.backgroundImage = "url('images/gameover.png')";
	optie1.innerHTML = "mainmenu"
	optie1.setAttribute("onclick", "start()");
	optie3.style.display ="none";
	optie2.style.display = "none";
	optie4.style.display = "none";
}
function Beach() {
	title.innerHTML = "Beach";
	h1.innerHTML = "Beach";
	img1.src = "images/strand.jpg"
	optie1.innerHTML = "Bunker";
	optie2.innerHTML = "look for items";
	optie3.innerHTML = "Hospital";
	optie1.setAttribute("onclick", "Bunker()");
	optie3.setAttribute("onclick", "Hospital()");
}
function Hospital() {
	title.innerHTML = "Hospital";
	h1.innerHTML = "Hospital";
	img1.src = "images/ziekenhuis.png";
	optie1.innerHTML = "Beach";
	optie2.innerHTML = "2 people";
	optie3.innerHTML = "School";
	optie1.setAttribute("onclick", "Beach()");
	optie3.setAttribute("onclick", "School()");

}
function School() {
	title.innerHTML = "School";
	h1.innerHTML = "School";
	img1.src = "images/school.jpeg";
	optie1.innerHTML = "Hospital";
	optie2.innerHTML = "Appertment Complex";
	optie3.innerHTML = "meet Artjom";
	optie1.setAttribute("onclick", "Hospital()");
	optie2.setAttribute("onclick", "Appertment()");
}
function Appertment() {
	title.innerHTML = "Appertment";
	h1.innerHTML = "Appertment";
	img1.src = "images/appertment.jpg";
	optie1.innerHTML = "School";
	optie2.innerHTML = "Metro";
	optie3.innerHTML = "Look for items";
	optie1.setAttribute("onclick", "School()");
	optie2.setAttribute("onclick", "Metro()");
	optie4.style.display = "none";
}

function Metro() {
	title.innerHTML = "Metro";
	h1.innerHTML = "Metro";
	img1.src = "images/Metro.jpg";
	optie1.innerHTML = "Go with Train";
	optie2.innerHTML = "Appertment";
	optie3.innerHTML = "nuclear power plant";
	optie1.setAttribute("onclick", "Appertment()");
	optie3.setAttribute("onclick", "`Metro()");
}
function Military() {
	title.innerHTML = "Military base";
	h1.innerHTML = "Military base";
	img1.src = "images/Militarybase.jpg";
	optie1.innerHTML = "Meet Artjom";
	optie2.innerHTML = "Forest";
	optie3.innerHTML = "Shooting Range";
	optie2.setAttribute("onclick", "Forest()");
	optie3.setAttribute("onclick", "Shooting()");
}
function Shooting() {
	title.innerHTML = "Shooting Range";
	h1.innerHTML = "Shooting Range";
	img1.src = "images/Shooting.jpg";
	optie1.innerHTML = "Militarybase";
	optie2.innerHTML = "Look for Items";
	optie3.innerHTML = "nuclear power plant";
	optie1.setAttribute("onclick", "Military()");
	optie2.setAttribute("onclick", "Forest()");
	optie3.setAttribute("onclick", "Nuclear()");
}
function Nuclear() {
	title.innerHTML = "Nuclear power plant";
	h1.innerHTML = "Nuclear power plant";
	img1.src = "images/power.jpg";
	optie1.innerHTML = "Shooting Range"; 	
	optie2.innerHTML = "Look for Items";
	optie3.innerHTML = "Metro";
	optie1.setAttribute("onclick", "Shooting()");
	optie2.setAttribute("onclick", "Forest()");
	optie3.setAttribute("onclick", "Metro()");
}
