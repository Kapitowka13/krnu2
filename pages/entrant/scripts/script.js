window.onload = function () {
    setTimeout(function () {
        document.getElementById("preloader_malc").style.display = "none";
    }, 0);
};

var darkColor = "#1C0D02";
var gray = "#CFCFCF"
var defaultColor = "#E49C4E";
var bcTitle = "#eae8dc";
var white = "#fff";
var black = "#000";
var blackBrown = "#251b0f";
var darkBlue = "#040C1E";

var newBlue = "#7C9BEF";
var newDarkBlue = "#6D88D2";

var on_off_nav = 0;

var onBlack;
var onBrown;

const logoImage = document.getElementById('logo');
const colorToBlack = document.getElementById('colorToBlack');
const colorToBrown = document.getElementById('colorToBrown');
document.getElementsByClassName('colorChange')[1].style= "display: none";


function goBlack() {
    document.body.style.background = white;
    document.getElementById('navbar').style.background = newDarkBlue;
    document.getElementById('navbar').style.color = white;
    document.getElementById('navbar').style.color = white;
    document.getElementById('footer').style.background = newDarkBlue;
    document.getElementById('headerTitle').style.color = white;
    document.getElementById('title').style.background = newBlue;
    document.getElementById('logo').src="src/logo_darkblue.png"
    document.getElementsByClassName('colorChange')[0].style= "display: none";
    document.getElementsByClassName('colorChange')[1].style= "display: table";

    onBlack = 1;
    onBrown = 0;
}

function goBrown() {
    document.body.style.background = bcTitle;
    document.getElementById('secondBlock').style.background = bcTitle;
    document.getElementById('navbar').style.background = defaultColor;
    document.getElementById('navbar').style.color = gray;
    document.getElementById('footer').style.background = defaultColor;
    document.getElementById('headerTitle').style.color = defaultColor;
    document.getElementById('title').style.background = bcTitle;
    document.getElementById('logo').src="src/logo_brown.png"
    document.getElementsByClassName('colorChange')[1].style= "display: none";
    document.getElementsByClassName('colorChange')[0].style= "display: table";

    document.getElementById('newsBlock_title').style.color = black;
    document.getElementById('newsBlock_text').style.color = black;

    onBlack = 0;
    onBrown = 1;
}
function goCloseTitle() {
    document.getElementById('title').style= "display: none";
    document.getElementsByClassName('firstBlock')[0].style= "margin-top: 52px";
}

colorToBlack.addEventListener("click", goBlack);
colorToBrown.addEventListener("click", goBrown);


//-------------------------------------------------------------------------SIDE NAV---------------------------
const sideButton = document.getElementById('sideButton');

function openNav() {
    if (on_off_nav == 0) {
        on_off_nav = 1;
        document.getElementsByClassName('sidenav')[0].style= "display: table";
    } else {
        on_off_nav = 0;
        document.getElementsByClassName('sidenav')[0].style= "display: none";
    }
}

sideButton.addEventListener("click", openNav);

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
var next;
for (i = 0; i < dropdown .length; i++) {
    dropdown [i].onclick = function() {
        if(next){
            next.classList.toggle("active",false);
            next.nextElementSibling.style.display = "none";
        }
        this.classList.toggle("active");
        this.nextElementSibling.style.display = "block";
        next=this;
    }
}
