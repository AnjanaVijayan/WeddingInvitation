// Background Music Control
let musicPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');

function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
        musicControl.innerHTML = '<svg viewBox="0 0 24 24" fill="white"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>';
    } else {
        bgMusic.play();
        musicPlaying = true;
        musicControl.innerHTML = '<svg viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
    }
}

// Auto-play music (with user interaction requirement)
document.addEventListener('click', function() {
    if (!musicPlaying) {
        bgMusic.play();
        musicPlaying = true;
        musicControl.innerHTML = '<svg viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
    }
}, { once: true });

// Countdown Timer
const weddingDate = new Date('May 4, 2026 10:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<h3 style="font-family: Dancing Script, cursive; font-size: 3.5rem; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">The Big Day is Here! 🎉💒</h3>';
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Smooth scroll for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.countdown').scrollIntoView({ behavior: 'smooth' });
});
