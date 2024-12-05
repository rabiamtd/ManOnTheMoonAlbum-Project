// app.js

// Background animation
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 150; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    dx: Math.random() * 2 - 1,
    dy: Math.random() * 2 - 1,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

// Smooth section scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}


// Clone canvas animation for About section
const canvasAbout = document.getElementById("background-about");
const ctxAbout = canvasAbout.getContext("2d");

canvasAbout.width = window.innerWidth;
canvasAbout.height = window.innerHeight;

const particlesAbout = [];
for (let i = 0; i < 150; i++) {
  particlesAbout.push({
    x: Math.random() * canvasAbout.width,
    y: Math.random() * canvasAbout.height,
    size: Math.random() * 3,
    dx: Math.random() * 2 - 1,
    dy: Math.random() * 2 - 1,
  });
}

function animateAbout() {
  ctxAbout.clearRect(0, 0, canvasAbout.width, canvasAbout.height);
  particlesAbout.forEach((p) => {
    ctxAbout.beginPath();
    ctxAbout.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctxAbout.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctxAbout.fill();
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvasAbout.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvasAbout.height) p.dy *= -1;
  });
  requestAnimationFrame(animateAbout);
}
animateAbout();
