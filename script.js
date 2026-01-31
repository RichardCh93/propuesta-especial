const fechaObjetivo = new Date("2026-01-14T00:00:00");

function actualizarReloj() {
    const ahora = new Date();
    const dif = ahora - fechaObjetivo;
    const d = Math.floor(dif / 86400000);
    const h = Math.floor((dif / 3600000) % 24).toString().padStart(2, '0');
    const m = Math.floor((dif / 60000) % 60).toString().padStart(2, '0');
    const s = Math.floor((dif / 1000) % 60).toString().padStart(2, '0');
    document.getElementById('reloj').innerText = `${d}d ${h}h ${m}m ${s}s`;
}

function crearCopa() {
    const contenedor = document.getElementById('hojas-contenedor');
    const colores = ['#7b2cbf', '#9d4edd', '#be95ff', '#ff4d6d', '#ff0054', '#ff8fa3'];

    // 600 corazones para una copa súper frondosa
    for (let i = 0; i < 800; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-hoja';
        const t = Math.random() * 2 * Math.PI;
        const rRelleno = Math.sqrt(Math.random()); 
        
        const escala = 14 * rRelleno; 
        
        const x = escala * (16 * Math.pow(Math.sin(t), 3));
        const y = -escala * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        
        // Centrado perfecto sobre el tronco
        corazon.style.left = `${x + 175}px`;
        corazon.style.top = `${y + 160}px`;
        corazon.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        corazon.style.animationDelay = `${Math.random() * 3}s`;
        contenedor.appendChild(corazon);
    }
}

const btnNo = document.getElementById('btnNo');
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

function celebrar() {
    // Reproducir música
    const cancion = document.getElementById('musica');
    cancion.play().catch(e => console.log("Audio esperando clic"));

    // Fuegos artificiales 10 segundos
    var duration = 10 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 35, spread: 360, ticks: 80, zIndex: 9999 };

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        var particleCount = 60 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: Math.random() * 0.4, y: Math.random() - 0.2 } 
        }));
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: Math.random() * 0.4 + 0.6, y: Math.random() - 0.2 } 
        }));
    }, 200);

    // Doble alerta solicitada
    setTimeout(() => { 
        alert("SABÍA QUE DIRÍAS QUE SÍ! ❤️");
        alert("TE ADORO MI NIÑA PRECIOSA 💖✨");
    }, 1000);
}

window.onload = () => {
    crearCopa();
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
};
