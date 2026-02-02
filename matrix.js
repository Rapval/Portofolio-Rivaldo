const matrix = document.getElementById("matrix");
const chars = ["JS", "CODE", "ZK", "AI", "WEB3", "SYS", "PRIV"];
const maxChars = 120;

function spawnChar() {
  if (matrix.children.length > maxChars) return;

  const el = document.createElement("div");
  el.className = "char";
  el.textContent = chars[Math.floor(Math.random() * chars.length)];

  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.top = "-20px";
  el.style.opacity = Math.random() * 0.6 + 0.3;
  el.style.fontSize = "14px";
  el.style.animation = `fall ${4 + Math.random() * 4}s linear`;

  matrix.appendChild(el);

  setTimeout(() => el.remove(), 8000);
}

setInterval(spawnChar, 80);