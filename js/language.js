let language; //gets set onclick of the lng buttons
let page; //gets set onload in html

//For info i use the l prefix for variables and id's in most cases just for quick indication i know its tedious

//Storing Language to LS

function saveLanguage() {
    localStorage.setItem("Language", language);
    switchLanguage();
}



//Switching Language
function switchLanguage() {

    language = localStorage.getItem("Language"); //Getting Language from LS
    if (page == 'index') {
        //Get Elements
        let lHome = document.getElementById("lHome");
        let lHelp = document.getElementById("lHelp");
        let lAbout = document.getElementById("lAbout");
        let lImpressum = document.getElementById("lImpressum");
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
                lImpressum.innerText = 'Imprint';
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
                break;
            case "DE":
                //change Content
                lTitle1.innerText = 'Das Spiel Center';
                lTitle2.innerText = 'Das Spiel Center';
                lTitle3.innerText = 'DAS SPIEL CENTER';
                lHome.innerText = 'Start';
                lImpressum.innerText = 'Impressum';
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
                lImpressum.innerText = 'Imprint';
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
                break;
        }

    } else if (page == 'help') {
        //Get Elements
        let lTitle1 = document.getElementById("lTitle1");
        let lHome = document.getElementById("lHome");
        let lHelp = document.getElementById("lHelp");
        let lAbout = document.getElementById("lAbout");
        let lImpressum = document.getElementById("lImpressum");
        let lRules = document.getElementById("lRules");
        let lRules1 = document.getElementById("lRules1");
        let lRules2 = document.getElementById("lRules2");
        let lRules3 = document.getElementById("lRules3");
        let lSpecial = document.getElementById("lSpecial");
        let lSpecial1 = document.getElementById("lSpecial1");
        let lSpecial2 = document.getElementById("lSpecial2");
        let lHistory = document.getElementById("lHistory");
        let lHistory1 = document.getElementById("lHistory1");
        let lHeader = document.getElementById("lHeader");
        let lDifficulties1 = document.getElementById("lDifficulties1");
        let lDifficulties2 = document.getElementById("lDifficulties2");
        let lContact = document.getElementById("lContact");

        switch (language) {
            case "EN":
                //change Content
                lTitle1.innerText = 'The Game Center';
                lImpressum.innerText = 'Imprint';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lRules.innerText = 'The basic rules of Mau Mau';
                lRules1.innerText = `The game is played with a regular deck of playing cards. The players are dealt each a hand of cards (usually 5). The rest are placed face down as the drawing stack. At the beginning of the game the topmost card is revealed, then the players each get a turn to play cards.`;
                lRules2.innerText = `One can play a card if it corresponds to the suit or value of the open card. E.g. on a 10 of spades, only other spades can be played or other 10s. If a player is not able to, they draw one card from the stack. If he can play this card, he may do so, otherwise he keeps the drawn card and passes his turn. If the drawing stack is empty, the playing stack (except for the topmost card) is shuffled and turned over to serve as new drawing stack.`;
                lRules3.innerText = `One can play a card if it corresponds to the suit or value of the open card. E.g. on a 10 of spades, only other spades can be played or other 10s. If a player is not able to, they draw one card from the stack. If he can play this card, he may do so, otherwise he keeps the drawn card and passes his turn. If the drawing stack is empty, the playing stack (except for the topmost card) is shuffled and turned over to serve as new drawing stack.`;
                lSpecial.innerText = `Special rules`;
                lSpecial1.innerText = `We've added the three most common additional rules:`;
                lSpecial2.innerText = `If an eight is played the next player is skipped if a seven is played, the next player has to draw two cards. The next player can put another seven down and instead the following player will have to draw four cards (and so on). A Jack can can be put on anything and the player who played it can ask for a different suite to be played`;
                lHistory.innerText = `Mau Mau: A Short History`;
                lHistory1.innerText = `Originating in Germany, the rules of Mau Mau have existed since at least the 1930's. Known as "Neuner" or "Neunerl" in Austria and Bavaria, the game's popularity throughout the years has lead to numerous regional and national variants, including "Prší" in the Czech Republic and "Pesten" in the Netherlands.
                Other related card games include "Switch" and "Crazy Eights", which are popular in both the United Kingdom and the US, respectively.`;
                lHeader.innerText = 'Mau Mau: Rules';
                lDifficulties1.innerText = 'Encountering difficulties?';
                lDifficulties2.innerText = 'Feel free to drop us a message!';
                lContact.innerText = 'Contact Us';
                break;
            case "DE":
                //change Content
                lTitle1.innerText = 'Das Spiel Center';
                lHome.innerText = 'Start';
                lImpressum.innerText = 'Impressum';
                lHelp.innerText = 'Hilfe';
                lAbout.innerText = 'Über Uns';
                lRules.innerText = 'Basis Regeln für Mau Mau';
                lRules1.innerText = `Das Spiel wird mit einem regülarem Kartendeck gespielt. Jeder Spieler zieht 5 Karten. Der Rest wird verdeckt auf in die Mitte gelegt als Ziehstapel. Am Anfang wird die oberste Karte offen in die Mitte gelegt als Start-Karte, danach dürfen die Spieler ihre Karten spielen.`;
                lRules2.innerText = `Man kann nur Karten spielen die entweder die selbe Augenzahl wie die aufgedeckte Karte aufweisen oder demselben Set(Herz,Karo,Pik und Kreuz) angehören. Wenn kein Spielzug möglich ist muss eine Karte gezogen werden. Wenn der Spieler die gezogene Karte spielen kann darf er sie sofort ausspielen, wenn nicht muss der Spieler seinen Zug beenden. Wenn der Ziehstapel leer ist werden alle gespielten Karten bis auf die letzte neu gemischt und als neuer Stapel platziert`;
                lRules3.innerText = `Wenn ein Spieler nurnoch eine Karte auf der Hand hat muss er Mau sagen, wenn er das nicht tut muss er nächste Runde 2 Karten ziehen.`;
                lSpecial.innerText = `Spezial Regeln`;
                lSpecial1.innerText = `Wir haben diese 3 benutzerdefinierten Regeln hinzugefügt:`;
                lSpecial2.innerText = `Wenn eine 8 gespielt wird muss der nächste Spieler aussetzen, bei einer 7 muss der nächste Spieler 2 Karten ziehen. Dieser Effekt ist stapelbar d.H. wenn der nächste Spieler eine 7 spielt muss dieser keine Karten ziehen sondern der nächste muss 4 ziehen (danach 6,8 usw.). Wenn ein Bube gespielt wird darf man sich ein Set wünschen (z.B. Ich möchte Karo), der nächste Spieler muss eine Karte dieses Sets spielen.`;
                lHistory.innerText = `Mau Mau: Ein wenig Geschichte`;
                lHistory1.innerText = `Mau Mau hat seinen Ursprung in Deutschland und die Regeln des Spiels existieren in ihrer heutigen Form mindestens seit den 30er Jahren. In Österreich und Bayern ist das Spiel als "Neuner" oder "Neunerl" bekannt. Es enstanden auch lokale Versionen des Spiels im Zuge seiner Popularität. Zum Beispiel: "Prší" in der Tschechischen Republik und "Pesten" in der Niederlande. Ähnliche Kartenspiele wie "Switch" und "Crazy Eights" feiern größere Popularität im Vereinigten Königreich und der USA.`;
                lAbout.innerText = 'Über Uns';
                lHeader.innerText = 'Mau Mau: Regeln';
                lDifficulties1.innerText = 'Schwierigkeiten?';
                lDifficulties2.innerText = 'Schreibe Uns!';
                lContact.innerText = 'Kontaktieren Sie uns!';
                break;
            default:
                //change Content
                lTitle1.innerText = 'The Game Center';
                lImpressum.innerText = 'Imprint';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lRules.innerText = 'The basic rules of Mau Mau';
                lRules1.innerText = `The game is played with a regular deck of playing cards. The players are dealt each a hand of cards (usually 5). The rest are placed face down as the drawing stack. At the beginning of the game the topmost card is revealed, then the players each get a turn to play cards.`;
                lRules2.innerText = `One can play a card if it corresponds to the suit or value of the open card. E.g. on a 10 of spades, only other spades can be played or other 10s. If a player is not able to, they draw one card from the stack. If he can play this card, he may do so, otherwise he keeps the drawn card and passes his turn. If the drawing stack is empty, the playing stack (except for the topmost card) is shuffled and turned over to serve as new drawing stack.`;
                lRules3.innerText = `One can play a card if it corresponds to the suit or value of the open card. E.g. on a 10 of spades, only other spades can be played or other 10s. If a player is not able to, they draw one card from the stack. If he can play this card, he may do so, otherwise he keeps the drawn card and passes his turn. If the drawing stack is empty, the playing stack (except for the topmost card) is shuffled and turned over to serve as new drawing stack.`;
                lSpecial.innerText = `Special rules`;
                lSpecial1.innerText = `We've added the three most common additional rules:`;
                lSpecial2.innerText = `If an eight is played the next player is skipped if a seven is played, the next player has to draw two cards. The next player can put another seven down and instead the following player will have to draw four cards (and so on). A Jack can can be put on anything and the player who played it can ask for a different suite to be played`;
                lHistory.innerText = `Mau Mau: A Short History`;
                lHistory1.innerText = `Originating in Germany, the rules of Mau Mau have existed since at least the 1930's. Known as "Neuner" or "Neunerl" in Austria and Bavaria, the game's popularity throughout the years has lead to numerous regional and national variants, including "Prší" in the Czech Republic and "Pesten" in the Netherlands.
                Other related card games include "Switch" and "Crazy Eights", which are popular in both the United Kingdom and the US, respectively.`;
                lHeader.innerText = 'Mau Mau: Rules';
                lDifficulties1.innerText = 'Encountering difficulties?';
                lDifficulties2.innerText = 'Feel free to drop us a message!';
                lContact.innerText = 'Contact Us';
                break;
        }

    } else if (page == 'about') {
        //Get Elements
        let lTitle1 = document.getElementById("lTitle1");
        let lHome = document.getElementById("lHome");
        let lHelp = document.getElementById("lHelp");
        let lAbout = document.getElementById("lAbout");
        let lImpressum = document.getElementById("lImpressum");
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

        let lorem2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque quo facere excepturi vitae animi at aut debitis, cum sunt quasi commodi praesentium vel minima quaerat ratione modi earum. Molestiae, nobis. Quae eveniet magni nulla cupiditate doloremque provident rem illo earum numquam. Non aperiam quos dolores nesciunt natus, odit cumque.'

        switch (language) {
            case "EN":
                //change Content
                lTitle1.innerText = 'The Game Center';
                lImpressum.innerText = 'Imprint';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lContent1.innerText = '- OUR MISSION -';
                lContent2.innerText = 'Fun and Functionality';
                lTalent1.innerText = 'The Talent';
                lTalent2.innerText = 'Fun and Funtionality';
                lLocation.innerText = 'Location';
                lText1.innerText = `Based in Berlin, our team currently consists of four members and is comprised of both front-end and back-end developers. Working together since 2018, we're dedicated to bringing fun and functionality throughout each of our projects and creations. We enjoy the challenge of finding solutions to problems and will be there to timely address your requests, delivering quality products so that you can focus on what you do best.
                Please contact if you have any questions and we’ll be happy to help!`;
                lText2.innerText = lorem2;
                lText3.innerText = "Hello, my name is Claudio and I’m a Front-end developer with a specialisation in Javascript. I have a background in Business (Marketing). As part of my degree I developed an appreciation for design while I did a student exchange at the Politecnico di Milano in Communication Design. I’m also a keen musician and in the future I would like to merge my interest in music with programming.";
                lText4.innerText = `Hey my name is Marcel, before coding in js i gathered some experience in other languages for example Python. On this project i mainly worked on getting multiple languages to work but i also did some images, styling and worked on the game mechanics. In my freetime i like playing computer games and code stupid stuff.`;
                lText5.innerText = `Hi, i'm Michael. Javascript is the first programming language i've attempted to learn, and over the past 6 months, i've gained some experience using technologies such as HTML, CSS/SASS, Bootstrap and jQuery. During this project, I mostly focused on the UI, styling and design. In my freetime I enjoy playing video games and plan to code some small game projects in the future.`;
                break;
            case "DE":
                //change Content
                lTitle1.innerText = 'Das Spiel Center';
                lHome.innerText = 'Start';
                lImpressum.innerText = 'Impressum';
                lHelp.innerText = 'Hilfe';
                lAbout.innerText = 'Über Uns';
                lContent1.innerText = '- UNSERE MISSION -';
                lContent2.innerText = 'Spaß und Funktionalität';
                lTalent1.innerText = 'Die Magier';
                lTalent2.innerText = 'Spaß und Funktionalität';
                lLocation.innerText = 'Ort';
                lText1.innerText = `Unser Team mit Sitz in Berlin besteht derzeit aus vier Mitgliedern und besteht aus Frontend und Backend Entwicklern. Seit 2018 arbeiten wir zusammen und haben uns zum Ziel gesetzt, Spaß und Funktionalität in jedes unserer Projekte und Kreationen zu bringen. Wir freuen uns über die Herausforderung, Lösungen für Probleme zu finden, und werden rechtzeitig auf Ihre Wünsche eingehen und Qualitätsprodukte liefern, damit Sie sich auf das konzentrieren können, was Sie am besten können.
                Bei Fragen wenden Sie sich bitte an uns und wir helfen Ihnen gerne weiter!`;
                lText2.innerText = lorem2;
                lText3.innerText = "Hallo, mein Name ist Claudio und ich bin ein Frontend-Entwickler mit einer Spezialisierung auf Javascript. Ich habe einen Hintergrund in Business (Marketing). Im Rahmen meines Studiums habe ich während eines Schüleraustauschs am Politecnico di Milano in Kommunikationsdesign ein Verständnis für Design entwickelt. Ich bin auch ein begeisterter Musiker und möchte in Zukunft mein Interesse an Musik mit dem Programm verbinden.";
                lText4.innerText = `Hi mein Name ist Marcel, bevor ich mit Javascript angefangen habe, konnte ich bereits einige Erfahrungen in anderen Sprachen sammeln z.B. Python. Bei diesem Projekt habe ich mich größtenteils um den Support mehrerer Sprachen gekümmert aber auch einige Grafiken erstellt und um die Spiellogik als solches. Meine Freizeit verbringe ich gerne mit Computerspielen oder mit dem Coden von nutzlosen Sachen.`;
                lText5.innerText = "Hallo, ich bin Michael. Javascript ist die erste Programmiersprache, die ich zu erlernen versucht habe, und in den letzten 6 Monaten habe ich einige Erfahrungen mit Technologien wie HTML, CSS/SASS, Bootstrap und jQuery gesammelt. Während dieses Projekts habe ich mich hauptsächlich auf die Benutzeroberfläche, das Styling und das Design konzentriert. In meiner Freizeit spiele ich gerne Videospiele und plane, in Zukunft einige Kleinspielprojekte zu programmieren.";
                break;
            default:
                //change Content
                lTitle1.innerText = 'The Game Center';
                lImpressum.innerText = 'Imprint';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lContent1.innerText = '- OUR MISSION -';
                lContent2.innerText = 'Fun and Functionality';
                lTalent1.innerText = 'The Talent';
                lTalent2.innerText = 'Fun and Funtionality';
                lLocation.innerText = 'Location';
                lText1.innerText = `Based in Berlin, our team currently consists of four members and is comprised of both front-end and back-end developers. Working together since 2018, we're dedicated to bringing fun and functionality throughout each of our projects and creations. We enjoy the challenge of finding solutions to problems and will be there to timely address your requests, delivering quality products so that you can focus on what you do best.
                Please contact if you have any questions and we’ll be happy to help!`;
                lText2.innerText = lorem2;
                lText3.innerText = "Hello, my name is Claudio and I’m a Front-end developer with a specialisation in Javascript. I have a background in Business (Marketing). As part of my degree I developed an appreciation for design while I did a student exchange at the Politecnico di Milano in Communication Design. I’m also a keen musician and in the future I would like to merge my interest in music with programming.";
                lText4.innerText = `Hey my name is Marcel, before coding in js i gathered some experience in other languages for example Python. On this project i mainly worked on getting multiple languages to work but i also did some images, styling and worked on the game mechanics. In my freetime i like playing computer games and code stupid stuff.`;
                lText5.innerText = `Hi, i'm Michael. Javascript is the first programming language i've attempted to learn, and over the past 6 months, i've gained some experience using technologies such as HTML, CSS/SASS, Bootstrap and jQuery. During this project, I mostly focused on the UI, styling and design. In my freetime I enjoy playing video games and plan to code some small game projects in the future.`;
                break;
        }
    } else if (page == 'impressum') {
        //Get Elements
        let lTitle1 = document.getElementById("lTitle1");
        let lHome = document.getElementById("lHome");
        let lHelp = document.getElementById("lHelp");
        let lAbout = document.getElementById("lAbout");
        let lImpressum1 = document.getElementById("lImpressum1");
        let lImpressum = document.getElementById("lImpressum");
        let lAdress = document.getElementById("lAdress");
        let lAdress1 = document.getElementById("lAdress1");
        let lAdress2 = document.getElementById("lAdress2");
        let lAdress3 = document.getElementById("lAdress3");
        let lContact = document.getElementById("lContact");
        let lContact1 = document.getElementById("lContact1");
        let lContent = document.getElementById("lContent");
        let lContent1 = document.getElementById("lContent1");
        let lLinks = document.getElementById("lLinks");
        let lLinks1 = document.getElementById("lLinks1");
        let lCopyright = document.getElementById("lCopyright");
        let lCopyright1 = document.getElementById("lCopyright1");
        let lDisclaimer = document.getElementById("lDisclaimer");

        switch (language) {
            case "EN":
                //change Content
                lImpressum.innerText = 'Imprint';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';
                lDisclaimer.innerText = `!This Imprint is just a placeholder!`;
                lTitle1.innerText = 'The Game Center';
                lImpressum.innerText = `Imprint`;
                lAdress.innerText = `Address`;
                lAdress1.innerText = `Digital Career Institute`;
                lAdress2.innerText = `Vulkanstraße 1`;
                lAdress3.innerText = `10367 Berlin`;
                lContact.innerText = `Contact`;
                lContact1.innerText = `maumauers@gmail.com`;
                lContent.innerText = `Liability for contents`;
                lContent1.innerText = `As a service provider, we are responsible in accordance with § 7 paragraph 1 of TMG for our own contents on these sites under the general laws. However, in accordance with §§ 8 to 10 TMG (German Teleservices Act), we - as service providers - are not obliged to monitor transmitted or stored information from third parties or to investigate circumstances that indicate illegal activity.
                Obligation to remove or block the use of information under the general laws remains unaffected. Nevertheless, liability in this regard is possible only from the moment that knowledge of the specific breach of law is obtained. We will remove the content as soon as we become aware of the relevant infringement.`;
                lLinks.innerText = `Liability for links`;
                lLinks1.innerText = `Our site contains links to external third-party websites over which we have no control. Therefore, we cannot accept any responsibility for this external content. The respective service provider or operator of the sites is always responsible for the contents of linked sites. The linked sites were checked at the time of linking for any infringement. Illegal contents were not noticeable at the time of linking.
                However, permanent monitoring of the content of linked sites is unreasonable without concrete evidence of infringement. We will remove the content as soon as we become aware of the infringement.`;
                lCopyright.innerText = `Copyright`;
                lCopyright1.innerText = `The content created by the site operator, as well as posting on these sites are subject to German copyright. Reproduction, editing, distribution or any kind of use outside the scope of copyright require the written consent of the author or editor. Downloads and copies of this site are permitted only for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyright of third parties is respected. In particular, third-party content is marked as such. However, should you become aware of any copyright infringement, we would request that you notify us accordingly. We will remove such content as soon as we become aware of the infringement.`;
                break;
            case "DE":
                //change Content
                lHome.innerText = 'Start';
                lImpressum.innerText = 'Impressum';
                lHelp.innerText = 'Hilfe';
                lAbout.innerText = 'Über Uns';
                lDisclaimer.innerText = `!Dieses Impressum ist nur ein Platzhalter!`;
                lTitle1.innerText = 'Das Spiel Center';
                lImpressum.innerText = `Impressum`;
                lAdress.innerText = `Adresse`;
                lAdress1.innerText = `Digital Career Institute`;
                lAdress2.innerText = `Vulkanstraße 1`;
                lAdress3.innerText = `10367 Berlin`;
                lContact.innerText = `Kontakt`;
                lContact1.innerText = `maumauers@gmail.com`;
                lContent.innerText = `Haftung für Inhalte`;
                lContent1.innerText = `Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.`;
                lLinks.innerText = `Haftung für Links`;
                lLinks1.innerText = `Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechts-verletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.`;
                lCopyright.innerText = `Urheberrecht`;
                lCopyright1.innerText = `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.`;
                break;
            default:
                //change Content
                lImpressum.innerText = 'Imprint';
                lHome.innerText = 'Home';
                lHelp.innerText = 'Help';
                lAbout.innerText = 'About';

                lDisclaimer.innerText = `!This Imprint is just a placeholder!`;
                lTitle1.innerText = 'The Game Center';
                lImpressum.innerText = `Imprint`;
                lAdress.innerText = `Address`;
                lAdress1.innerText = `Digital Career Institute`;
                lAdress2.innerText = `Vulkanstraße 1`;
                lAdress3.innerText = `10367 Berlin`;
                lContact.innerText = `Contact`;
                lContact1.innerText = `maumauers@gmail.com`;
                lContent.innerText = `Liability for contents`;
                lContent1.innerText = `As a service provider, we are responsible in accordance with § 7 paragraph 1 of TMG for our own contents on these sites under the general laws. However, in accordance with §§ 8 to 10 TMG (German Teleservices Act), we - as service providers - are not obliged to monitor transmitted or stored information from third parties or to investigate circumstances that indicate illegal activity.
                Obligation to remove or block the use of information under the general laws remains unaffected. Nevertheless, liability in this regard is possible only from the moment that knowledge of the specific breach of law is obtained. We will remove the content as soon as we become aware of the relevant infringement.`;
                lLinks.innerText = `Liability for links`;
                lLinks1.innerText = `Our site contains links to external third-party websites over which we have no control. Therefore, we cannot accept any responsibility for this external content. The respective service provider or operator of the sites is always responsible for the contents of linked sites. The linked sites were checked at the time of linking for any infringement. Illegal contents were not noticeable at the time of linking.
                However, permanent monitoring of the content of linked sites is unreasonable without concrete evidence of infringement. We will remove the content as soon as we become aware of the infringement.`;
                lCopyright.innerText = `Copyright`;
                lCopyright1.innerText = `The content created by the site operator, as well as posting on these sites are subject to German copyright. Reproduction, editing, distribution or any kind of use outside the scope of copyright require the written consent of the author or editor. Downloads and copies of this site are permitted only for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyright of third parties is respected. In particular, third-party content is marked as such. However, should you become aware of any copyright infringement, we would request that you notify us accordingly. We will remove such content as soon as we become aware of the infringement.`;
                break;
        }
    };
};