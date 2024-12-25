

const section= document.querySelector("section");

for (let i=0 ; i< animals.length; i++) {
    const animal= animals[i];
    const divvy= document.createElement('div'); // we created a div 
    divvy.className= 'divvy'; // we gave it a class by going to the css and finding the class name of the div , this class name give us the name of each animals in the row 
    
    const english= document.createElement("span"); // we created a span for the english name at the top of the animal char the display is none so far so we cant see it on the page yet
    english.className= 'english'; // we gave it a class so we can style it when we show it since the display on the css is none 
    english.textContent= animal.eng; // we got it in english so we can display it on the page when the correct answer is in english 
    english.id= 'eng' + i; // it means 'eng0' or 'eng1' or 'eng2' and so on
    divvy.appendChild(english); // we appended the span to the div so we can see it on the page , only developer can see it on the console 

    const pinyin = document.createElement("span");
    pinyin.innerHTML= animal.pin + '<br>' + animal.tone;
    pinyin.className= 'pinyin';
    pinyin.id= 'pin' + i;
    pinyin.pin= animal.pin;
    divvy.appendChild(pinyin);

    //divvy.textContent= animals[i].eng; // we took it from the chinese zodiac data.
    // divvy.textContent= "";                                  // we took it from the animals array from the chinese zodiac data
                                     // the [i] represent the index of the animals array
                                    // the .eng is the property of the chinese zodiac data
    section.appendChild(divvy);    // we appended the div to the section , it is the child of the div section now  
    
    const picture= new Image (); // we created an image
    picture.src=`images/animals/${animal.eng}.jpg`; // we gave it a source from the css and the image folder
    picture.className= 'animal-pic'; // we gave it a class . it is also from the css chinese zodiac animals
    divvy.appendChild(picture); // we appended the image to the div , it is the child of the created div which is an image 


    const inputBox= document.createElement("input");
    inputBox.type= "search";
    inputBox.placeholder= "name";
    inputBox.eng= animal.eng;
    inputBox.chi= animal.chi;
    inputBox.aka= animal.aka;
    inputBox.i= i; // this will be used in the checkSpelling function and give us the option to check which animal is correct , if its 0 then it will be the first animal in the array
    

    inputBox.addEventListener('change', checkSpelling);
    inputBox.addEventListener('blur', checkSpelling);
    divvy.appendChild(inputBox);

    const soundIcon= new Image(); // or const soundIcon = document.createElement("img");
    soundIcon.src= 'images/soud-icon.png';
    soundIcon.className= 'sound-icon';
    soundIcon.eng= animal.eng ;
    divvy.appendChild(soundIcon);
    soundIcon.addEventListener('click', playSound);

    const ChineseChar= new Image ();
    ChineseChar.src=`images/chars/char-${animal.chi}.jpg`;
    ChineseChar.className= 'chinese-char';
    divvy.appendChild(ChineseChar);


    const ChineseYear= document.createElement("p");
    ChineseYear.className= 'zodiac-year';
    divvy.appendChild(ChineseYear);

    const StartYear= animal.year-156;
    let yearStr= "";
    for (let y= StartYear; y <= animal.year+12; y+=12) {
        yearStr= yearStr + `${y} `;
    }

    ChineseYear.textContent= yearStr;
}


const sound= new Audio ();

function playSound () {

    sound.pause();
    sound.src = `audio/${this.eng}.mp3`;
    sound.play();
}


function checkSpelling() {
    
    const inputText= this.value;
    
    if (inputText=== this.eng || inputText=== this.chi || this.aka.includes(inputText)) {
        this.style.backgroundColor= "green";
        const pinId= 'pin' + this.i;
        const pinSpan= document.getElementById(pinId);
        pinSpan.style.display= "inline";
        const engId= 'eng' + this.i;
        const engSpan= document.getElementById(engId);
        engSpan.style.display= "inline";
    } else {
        this.style.backgroundColor= "red";

    }

    this.style.color= "white";
}


