const changingText = document.getElementById('changing-text');
const replacementText = "In the following centuries, men have been scouring the hexagons .... There are official searchers, the 'inquisitors.' I have seen them about their tasks: they arrive exhausted at some hexagon, they talk about a staircase that nearly killed them-rungs were missing-they speak with the librarian about galleries and staircases, and, once in a while, they take up the nearest book and leaf through it, searching for disgraceful or dishonorable words. Clearly, no one expects to discover anything.";

let index = 0;
let intervalId;


function changeText() {
    clearInterval(intervalId);


    changingText.textContent = '';


    intervalId = setInterval(() => {
        if (index < replacementText.length) {
            changingText.textContent += replacementText[index];
            index++;
        } else {

            clearInterval(intervalId);
        }
    }, 50); 
}


changeText();


changingText.addEventListener('transitionend', changeText);

