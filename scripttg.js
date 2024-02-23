    const changingText = document.getElementById('changing-text');
    const changingText2 = document.getElementById('changing-text2');

    const originalText1 = changingText.textContent;
    const originalText2 = changingText2.textContent;

    let index1 = 0;
    let index2 = 0;

    let intervalId1;
    let intervalId2;

    function changeText() {
        clearInterval(intervalId1);

        changingText.textContent = ''; 
        index1 = 0; 

        intervalId1 = setInterval(() => {
            if (index1 < originalText1.length) {
                changingText.textContent += originalText1[index1];
                index1++;
            } else {
                clearInterval(intervalId1);
            }
        }, 10); 
    }

    function typeParagraph() {
        clearInterval(intervalId2);

        changingText2.style.display = 'block'; 
        changingText2.textContent = '';
        index2 = 0; 

        intervalId2 = setInterval(() => {
            if (index2 < originalText2.length) {
                changingText2.textContent += originalText2[index2];
                index2++;
            } else {
                clearInterval(intervalId2);
            }
        }, 5); 
    }


    changingText2.style.display = 'none';

    changeText();

    document.addEventListener('keypress', () => {
        typeParagraph();
    });
