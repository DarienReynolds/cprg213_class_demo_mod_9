
//brining the id's to js as constants
const buttonPlus = document.querySelector('#button_plus');
const buttonMinus = document.querySelector('#button_minus');
const numbDisplayed = document.querySelector('#number_displayed');
const background = document.querySelector('#everything');
const backtext = document.querySelector('#backtext');
//creating a number variable set to the default of 0
let numberdis = 0;
//using two different constants to increase the number variable by one
buttonPlus.onclick = () => {
    numberdis = numberdis + 1;
    numbDisplayed.textContent = `${numberdis}`;
    backtext.textContent = '';
}
//using two different constants to decrease the number variable by one
buttonMinus.onclick = () => {
    numberdis = numberdis - 1;
    numbDisplayed.textContent = `${numberdis}`;
    backtext.textContent = '';
}
//challenges were figuring out how to increase the number using the buttons, Instead of trying to use the numbDisplayed constant, I made a new variable to change.
//ps this activity took me 40 minutes on tuesday to fully complete



function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
let nums = 0
background.addEventListener('click', () => {
    if (numberdis === 2) {
        const rndCol = `rgb(255, 0, 0)`;
        document.body.style.backgroundColor = rndCol;
    } else if (numberdis === 3) {
        const rndCol = `rgb(0, 255, 0)`;
        document.body.style.backgroundColor = rndCol;
    } else if (numberdis === 4) {
        const rndCol = `rgb(0, 0, 255)`;
        document.body.style.backgroundColor = rndCol;
    } else if (numberdis === 5) {
        const rndCol = `rgb(255, 255, 0)`;
        document.body.style.backgroundColor = rndCol;
    } else if (numberdis === 6) {
        const rndCol = `rgb(0, 255, 255)`;
        document.body.style.backgroundColor = rndCol;
    } else if (numberdis === 7) {
        const rndCol = `rgb(255, 0, 255)`;
        document.body.style.backgroundColor = rndCol;
    } else if (numberdis === 8) {
        const rndCol = `rgb(255, 255, 255)`;
        document.body.style.backgroundColor = rndCol;
    } else if (numberdis === 9) {
        const rndCol = `rgb(0, 0, 0)`;
        document.body.style.backgroundColor = rndCol;
    } else if (numberdis % 5 === 0) {
        numberdis = 0;
        backtext.textContent = 'Resetting';
        numbDisplayed.textContent = `${numberdis}`;
    } else if (numberdis === 66) {
        swapStyleSheet("styles/starwarsstyle.css");
    } else {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    }
});


function swapStyleSheet(sheet) {
    document.getElementById("stylesheets").setAttribute("href", sheet);
}

//swapStyleSheet("starwarsstyle.css");

//reset menu code ---------------------------------------------------

function resetMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// reset menu code for what each choice does

const backReset = document.querySelector('#backreset');
const themeReset = document.querySelector('#themeReset');
const numberReset = document.querySelector('#numberReset');

backReset.onclick = () => {
    const rndCol = `rgb(255, 255, 255)`;
    document.body.style.backgroundColor = rndCol;
}
themeReset.onclick = () => {
    swapStyleSheet("styles/styles.css");
}
numberReset.onclick = () => {
    numberdis = 0;
    numbDisplayed.textContent = `${numberdis}`;
}

//Set number code

const custom = document.querySelector('#custom_num');

custom.onclick = () => {
    var customnum = prompt('What is your name?');
    numberdis = parseInt(customnum, 10);
    numbDisplayed.textContent = `${numberdis}`;
}