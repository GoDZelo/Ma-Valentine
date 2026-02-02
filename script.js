const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const bear   = document.getElementById("bear");

let yesScale = 1;
let noScale  = 1;

const noMessages = [
  "Tu es sûre ?",
  "Sûre sûre sûre ??",
  "Sûre et certaine ?",
  "T'en es vraiment sûre ?",
  "Si tu dis non je serai très triste",
  "Vraiment très triste...",
  "Tu veux me voire triste ?",
  "Tu ne regretteras pas de dire oui",
  "Allez dis oui mon coeur stp"
];

let noClickCount = 0;

function setScales() {
  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform  = `scale(${noScale})`;
}

// petit pop (sans toucher au src du gif)
function bearPop() {
  bear.style.transition = "transform 120ms ease";
  bear.style.transform = "scale(1.06)";
  setTimeout(() => {
    bear.style.transform = "";
  }, 130);
}

noBtn.addEventListener("click", () => {
  // 1) resize boutons
  yesScale += 0.18;
  noScale  -= 0.14;

  if (noScale < 0.35) noScale = 0.35;
  if (yesScale > 2.6) yesScale = 2.6;

  setScales();

  // 2) changer le texte du bouton "Non"
  const msgIndex = Math.min(noClickCount, noMessages.length - 1);
  noBtn.textContent = noMessages[msgIndex];
  noClickCount++;

  // 3) petit effet sur l’ourson (sans le faire disparaître)
  bearPop();
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

setScales();
