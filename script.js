const jugadormap = document.getElementById("jugadormap");
const jugador = document.getElementById("jugador");
const mapa = document.getElementById("mapa");

let jugadormpaX = 0;
let jugadormpaY = 0;
let jugadorX = 0;
let jugadorY = 0;
let v = 0.1
var rjugador = 0;
const teclas = {}

document.addEventListener("keydown", (event) => {
    teclas[event.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (event) => {
    teclas[event.key.toLowerCase()] = false;
});


function gameloop() {
if (teclas["w"]){jugadormpaY -= v; rjugador = 0;jugadorY -= v*4;}
if (teclas["s"]){jugadormpaY += v; rjugador = 180; jugadorY += v*4;}
if (teclas["a"]){jugadormpaX -= v; rjugador = 270; jugadorX -= v*4;}
if (teclas["d"]){jugadormpaX += v; rjugador = 90; jugadorX += v*4;}


if (teclas["w"] && teclas["d"]) rjugador = 45;
    if (teclas["s"] && teclas["d"]) rjugador = 135;
    if (teclas["s"] && teclas["a"]) rjugador = 225;
    if (teclas["w"] && teclas["a"]) rjugador = 315;
actualizar();
requestAnimationFrame(gameloop);
}

function actualizar() {
jugadormap.style.transform = `translate(${jugadormpaX}px, ${jugadormpaY}px) rotate(${rjugador}deg)`;
//jugador.style.transform = ` rotate(${rjugador}deg)`;
let escala = 1 + (jugadorY * 0.002);
escala = Math.max(0.4, Math.min(escala, 1.8));
jugador.style.transform = `translate(-50%, -50%) translate(${jugadorX}px, 30%)  scale(${escala})`;
mapa.style.backgroundPosition = `${-jugadormpaX + window.innerWidth / 2}px ${-jugadormpaY + window.innerHeight / 2}px`;
}

requestAnimationFrame(gameloop);