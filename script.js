const fechaObjetivo = new Date("2026-01-14T00:00:00");

function actualizarReloj() {
    const ahora = new Date();
    const dif = ahora - fechaObjetivo;
    const d = Math.floor(dif / 86400000);
    const h = Math.floor((dif / 3600000) % 24).toString().padStart(2, '0');
    const m = Math.floor((dif / 60000) % 60).toString().padStart(2, '0');
    const s = Math.floor((dif / 1000) % 60).toString().padStart(2, '0');
    document.getElementById('reloj').innerText = `${d} días ${h}:${m}:${s}`;
}

function crearCopa() {
    const contenedor = document.getElementById('hojas-contenedor');
    const colores = ['#7b2cbf', '#9d4edd', '#be95ff', '#ff4d6d', '#ff0054', '#ff8fa3'];

    for (let i = 0; i < 400; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-hoja';
        const t = Math.random() * 2 * Math.PI;
        const rRelleno = Math.sqrt(Math.random()); 
        const escala = 14 * rRelleno; 
        const x = escala * (16 * Math.pow(Math.sin(t), 3));
        const y = -escala * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        corazon.style.left = `${x + 225}px`;
        corazon.style.top = `${y + 180}px`;
        corazon.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        corazon.style.animationDelay = `${Math.random() * 3}s`;
        contenedor.appendChild(corazon);
    }
}

const btnNo = document.getElementById('btnNo');
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

// CELEBRACIÓN: 50 SEGUNDOS Y MUCHO MÁS CONFETI
function celebrar() {
    var duration = 50 * 1000; // 10 segundos
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 40, spread: 360, ticks: 100, zIndex: 1000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      // Aumentado a 80 partículas por ráfaga para que se vea "bastante"
      var particleCount = 100 * (timeLeft / duration);
      
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#7b2cbf', '#ff4d6d', '#ffffff']
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#7b2cbf', '#ff4d6d', '#ffffff']
      }));
    }, 150); // Ráfagas más seguidas (cada 150ms)

    setTimeout(() => {
        alert("¡SABÍA QUE DIRÍAS QUE SÍ! ❤️");
         alert("TE ADORO MI NIÑA HERMOSA❤️");
    }, 1000);
}

window.onload = () => {
    crearCopa();
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
};