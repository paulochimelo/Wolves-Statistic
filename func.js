







function testeasa(){

let adc = document.getElementById("valores").value;
let lista = [adc]

let xmax = lista[lista.length - 1];
let xmin = lista[0]
let at = xmax-xmin

let k = lista.length
k = (Math.sqrt(k))
let k2 = k.tofixed(0)

alert(k2,k)
 
}

function PROBABILIDADE(){
    console.log('S')
    let sucesso = document.getElementById('sucesso').value
    let fracasso = document.getElementById('fracasso').value
    let amostra = document.getElementById('mostra').value
    let evento = document.getElementById('evento').value

    console.log(sucesso)
    console.log(fracasso)
    console.log(amostra)
    console.log(evento)

    let k = 1

    for (evento > 0;;){
        k = k * evento
        evento - 1
    }
    console.log (k)
}

