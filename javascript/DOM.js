var optie1 = document.getElementById("optie1");
var optie3 = document.getElementById("optie2");
var optie3 = document.getElementById("optie3");
var img = document.getElementById("img");
var title = document.getElementById("title")
var optie4 = document.getElementById("optie4")
var h1 = document.getElementById("h1")
var opties = document.getElementById("opties")
var img2 = document.getElementById("img2")
var p = document.getElementById("p")
var Pickup = ["0"]
var  End = ["0"]
var Enemy = ["2"]

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
    optie3.style.display = "inline-block";
    optie4.style.display = "inline-block";
    optie2.setAttribute("onclick", "Forest()");
    optie3.setAttribute("onclick", "Beach()");
    optie4.setAttribute("onclick", "Medkit()");
    opties.style.top ='0px';
    h1.style.color = "black";
    p.style.display = "none";
    img2.style.display = "none";
    optie2.style.display = "inline";

}

function start() {
    title.innerHTML = "Escape from Tarkov"; 	
    optie1.innerHTML = "Start";
    optie2.innerHTML = "How to play"
    img1.src = "#"; 
    optie1.setAttribute("onclick", "Bunker()"); 
    document.body.style.backgroundImage = "url('images/mainmenu.jpg')";
    img1.style.display = "none";
    optie3.style.display = "none";
    optie4.style.display = "none";
    h1.style.display ="none";
    opties.style.top = '650px';
    img2.src = "#";
    img2.style.display = 'none'	
    optie2.setAttribute("onclick", "howto()");
    p.style.display = "none";
    optie2.style.display = "inline";


}

function Forest() {
	title.innerHTML = "The Forest";
	img1.src = "images/nightforest.jpg";
	h1.innerHTML = "Forest";
	optie1.innerHTML = "Bunker";
	optie2.innerHTML = "look for items"
	optie3.innerHTML = "Military base"
	optie1.setAttribute("onclick", "Bunker()");
	optie3.setAttribute("onclick", "Military()");
	optie2.setAttribute("onclick", "usp()");
	optie4.style.display = "none";
	img2.style.display = "none";
}

function dead() {
	title.innerHTML = "Game over";
	document.body.style.backgroundImage = "url('images/Dead.jpg')";
	optie1.innerHTML = "mainmenu"
	optie1.setAttribute("onclick", "start()");
	optie3.style.display ="none";
	optie2.style.display = "none";
	optie4.style.display = "none";
	img1.style.display = 'none';
	img2.style.display = 'none';
	h1.style.display = "none";
	optie1.style.display = "none";
}

function Beach() {
	title.innerHTML = "Beach";
	h1.innerHTML = "Beach";
	img1.src = "images/strand.jpg"
	optie1.innerHTML = "Bunker";
	optie2.innerHTML = "look for items";
	optie3.innerHTML = "Hospital";
	optie1.setAttribute("onclick", "Bunker()");
	optie2.setAttribute("onclick","beerup()");	
	optie3.setAttribute("onclick", "Hospital()");
	img2.style.display = "none";
	optie4.style.display = "none";
	optie1.style.display = "inline";
	optie2.style.display = "inline";
}

function Hospital() {
	title.innerHTML = "Hospital";
	h1.innerHTML = "Hospital";
	img1.src = "images/ziekenhuis.png";
	optie1.innerHTML = "Beach";
	optie2.innerHTML = "2 people";
	optie3.innerHTML = "School";
	optie1.setAttribute("onclick", "Beach()");
	optie2.setAttribute("onclick", "attack()");
	optie3.setAttribute("onclick", "School()");
	img2.style.display = "none";
	optie1.style.display = "inline";
	optie2.style.display = "inline";
	optie3.style.display = "inline";
}

function School() {
	title.innerHTML = "School";
	h1.innerHTML = "School";
	img1.src = "images/school.jpeg";
	optie1.innerHTML = "Hospital";
	optie2.innerHTML = "appartment";
	optie3.innerHTML = "meet Vladmir";
	optie1.setAttribute("onclick", "Hospital()");
	optie2.setAttribute("onclick", "appartment()");
	optie3.setAttribute("onclick", "Vladmir()")
}

function appartment() {
	title.innerHTML = "Appartment";
	h1.innerHTML = "Appartment";
	img1.src = "images/appertment.jpg";
	optie1.innerHTML = "School";
	optie2.innerHTML = "Metro";
	optie3.innerHTML = "Look for items";
	optie1.setAttribute("onclick", "School()");
	optie2.setAttribute("onclick", "Metro()");
	optie3.setAttribute("onclick", "key2()");
	optie4.style.display = "none";
	optie1.style.display= "inline";
	optie2.style.display= "inline";
	optie3.style.display= "inline";
}

function Metro() {
	title.innerHTML = "Metro";
	h1.innerHTML = "Metro";
	img1.src = "images/Metro.jpg";
	optie1.innerHTML = "Go with Train";
	optie2.innerHTML = "appartment";
	optie3.innerHTML = "nuclear power plant";
	optie2.setAttribute("onclick", "appartment()");
	optie3.setAttribute("onclick", "Nuclear()");
	optie1.setAttribute("onclick", "theEnd()");
	optie1.style.display = "inline";
	img2.style.display = "none";
	optie2.style.display = "inline";
	optie3.style.display = "inline";
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
	optie1.setAttribute("onclick", "Arjom()")
	img2.style.display = "none";
}

function Shooting() {
	title.innerHTML = "Shooting Range";
	h1.innerHTML = "Shooting Range";
	img1.src = "images/Shooting.jpg";
	optie1.innerHTML = "Militarybase";
	optie2.innerHTML = "Look for Items";
	optie3.innerHTML = "nuclear power plant";
	optie1.setAttribute("onclick", "Military()");
	optie2.setAttribute("onclick", "key()");
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
	optie2.setAttribute("onclick", "yeezy()");
	optie3.setAttribute("onclick", "Metro()");
	img2.style.display = "none";
}

function Medkit() {
	img2.style.display = "block"
	img1.src = "images/Bunker.png";
	if (Pickup.length <= 1) {
		img2.style.display = "inline";
	} else {
		img2.style.display = "none";
		optie1.style.display= "none";
	}
	optie1.innerHTML = "Use a medkit";
	optie3.innerHTML = "Go back";
	optie1.setAttribute("onclick", "img2.style.display ='none'; Pickup.push('2'); medkitCheck();");
	optie3.setAttribute("onclick", "Bunker()");
	optie4.style.display = "none";
	img2.src = "images/Medkit.png"
	optie2.style.display = "none";
	
}
function howto() {
	title.innerHTML = "how to play"
	h1.innerHTML = "how to play ?"
	optie1.innerHTML = "Bunker"
	optie2.innerHTML = "go back"
	optie1.setAttribute("onclick","Bunker()");
	optie2.setAttribute("onclick", "start()");
	opties.style.top = "160px";
	h1.style.display = "block";
	h1.style.color = "red"; 
	p.innerHTML = "the goal is to get to the metro by any means necessary and is a point and click game";
	p.style.color = "red";
	p.style.display ="block";
}
function gamewon() {
	title.innerHTML = "Game won";
	document.body.style.backgroundImage = "url('images/gamewon.jpg')";
	optie1.innerHTML = "mainmenu"
	optie1.setAttribute("onclick", "start()");
	optie3.style.display ="none";
	optie2.style.display = "none";
	optie4.style.display = "none";
	img1.style.display = 'none';
	img2.style.display = 'none';
	h1.style.display = "inline";
	h1.innerHTML = "Game won"
	h1.style.color= "red";
}

function medkitCheck() {
	if(Pickup.length <=2){
		alert('you  now have 100hp');

	}else{
		alert ('you already used it');
	}
}

function beerup() {
	optie1.innerHTML = "Beach";
	optie2.innerHTML = "drink all the jack";
	optie3.innerHTML = "Hospital";
	optie1.setAttribute("onclick", "Beach()");
	optie2.setAttribute("onclick", "dead()",alert('picked up an ak-47') );
	optie3.setAttribute("onclick", "Hospital()");
	img2.style.display = "inline";
	img2.src = "images/beer.png";
	optie4.style.display = "none";
}
 	
function attack() {
		if (Enemy.length <= 1) {
		img2.style.display = "inline";
	} else {
		img2.style.display = "none";
		optie2.style.display= "none";
	}
	optie1.innerHTML = "Hospital";
	optie2.innerHTML = "Gun them down";
	optie3.innerHTML = "do nothing";
	optie4.innerHTML = "school";
	optie1.setAttribute("onclick", "Hospital()");
	optie3.setAttribute("onclick", "dead()",alert('enemy spotted') );
	optie2.setAttribute("onclick", "img2.style.display ='none', optie2.style.display = 'none', optie3.style.display = 'none';");
	img2.src = "images/enemy1.png";
	optie4.style.display = "none";
}
function usp() {
	optie1.innerHTML = "Forest";
	optie2.innerHTML = "Kill your self";
	optie3.innerHTML = "Military base";
	optie1.setAttribute("onclick", "Forest()");
	optie2.setAttribute("onclick", "dead()", alert('picked up usp-s'));
	optie3.setAttribute("onclick","Military()");
	img2.src = "images/usps.png"
	img2.style.display = "inline";
}

function  key() {
	optie1.innerHTML = "Shooting Range";
	optie2.innerHTML = "pick up metro pass";
	optie3.innerHTML = "Nuclear power plant";
	optie1.setAttribute("onclick", "Shooting()");
	optie3.setAttribute("onclick","Nuclear()");
	img2.src = "images/metropass.png";
	img2.style.display = "inline";
	if (End.length <= 1) {
		img2.style.display = "inline";
	} else {
		img2.style.display = "none";
		optie1.style.display= "none";
	}
	optie2.setAttribute("onclick", "img2.style.display ='none'; End.push('2'); metroCheck();");
}

function theEnd() {
	optie1.innerHTML = "Open the gate with metropass.";
	optie2.innerHTML = "metro";
	optie2.setAttribute('onclick', 'Metro();');
	if (End.length <= 1) {
		optie1.setAttribute("onclick", "alert('you dont have a metropass'); optie1.style.display = 'none'");
	} else {
		optie1.setAttribute("onclick", "gamewon()");}
		optie3.style.display = "none";
}
function yeezy() {
	optie1.innerHTML = "Shooting Range";
	optie2.innerHTML = "pick up yeezy";
	optie3.innerHTML = "metro";
	optie1.setAttribute("onclick", "Forest()");
	optie2.setAttribute("onclick", "dead()");
	optie3.setAttribute("onclick","Metro()");
	img2.src = "images/yeezy.png";
	img2.style.display = "inline";
}
function  key2() {
	optie1.innerHTML = "Metro";
	optie2.innerHTML = "pick up metro pass";
	optie3.innerHTML = "Appartment";
	optie1.setAttribute("onclick", "Metro()");
	optie3.setAttribute("onclick","appartment()");
	img2.src = "images/metropass.png";
	img2.style.display = "inline";
	if (End.length <= 1) {
		img2.style.display = "inline";
	} else {
		img2.style.display = "none";
		optie1.style.display= "none";
	}
	optie2.setAttribute("onclick", "img2.style.display ='none'; End.push('2'); metroCheck();");
	
}
function russian() {
	if (Math.random() <= 0.5) {
		dead();
	} else {
		alert('Artjom died and you picked up a Revolver');
		img2.style.display ='none';
	}
}
function Arjom() {
	optie1.innerHTML = 'Play russian roullete with Artjom';
	optie2.innerHTML = 'Shooting Range';
	optie3.innerHTML = 'Forest';
	optie1.setAttribute("onclick",'russian()');
	optie2.setAttribute("onclick",'Shooting()');
	optie3.setAttribute('onclick',"Forest()");
	img2.src = "images/artjom.png";
	img2.style.display = 'inline';
}
function Vladmir() {
	optie1.innerHTML = 'Shoot him';
	optie2.innerHTML = 'talk with him';
	optie3.innerHTML = 'Hospital';
	optie4.innerHTML = 'appartment';
	optie1.setAttribute('onclick', "kill()");
	optie2.setAttribute('onclick', "dead()");
	optie3.setAttribute('onclick', 'Hospital()');
	optie4.setAttribute('onclick', "appartment()");
	img2.src = 'images/vladmir.png'
	img2.style.display = "inline";
	optie4.style.display = "inline";
}


function kill() {
		alert('vladmir died');
		img2.style.display ='none';
		optie1.style.display = "none";
		optie2.style.display = "none";
}
function metroCheck() {
		alert('picked up the metropass');
		img2.style.display ='none';
		optie2.style.display = "none";
}
