// RESUME MODAL
function openResume() {
    const resumeModal = document.querySelector('#resumeModal');
    const resumeIframe = document.querySelector('#resumeIframe');
    resumeIframe.src = './Kristin Stockley Resume.pdf';
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
