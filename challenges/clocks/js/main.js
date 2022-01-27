

function format(number){        
    return ("00" + number).substring(("00" + number).length - 2) /* agrega dos ceros delante del número enviado y devuelve una substring */
}                                                               /* que contiene los últimos dos caracteres*/


function digitalClock(hours, minutes, seconds, hoursNY, hoursCA){
    const h1 = document.querySelector(".digital-clock h1")
    const h2 = document.querySelector(".digital-clock h2")
    h1.textContent = [hours + ":" + minutes + ":" + seconds]
    h2.textContent = "Argentina"
    const h1NY = document.querySelector(".digital-clockNY h1")
    const h1CA = document.querySelector(".digital-clockCA h1")
    const h2NY = document.querySelector(".digital-clockNY h2")
    const h2CA = document.querySelector(".digital-clockCA h2")
    h1NY.textContent = [hoursNY + ":" + minutes + ":" + seconds]
    h1CA.textContent = [hoursCA + ":" + minutes + ":" + seconds]
    h2NY.textContent = "New York"
    h2CA.textContent = "California"
    
}

function analogClock(hours, minutes, seconds) {
    const clock = document.querySelector(".analog-clock");
    clock.style.setProperty("--hours-rotation", `${(360 / 12) * hours}deg`);
    clock.style.setProperty("--minutes-rotation", `${(360 / 60) * minutes}deg`);
    clock.style.setProperty("--seconds-rotation", `${(360 / 60) * seconds}deg`);
}

function time(){

    const start = new Date();
    const hoursAux = start.getHours() /* hago esto para evitar hacer start.getHours() 6 veces. No sé si es más eficiente o no */
    const hours = format(hoursAux);
    const minutes = format(start.getMinutes());
    const seconds = format(start.getSeconds());
    const hoursNY = format(hoursAux - 2 >= 0 ? hoursAux - 2  : 24 + hoursAux - 2 ); /* como la diferencia de NY y CA con Argentina es -2 y -5  */
    const hoursCA = format(hoursAux - 5 >= 0 ? hoursAux - 5  : 24 + hoursAux - 5 ); /* respectivamente, resto esos números a la hora Argentina 
                                                                                     y si el numero es negativo le sumo 24 */
    digitalClock(hours, minutes, seconds, hoursNY, hoursCA);
    analogicClock(hours, minutes, seconds)

}

setInterval(time, 1000);

