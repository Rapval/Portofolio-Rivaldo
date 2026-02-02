// === Typing Sound ===
const typingSound = new Audio("typing.mp3");
typingSound.volume = 10;
typingSound.loop = true;

// === Typewriter Effect ===
function typeWriter(element, text, speed = 35) {
  element.textContent = "";
  let i = 0;

  typingSound.currentTime = 0;
  typingSound.play().catch(() => {});

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      typingSound.pause();
      typingSound.currentTime = 0;
    }
  }, speed);
}

// === MAIN FUNCTION ===
function sendData() {
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const result = document.getElementById("result");

  if (!amount || !category) {
    typeWriter(result, "⚠️ Please input amount and category.");
    return;
  }

  typeWriter(result, "Processing secure evaluation...");

  setTimeout(() => {
    const summary = `
{
  "status": "OK",
  "evaluation": "Data processed securely",
  "exposure": "Partial summary only",
  "amount_range": "${amount > 1000 ? "High" : "Normal"}",
  "category": "${category}"
}
    `.trim();

    typeWriter(result, summary, 18);
  }, 900);
}