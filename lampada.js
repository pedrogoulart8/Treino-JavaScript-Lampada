var lampada = document.getElementById('lamp')
var botaoLigar = document.getElementById('turnOn')
var botaoDesligar = document.getElementById('turnOff')


function lampadaQuebrada(){

    return lampada.src.indexOf ('quebrada') > -1

}


function ligar(){

    if(!lampadaQuebrada()){

        lampada.setAttribute('src', 'img/ligada.jpg');

    }
    

}

function desligar(){

    if(!lampadaQuebrada()){

        lampada.setAttribute('src', 'img/desligada.jpg')

    }
    
}


function quebrar(){

    lampada.setAttribute('src', 'img/quebrada.jpg')

}


