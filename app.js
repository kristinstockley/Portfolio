// Typing text
const text = "Hi, I'm Kristin!";
const typingSpeed = 100;

const typingTextElement = document.getElementById('typing-text');
typingTextElement.classList.add('blinking-cursor');

function typeText() {
	let i = 0;
	const typingInterval = setInterval(function () {
		if (i < text.length) {
			typingTextElement.textContent += text.charAt(i);
			i++;
		} else {
			clearInterval(typingInterval);
		}
	}, typingSpeed);
}

window.addEventListener('load', () => {
	typeText();
});

// SCROLL TO TOP
const scrollBtn = document.getElementById('scrollBtn');

window.onscroll = function () {
	if (
		document.body.scrollTop > 700 ||
		document.documentElement.scrollTop > 700
	) {
		scrollBtn.style.display = 'block';
	} else {
		scrollBtn.style.display = 'none';
	}
};

scrollBtn.onclick = function () {
	scrollToTop();
};

function scrollToTop() {
	if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setTimeout(scrollToTop, 1000);
	}
}
