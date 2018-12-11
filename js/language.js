let language; //gets set onclick of the lng buttons
let page; //gets set onload in html

//For info i use the l prefix for variables and id's in most cases just for quick indication i know its tedious

//Storing Language to LS
function saveLanguage(){
    localStorage.setItem("Language", language);
    switchLanguage();
}

//Switching Language
function switchLanguage(){

    language = localStorage.getItem("Language"); //Getting Language from LS

        if (page=='index'){
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

        }
        else if (page=='help'){
            //Get Elements
            let lTitle1 = document.getElementById("lTitle1");
            let lHome = document.getElementById("lHome");
            let lHelp = document.getElementById("lHelp");
            let lAbout = document.getElementById("lAbout");
            let lAboutContent = document.getElementById("lAboutContent");
            let lHeader = document.getElementById("lHeader");
            let lDifficulties1 = document.getElementById("lDifficulties1");
            let lDifficulties2 = document.getElementById("lDifficulties2");
            let lContact = document.getElementById("lContact");

            switch (language) {
            case "EN":
                //change Content
                lTitle1.innerText = 'The Game Center';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                /*lAboutContent.innerHTML = '<h2>The basic rules of Mau Mau</h2><br><p>The game is played with a regular deck of playing cards. The players are dealt each a hand of cards (usually 5). The rest are placed face down as the drawing stack. At the beginning of the game the topmost card is revealed, then the players each get a turn to play cards.</p><p>One can play a card if it corresponds to the suit or value of the open card. E.g. on a 10 ofv spades, only other spades can be played or other 10s. If a player is not able to, they draw one card from the stack. If he can play this card, he may do so, otherwise he keeps the drawn card and passes his turn. If the drawing stack is empty, the playing stack (except for the topmostcard) is shuffled and turned over to serve as new drawing stack.</p><p>If a player only has 1 card left he has to say mau, if he does not he has to draw 2 cards next turn.</p><h6>– Wikipedia - Mau Mau (modified)</h6><br><h3>Special rules</h3><br><p>We add the three most common additional rules:</p><p>If an eight is played the next player is skipped if a seven is played, the next player has to draw two cards. The next player can put another seven down and instead the following player will have to draw four cards (and so on). A Jack can can be put on anything and the player who played it can ask for a different suite to be played</p><br><h1>Mau Mau: A Short History</h1>';*/
                lHeader.innerText = 'Mau Mau: Rules'; 
                lDifficulties1.innerText = 'Encountering difficulties?';
                lDifficulties2.innerText = 'Feel free to drop us a message!';
                lContact.innerText = 'Contact Us';
                break;
            case "DE":
                //change Content
                lTitle1.innerText = 'Das Spiel Center';
                lHome.innerText = 'Start';
                lHelp.innerText = 'Hilfe';
                lAbout.innerText = 'Über Uns';
                /*lAboutContent.innerHTML = '<h2>Basis Regeln für Mau Mau</h2><br><p>Das Spiel wird mit einem regülarem Kartendeck gespielt. Jeder Spieler zieht 5 Karten. Der Rest wird verdeckt auf in die Mitte gelegt als Ziehstapel. Am Anfang wird die oberste Karte offen in die Mitte gelegt als Start-Karte, danach dürfen die Spieler ihre Karten spielen.</p><p>Man kann nur Karten spielen die entweder die selbe Augenzahl wie die aufgedeckte Karte aufweisen oder demselben Set(Herz,Karo,Pik und Kreuz) angehören. Wenn kein Spielzug möglich ist muss eine Karte gezogen werden. Wenn der Spieler die gezogene Karte spielen kann darf er sie sofort ausspielen, wenn nicht muss der Spieler seinen Zug beenden. Wenn der Ziehstapel leer ist werden alle gespielten Karten bis auf die letzte neu gemischt und als neuer Stapel platziert</p><p>Wenn ein Spieler nurnoch eine Karte auf der Hand hat muss er Mau sagen, wenn er das nicht tut muss er nächste Runde 2 Karten ziehen.</p><br><h3>Spezial Regeln</h3><br><p>Wir haben diese 3 benutzerdefinierten Regeln hinzugefügt:</p><p>Wenn eine 8 gespielt wird muss der nächste Spieler aussetzen, bei einer 7 muss der nächste Spieler 2 Karten ziehen. Dieser Effekt ist stapelbar d.H. wenn der nächste Spieler eine 7 spielt muss dieser keine Karten ziehen sondern der nächste muss 4 ziehen (danach 6,8 usw.). Wenn ein Bube gespielt wird darf man sich ein Set wünschen (z.B. Ich möchte Karo), der nächste Spieler muss eine Karte dieses Sets spielen.</p><br><h1>Mau Mau: Ein wenig Geschichte</h1>';*/
                lHeader.innerText = 'Mau Mau: Regeln'; 
                lDifficulties1.innerText = 'Schwierigkeiten?';
                lDifficulties2.innerText = 'Schreibe Uns!';
                lContact.innerText = 'Kontaktieren Sie uns!';
                break;
            default:
                //change Content
                lTitle1.innerText = 'The Game Center';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                /*lAboutContent.innerHTML = '<h2>The basic rules of Mau Mau</h2><br><p>The game is played with a regular deck of playing cards. The players are dealt each a hand of cards (usually 5). The rest are placed face down as the drawing stack. At the beginning of the game the topmost card is revealed, then the players each get a turn to play cards.</p><p>One can play a card if it corresponds to the suit or value of the open card. E.g. on a 10 ofv spades, only other spades can be played or other 10s. If a player is not able to, they draw one card from the stack. If he can play this card, he may do so, otherwise he keeps the drawn card and passes his turn. If the drawing stack is empty, the playing stack (except for the topmostcard) is shuffled and turned over to serve as new drawing stack.</p><h6>– Wikipedia - Mau Mau</h6><br><h3>Special rules</h3><br><p>We add the three most common additional rules:</p><p>If an eight is played the next player is skipped if a seven is played, the next player has to draw two cards. The next player can put another seven down and instead the following player will have to draw four cards (and so on). A Jack can can be put on anything and the player who played it can ask for a different suite to be played</p><br><h1>Mau Mau: A Short History</h1>';*/
                lHeader.innerText = 'Mau Mau: Rules'; 
                lDifficulties1.innerText = 'Encountering difficulties?';
                lDifficulties2.innerText = 'Feel free to drop us a message!';
                lContact.innerText = 'Contact Us';
                break;}

        }
        else if (page=='about'){
            //Get Elements
            let lTitle1 = document.getElementById("lTitle1");
            let lHome = document.getElementById("lHome");
            let lHelp = document.getElementById("lHelp");
            let lAbout = document.getElementById("lAbout");
            let lContent1 = document.getElementById("lContent1");
            let lContent2 = document.getElementById("lContent2");
            let lText1 = document.getElementById("lText1");
            let lText2 = document.getElementById("lText2");
            let lText3 = document.getElementById("lText3");
            let lText4 = document.getElementById("lText4");
            let lText5 = document.getElementById("lText5");
            let lLocation = document.getElementById("lLocation");
            let lTalent1 = document.getElementById("lTalent1");
            let lTalent2 = document.getElementById("lTalent2");

            //below are lorems for filling it now remove later pls
            let lorem1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque quo facere excepturi vitae animi at aut debitis, cum sunt quasi commodi praesentium vel minima quaerat ratione modi earum. Molestiae, nobis. Quae eveniet magni nulla cupiditate doloremque provident rem illo earum numquam. Non aperiam quos dolores nesciunt natus, odit cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque quo facere excepturi vitae animi at aut debitis, cum sunt quasi commodi praesentium vel minima quaerat ratione modi earum. Molestiae, nobis. Quae eveniet magni nulla cupiditate doloremque provident rem illo earum numquam. Non aperiam quos dolores nesciunt natus, odit cumque.'
            let lorem2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque quo facere excepturi vitae animi at aut debitis, cum sunt quasi commodi praesentium vel minima quaerat ratione modi earum. Molestiae, nobis. Quae eveniet magni nulla cupiditate doloremque provident rem illo earum numquam. Non aperiam quos dolores nesciunt natus, odit cumque.'

            switch (language) {
            case "EN":
                //change Content
                lTitle1.innerText = 'The Game Center';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lContent1.innerText = '- OUR MISSION -';
                lContent2.innerText = 'Fun and Functionality';
                lTalent1.innerText = 'The Talent';
                lTalent2.innerText = 'Fun and Funtionality';
                lLocation.innerText = 'Location';
                lText1.innerText = lorem1;
                lText2.innerText = lorem2;
                lText3.innerText = lorem2;
                lText4.innerText = lorem2;
                lText5.innerText = lorem2;
                break;
            case "DE":
                //change Content
                lTitle1.innerText = 'Das Spiel Center';
                lHome.innerText = 'Start';
                lHelp.innerText = 'Hilfe';
                lAbout.innerText = 'Über Uns';
                lContent1.innerText = '- UNSERE MISSION -';
                lContent2.innerText = 'Spaß und Funktionalität';
                lTalent1.innerText = 'Die Magier';
                lTalent2.innerText = 'Spaß und Funktionalität';
                lLocation.innerText = 'Ort';
                lText1.innerText = lorem1;
                lText2.innerText = lorem2;
                lText3.innerText = lorem2;
                lText4.innerText = lorem2;
                lText5.innerText = lorem2;
                break;
            default:
                //change Content
                lTitle1.innerText = 'The Game Center';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lContent1.innerText = '- OUR MISSION -';
                lContent2.innerText = 'Fun and Functionality';
                lTalent1.innerText = 'The Talent';
                lTalent2.innerText = 'Fun and Funtionality';
                lLocation.innerText = 'Location';
                lText1.innerText = lorem1;
                lText2.innerText = lorem2;
                lText3.innerText = lorem2;
                lText4.innerText = lorem2;
                lText5.innerText = lorem2;
                break;}

        };
}
