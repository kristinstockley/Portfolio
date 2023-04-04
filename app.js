// OPEN NEW WINDOW
function openInNewWindow(event) {
    event.preventDefault();
    window.open(event.target.href, '_blank');
}


// GRADUATION COUNTDOWN

const countDownDate = new Date("Jun 12, 2023 00:00:00").getTime();

const x = setInterval(function() {

const now = new Date().getTime();

const distance = countDownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


// DARK MODE
const darkModeButton = document.querySelector('#dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);
  
function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}



// FORM SUBMISSION IN PROGRESS
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  
  const request = new XMLHttpRequest();
  request.open('POST', '/submit-contact-form');
  request.send(formData);
  
  alert('Thanks for your message!');
});
