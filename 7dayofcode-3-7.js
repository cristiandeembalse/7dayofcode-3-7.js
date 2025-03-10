const primerRespuesta = prompt("Si quieres seguir hacia el área de Front-End responde 1. Si quieres seguir hacia el área de Back-End responde 2.");

if(primerRespuesta == 1) {
    const segundaRespuesta = prompt("Si quieres aprender React responde 1. Si quieres aprender Vue responde 2.");
    if (segundaRespuesta == 1) {
        alert("Felicitaciones por elegir Front-End y aprender React");
    } else if (segundaRespuesta == 2) {
        alert("Felicitaciones por elegir Front-End y aprender Vue");
    } else {
        alert("No es una respuesta válida.");
    }
} else if(primerRespuesta == 2) {
    const segundaRespuesta = prompt("Si quieres aprender C++ responde 1. Si quieres aprender Java responde 2.");
    if (segundaRespuesta == 1) {
        alert("Felicitaciones por elegir Back-End y aprender C++");
    } else if (segundaRespuesta == 2) {
        alert("Felicitaciones por elegir Back-End y aprender Java");
    } else {
        alert("No es una respuesta válida.");
    }

} else {
    alert("No es una respuesta válida.");
}

const terceraRespuesta = prompt("Si quieres especializarte en el área elegida responde 1. Si quieres desarrollarte para convertirte en Fullstack presiona 2.");

if (terceraRespuesta == 1) {
    alert("Felicitaciones por decidirte a especializarte en el área elegida");
} else if (terceraRespuesta == 2) {
    alert("Felicitaciones por elegir desarrollarte para convertirte en Fullstack");
} else {
    alert("No es una respuesta válida.");
}

let cuartaRespuesta = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");


while (cuartaRespuesta != "no") {
    cuartaRespuesta = prompt("Ingresa la tecnología que te gustaría aprender");
    alert(Tu decisión de estudiar ${cuartaRespuesta} es acertada);
    cuartaRespuesta = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
}