/* Media Script START */
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
/* Media Script END */

/* Contact Script START */
function checkName(name) {
    var letters = /^[A-Za-z]+$/;
    if (document.getElementById(name).value.match(letters)) {
        document.getElementById(name).style.borderTop = '2px green solid';
        document.getElementById(name).style.borderLeft = '2px green solid';
        document.getElementById(name).style.borderRight = '2px green solid';

        return true;
    } else {
        document.getElementById(name).style.borderTop = "2px red solid";
        document.getElementById(name).style.borderLeft = "2px red solid";
        document.getElementById(name).style.borderRight = "2px red solid";

        return false;
    }
}

function checkEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (document.getElementById('email').value.match(validRegex)) {
        document.getElementById('email').style.borderTop = '2px green solid';
        document.getElementById('email').style.borderLeft = '2px green solid';
        document.getElementById('email').style.borderRight = '2px green solid';

        return true;
    } else {
        document.getElementById('email').style.borderTop = "2px red solid";
        document.getElementById('email').style.borderLeft = "2px red solid";
        document.getElementById('email').style.borderRight = "2px red solid";

        return false;
    }
}

function checkText() {
    let amount = 500;

    amount -= document.getElementById('freeText').value.length;
    document.getElementById('letters').innerHTML = `${amount} letters left.`;

    if (document.getElementById('freeText').value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function checkAll() {
    if (checkName('first') == true && checkName('last') == true && checkEmail() == true && checkText() == true) {
        alert('Form was successfully delivered!');
        document.getElementById("sendMSG").type = 'submit';
    } else {
        alert('Not all fields were filled correctly!');
    }
}
/* Contact Script END */