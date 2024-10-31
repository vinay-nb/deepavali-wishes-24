document.getElementById("celebrateBtn").addEventListener("click", function () {
  const fireworksContainer = document.getElementById("fireworks");
  fireworksContainer.style.display = "block";

  for (let i = 0; i < 10; i++) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.width = "10px";
    firework.style.height = "10px";
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.bottom = "0";
    fireworksContainer.appendChild(firework);

    setTimeout(() => {
      firework.style.opacity = "1";
      firework.style.bottom = "80vh"; // Simulate rise
      firework.style.animation = "explode 0.5s forwards";
      createParticles(firework.style.left, "80vh");
    }, 200 * i);

    setTimeout(() => {
      firework.remove();
    }, 1000);
  }
});

function createParticles(position, bottom) {
  const particleCount = 30; // Number of particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "firework";
    particle.style.position = "absolute";
    particle.style.width = "5px";
    particle.style.height = "5px";
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.left = position;

    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 100 + 50;
    const x = Math.cos(angle) * speed;
    const y = Math.sin(angle) * speed;

    particle.style.bottom = bottom;

    document.getElementById("fireworks").appendChild(particle);

    setTimeout(() => {
      particle.style.transform = `translate(${x}px, ${y}px)`;
      particle.style.opacity = "0";
      particle.style.transition = "all 1s ease-out";
    }, 0);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}
