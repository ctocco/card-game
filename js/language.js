let language;
let page;

//Storing Language to LS
function saveLanguage(){
    localStorage.setItem("Language", language);
    switchLanguage();
}

//Switching Language
function switchLanguage(){

    language = localStorage.getItem("Language"); //Getting Language from LS

        if (page='index'){
            //Get Elements
            let lHome = document.getElementById("lHome");
            let lHelp = document.getElementById("lHelp");
            let lAbout = document.getElementById("lAbout");
            let lTitle1 = document.getElementById("lTitle1");
            let lTitle2 = document.getElementById("lTitle2");
            let lTitle3 = document.getElementById("lTitle3");
            let lContent1 = document.getElementById("lContent1");
            let lContent2 = document.getElementById("lContent2");
            let lContent3 = document.getElementById("lContent3");
            let lLearnMore = document.getElementById("lLearnMore");
            let lStart = document.getElementById("start");
            let lModalContent = document.getElementById("exampleModalLabel");
            let lSave = document.getElementById("lSave");
            let lClose = document.getElementById("lClose");
            switch (language) {
            case "EN":
                //change Content
                lTitle1.innerText = 'The Game Center';
                lTitle2.innerText = 'The Game Center';
                lTitle3.innerText = 'THE GAME CENTER';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lContent1.innerText = 'Welcome to a collection of wonderful card games for you to enjoy at home';
                lContent2.innerText = 'If you want to learn more about the history and the rules of the games just click below';
                lContent3.innerText = 'Dare to win?';
                lLearnMore.innerTextL = 'Learn more';
                lStart.innerText = 'Enter Game';
                lModalContent.innerText = 'Please enter the name of each player';
                lClose.innerText = 'Close';
                lSave.innerText = 'Save changes';
                break;
            case "DE":
                //change Content
                lTitle1.innerText = 'Das Spiel Center';
                lTitle2.innerText = 'Das Spiel Center';
                lTitle3.innerText = 'DAS SPIEL CENTER';
                lHome.innerText = 'Start';
                lHelp.innerText = 'Hilfe';
                lAbout.innerText = 'Über Uns';
                lContent1.innerText = 'Willkommen zu unserer kleinen Kollektion von wundervollen Kartenspielen. Ein Spaß für die ganze Familie';
                lContent2.innerText = 'Wenn ihr mehr über die Historie der Spiele erfahren wollt klickt hier:';
                lContent3.innerText = 'Einen Versuch starten?';
                lLearnMore.innerText = 'Mehr';
                lStart.innerText = 'Spiel Starten';
                lModalContent.innerText = 'Bitte Namen eingeben:';
                lClose.innerText = 'Schliessen';
                lSave.innerText = 'Speichern';
                break;
            default:
                //change Content
                lTitle1.innerText = 'The Game Center';
                lTitle2.innerText = 'The Game Center';
                lTitle3.innerText = 'THE GAME CENTER';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lContent1.innerText = 'Welcome to a collection of wonderful card games for you to enjoy at home';
                lContent2.innerText = 'If you want to learn more about the history and the rules of the games just click below';
                lContent3.innerText = 'Dare to win?';
                lLearnMore.innerText = 'Learn more';
                lStart.innerText = 'Enter Game';
                lModalContent.innerText = 'Please enter the name of each player';
                lClose.innerText = 'Close';
                lSave.innerText = 'Save changes';
                break;}

        };
}