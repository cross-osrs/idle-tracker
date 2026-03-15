let lastInput = Date.now();

const box = document.createElement("div");
box.style.position = "fixed";
box.style.top = "20px";
box.style.right = "20px";
box.style.background = "rgba(0,0,0,0.85)";
box.style.padding = "8px 14px";
box.style.fontFamily = "monospace";
box.style.fontSize = "14px";
box.style.borderRadius = "6px";
box.style.zIndex = 999999;
box.style.pointerEvents = "none";
box.style.transition = "color 0.2s ease";

document.body.appendChild(box);

function resetTimer() {
  lastInput = Date.now();
}

document.addEventListener("mousemove", resetTimer);
document.addEventListener("mousedown", resetTimer);
document.addEventListener("keydown", resetTimer);

setInterval(() => {
  const idle = (Date.now() - lastInput) / 1000;

  if (idle < 5) {
    box.style.color = "#00ff66";
  } else if (idle < 15) {
    box.style.color = "#ffd000";
  } else {
    box.style.color = "#ff4040";
  }

  box.textContent = "Idle: " + idle.toFixed(1) + "s";

}, 100);