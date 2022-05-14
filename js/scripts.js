function metodoPomodoro(tempo){
    console.log("iniciando pomodoro");
    document.getElementById("btnIniciar").innerHTML = 'Iniciar';

    const elementP = document.getElementById("tempo");
    elementP.innerHTML = `${tempo}:00`
    clearInterval(intervalId);
    
}

function iniciar() {
    intervalId = setInterval(alteraTempo, 100);
}

function parar() {
    clearInterval(intervalId);

    const elementP = document.getElementById("btnIniciar");
    elementP.innerHTML = 'Continuar';
}

function paradaCurta(tempo){
    console.log("iniciando parada curta");
    document.getElementById("btnIniciar").innerHTML = 'Iniciar';

    const elementP = document.getElementById("tempo");
    elementP.innerHTML = tempo < 10 ? `0${tempo}:00`: `${tempo}:00`;
    clearInterval(intervalId);
}

function paradaLonga(tempo){
    console.log("iniciando parada longa");
    document.getElementById("btnIniciar").innerHTML = 'Iniciar';

    const elementP = document.getElementById("tempo");
    elementP.innerHTML = `${tempo}:00`;
    clearInterval(intervalId)
}

function alteraTempo(){
    const elementP = document.getElementById("tempo");
    const value = elementP.innerHTML;

    let [mins, segs] = value.split(":").map((num) => parseInt(num, 10));
    if (segs == 0){
        mins = mins - 1;
        segs = 60;
    }
    segs = segs - 1;

    if (mins == 0) {
        metodoPomodoro(25);
        tocarSom();
    } else {
        elementP.innerHTML = `${String(mins).padStart(2, '0')}:${String(segs).padStart(2,0)}`
    }
}

/*por o som bacan*/ 
function tocarSom() {
    const elementAudio = document.getElementById("audio");
    elementAudio.play();
}