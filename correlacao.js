function corelacao() {
    corelacao_results.innerHTML = ''

    var inputCorrelacao = document.getElementById('correlacao').value;
    var inputRegressao = document.getElementById('regressao').value;
    var Correlacao = inputCorrelacao.toString().split(';');
    var regressao = inputRegressao.toString().split(';');

    var x = 0; 
    var xy = 0; 
    var y = 0; 
    var xx = 0; 
    var yy = 0; 
    var valores = [];

    var n = Correlacao.length
    for (var i = 0; i < Correlacao.length; i++) {
        x += Number(Correlacao[i])
        y += Number(regressao[i])
        xy += Number(regressao[i] * Correlacao[i])
        xx += Number(Math.pow(Correlacao[i], 2))
        yy += Number(Math.pow(regressao[i], 2))
    }
    //CORRELACAO
    var dividendo = (n * xy) - (x * y)
    var divisor = (Math.sqrt((n * xx - (x * x))).toFixed(2) * Math.sqrt((n * yy - y * y)).toFixed(2)).toFixed(2)
    var r = parseFloat(((dividendo / divisor) * 100)).toFixed(2)


    //REGRESSAO
    var a = ((n * xy - x * y) / (n * xx - x * x))
    valores.push(a)
    var regressaoy = y / n
    var regressaox = x / n
    var b = (regressaoy - a * regressaox)
    valores.push(b)

    // r = parseFloat(r)
    a = parseFloat(a.toFixed(2))
    b = parseFloat(b.toFixed(2))

    // regressao_future.innerHTML=' '		
    corelacao_results.innerHTML += `Correlação: ${r} %  | y = ${a.toFixed(2)}X + ${b.toFixed(2)}`


    graficocorelaco(inputCorrelacao, inputRegressao, a, b)
    return valores

}

function regressaoX(valores) {
    var vet = corelacao(valores)
    console.log(vet)
    var a = (vet[0]).toFixed(4); var b = (vet[1]).toFixed(4)
    
    var x_future = document.getElementById('xfuturo').value;
     var y_future = document.getElementById('yfuturo').value;

    var future_y = (Number(a) * Number(x_future) + Number(b)).toFixed(2)


    document.getElementById('yfuturo').value = future_y;

}
function regressaoY(valores) {
    var vet = corelacao(valores)
    var a = (vet[0]).toFixed(4); var b = (vet[1]).toFixed(4)

    var x_future = document.getElementById('xfuturo').value;
    var y_future = document.getElementById('yfuturo').value;

    var future_x = ((Number(y_future) - Number(b)) / Number(a)).toFixed(2)

    document.getElementById('xfuturo').value = future_x;

}

function graficocorelaco(inputCorrelacao,inputRgressao,a=null,b=null) {

    var X = inputCorrelacao.split(';')
    var Y = inputRgressao.split(';')


    var ctx = document.getElementById("myChartgraficoCorrelacao").getContext('2d');

    var dados = [];

    for(var i=0; i<inputCorrelacao.length; i++){
        var dd = {
             x: Y[i],
            y: X[i]
        }
        dados.push(dd)
    }
    

    var reta = [{x:Math.min(...Y),y:(Math.min(...Y)-b)/a}, {x:Math.max(...Y),y:(Math.max(...Y)-b)/a}];
    

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            type: 'line',
            label: 'Projeção:',
            data: reta,
            fill: false,
            backgroundColor: "rgba(46,158,79, .7)",
            borderColor: "rgba(46,158,79, .7)",
            pointRadius: 0
          }, {
            type: 'bubble',
            label: 'Dados:',
            data: dados,
            backgroundColor: "rgba(76,78,80, .7)",
            borderColor: "transparent",
          }]
        },
        options: {
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom'
            }],
           
          }
        }
      });   
}