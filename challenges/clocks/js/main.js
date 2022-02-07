function digitalClock(timeAR, timeNY, timeLA){
    const h1 = document.querySelector(".digital-clock h1")
    const h2 = document.querySelector(".digital-clock h2")
    const h1NY = document.querySelector(".digital-clockNY h1")
    const h1CA = document.querySelector(".digital-clockCA h1")
    const h2NY = document.querySelector(".digital-clockNY h2")
    const h2CA = document.querySelector(".digital-clockCA h2")
    h1.textContent = timeAR.substring(0, 8);
    h2.textContent = "Argentina"
    h1NY.textContent = timeNY.substring(0, 8);
    h1CA.textContent = timeLA.substring(0, 8);
    h2NY.textContent = "New York"
    h2CA.textContent = "California"
}

function time(){
    const date = new Date();
    const timeAR = date.toTimeString();
    const timeNY = date.toLocaleTimeString('es',{timeZone: 'EST'});
    const timeLA = date.toLocaleTimeString('es',{timeZone: 'PST'});
    digitalClock(timeAR, timeNY, timeLA);
}

setInterval(time, 1000);
