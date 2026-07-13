// Jam Digital WIB
function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  const now = new Date();
  clock.innerHTML = now.toLocaleTimeString("id-ID") + " WIB";
}

setInterval(updateClock, 1000);
updateClock();

// Counter Online
function updateOnline() {
  const online = document.getElementById("onlineCount");
  if (!online) return;

  online.innerHTML = Math.floor(Math.random() * 100) + 250;
}

setInterval(updateOnline, 5000);
updateOnline();

// Efek Tombol
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function () {
    this.style.transform = "scale(0.96)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 120);
  });
});

// Fade In
window.onload = function () {
  document.body.style.opacity = "0";

  setTimeout(() => {
    document.body.style.transition = ".6s";
    document.body.style.opacity = "1";
  }, 100);
};
