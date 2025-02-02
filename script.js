function startFalling() {
    for (let i = 0; i < 20; i++) {
        let emoji = Math.random() > 0.5 ? "💖" : "🌸";
        let item = document.createElement("div");
        item.className = "falling-items";
        item.innerHTML = emoji;
        item.style.left = Math.random() * window.innerWidth + "px";
        item.style.animationDuration = (2 + Math.random() * 3) + "s";
        document.body.appendChild(item);
        setTimeout(() => item.remove(), 5000);
    }

    // Display "I Love You" message
    let message = document.createElement("div");
    message.className = "love-message";
    message.innerText = "I Love You! ❤️";
    document.body.appendChild(message);

    // Display hug GIF
    let hugGif = document.createElement("img");
    hugGif.src = "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif"; // Boy hugging girl GIF
    hugGif.className = "hug-gif";
    document.body.appendChild(hugGif);
}

function moveNoButton() {
    let noButton = document.getElementById('no');
    let x = Math.random() * window.innerWidth * 0.6;
    let y = Math.random() * window.innerHeight * 0.6;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
