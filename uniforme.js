function probabilidadeUniforme() {
    mediaedesvio.innerHTML = ``
    var Maximo = document.getElementById("valorMax").value;
    var Minimo = document.getElementById('valorMin').value;
    var Diferenca = Number(Maximo) + Number(Minimo)
    Diferenca /= 2
    var desvio = Math.pow((Maximo - Minimo), 2)

    desvio = Math.sqrt((desvio / 12)).toFixed(2)

    mediaedesvio.innerHTML += `Media: ${Diferenca}<br>Desvio Padrão:${desvio}`
}

function maisq() {
    maisqdiv.innerHTML = ''
    var Maximo = document.getElementById("valorMax").value;
    var Minimo = document.getElementById('valorMin').value;
    var int = document.getElementById('maisQ').value;
    var prob = (1 / (Maximo - Minimo) * (Maximo - int)) * 100
    maisqdiv.innerHTML += `Probabilidade: ${prob}%`
}

function menosq() {
    menosqdiv.innerHTML = ''
    var Maximo = document.getElementById("valorMax").value;
    var Minimo = document.getElementById('valorMin').value;
    var int = document.getElementById('menosQ').value;
    var intervalo = (Minimo - int)
    if (intervalo < 0) intervalo *= -1
    var prob = (1 / (Maximo - Minimo) * intervalo) * 100
    menosqdiv.innerHTML += `Probabilidade: ${prob.toFixed(2)}%`
}

function entre() {
    entrediv.innerHTML = ''
    var Maximo = document.getElementById("valorMax").value;
    var Minimo = document.getElementById('valorMin').value;
    var entre = document.getElementById('entre1').value;
    var ate = document.getElementById('entre2').value;
    var intervalo = entre - ate
    var prob = (1 / (Maximo - Minimo) * intervalo) * 100
    entrediv.innerHTML += `Probabilidade:${prob.toFixed(2)}%`
}