// OPEN NEW WINDOW
function openInNewWindow(event) {
    event.preventDefault();
    window.open(event.target.href, '_blank');
}



// GRADUATION COUNTDOWN
const startButton = document.getElementById('countdownButton');

startButton.addEventListener('click', function() {
  const countDownDate = new Date("Jun 12, 2023 00:00:00").getTime();
  let x = 0;

  function startCountdown() {
    x = setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("countdownButton").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownButton").innerHTML = "GRADUATED";
      }
    }, 1000);
  }

  startCountdown();
});


// DARK MODE
const darkModeButton = document.getElementById('darkMode');

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});



// RESUME MODAL
function openResume() {
    const resumeModal = document.querySelector('#resumeModal');
    const resumeIframe = document.querySelector('#resumeIframe');
    resumeIframe.src = './Kristin Resume.pdf';
    const modal = new bootstrap.Modal(resumeModal);
    modal.show();
}



// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function() {
  scrollToTop();
};

function scrollToTop() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(scrollToTop, 1000);
  }
}
