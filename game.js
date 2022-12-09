var spieler = document.querySelector('.player')


spieler.style.top = '0px'



//je höcher zahl desto höher
var timer = new Timer(50)

//background scrolling
var spielfeld = document.querySelector('.playground')
var backgroundPosition = 0;

function steuerung() {
    if (keyboard(38) && parseInt(spieler.style.top) > 0) {
        spieler.style.top = parseInt(spieler.style.top) - 10 + 'px'
    }
    if (keyboard(40) && parseInt(spieler.style.top) < 380) {
        spieler.style.top = parseInt(spieler.style.top) + 10 + 'px'
    }
}

function createpfeiler() {
    if (timer.ready()) {
        let randomHeight = Math.random() * 250 + 50
        console.log(randomHeight)

        var h = document.createElement('div')
        h.classList.add('stein')
        h.style.top = '0px'
        //startposition von balken
        h.style.left = '380px'
        h.style.height = randomHeight + 'px'
        spielfeld.appendChild(h)

        var h = document.createElement('div')
        h.classList.add('stein')
        h.style.top = (randomHeight + 80) + "px"
        h.style.left = "380px"
        //80 ist abstand zwischen balken
        h.style.height = (400 - randomHeight - 80) + "px"
        spielfeld.appendChild(h)


    }

}

function pfeilerverhalten() {
    var steine = document.querySelectorAll('.stein')
    for (var stein of steine) {

        //-3 --> geschwindigkeit von pfeiler
        stein.style.left = parseInt(stein.style.left) - 3 + 'px'
        if (parseInt(stein.style.left) < -5) {
            stein.parentNode.removeChild(stein)
        }
    }
}

function backgroundscrolling() {
    backgroundPosition = backgroundPosition + 3;
    spielfeld.style.backgroundPosition = `-${backgroundPosition}px 0`;
}


// function kollision() {
//     // Kommentar: sobald der Spieler mit stein kollidiert, ist das Spiel fertig
//     if (anyCollision(spieler, [stein])) {
//         alert("Game over!")
//         return
//     }
// }


function loop() {

    steuerung()
    createpfeiler()
    pfeilerverhalten()
    backgroundscrolling()
    // kollision()
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)