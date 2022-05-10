const images = ["src/imageJS1.jpg", "src/imageJS2.jpg", "src/imageJS3.jpg", "src/imageJS4.jpg"];
const  date = ["5 may 2022", "6 may 2022", "7 may 2022", "8 may 2022"];
const text = ["Lorem Ipsum Dolor Sit Amet", "Lorem Ipsum", "Lorem Ipsum Dolor", "Sit Amet"];
var x = 0;
var y = 1;

document.getElementById('firstNewsImage').src=images[x];
document.getElementById('secondNewsImage').src=images[y];
document.getElementById('firstDate').textContent=date[x];
document.getElementById('secondDate').textContent=date[y];
document.getElementById('firstNewsText').textContent=text[x];
document.getElementById('secondNewsText').textContent=text[y];

const carouselButtonBack = document.getElementById('carouselButtonBack');
const carouselButtonNext = document.getElementById('carouselButtonNext');
const firstDate = document.getElementById('firstDate');
const secondDate = document.getElementById('secondDate');
const firstNewsText = document.getElementById('firstNewsText');
const secondNewsText = document.getElementById('secondNewsText');

function goNext() {
    ++x;
    ++y;
    if (x == images.length) {
        x = 0;
    }
    if (y == images.length) {
        y = 0;
    }
    document.getElementById('firstNewsImage').src=images[x];
    document.getElementById('secondNewsImage').src=images[y];

    firstDate.innerHTML = date[x];
    secondDate.innerHTML = date[y];

    firstNewsText.innerHTML = text[x];
    secondNewsText.innerHTML = text[y];
}
function goBack() {
    --x;
    --y;
    if (x == -1) {
        x = images.length - 1;
    }
    if (y == -1) {
        y = images.length - 1;
    }
    document.getElementById('firstNewsImage').src=images[x];
    document.getElementById('secondNewsImage').src=images[y];

    firstDate.innerHTML = date[x];
    secondDate.innerHTML = date[y];

    firstNewsText.innerHTML = text[x];
    secondNewsText.innerHTML = text[y];
}

setInterval(goNext, 10000);

carouselButtonBack.addEventListener("click", goBack);
carouselButtonNext.addEventListener("click", goNext);








var on_off_nav = 0;

const closeBtn = document.getElementsByClassName('close')[0];
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
function closeNav() {
    on_off_nav = 0;
    document.getElementsByClassName('sidenav')[0].style= "display: none";
}

closeBtn.addEventListener("click", closeNav);
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