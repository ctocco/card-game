// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("myBtn").addEventListener("click", topFunction);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*
//Send E-mail
function sendMail() {
let user = document.getElementById("name");
let mail = document.getElementById("email");
let message = document.getElementById("message");

    var link = "mailto:maumauers@gmail.com"
             + `?cc=${mail}`
             + "&subject=" + user
             + "&body=" + message.value
    ;

    window.location.href = link;
}
*/