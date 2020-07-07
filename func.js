







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

    //console.log(sucesso)
    //console.log(fracasso)
    //console.log(amostra)
    //console.log(evento)

    let aux3 = evento
    let aux4 = sucesso
    let = suce = 1

    while (aux3 > 0){
        suce = suce * aux4
        aux3 = aux3 - 1
    }
    console.log(suce)

    let k = amostra - evento 
    let aux5 = k
    let aux1 = 1
    while (k > 0){
        aux1 = aux1 * k
        k = k - 1
       // console.log(k)
    }

    console.log(aux1)

    let aux2 = 1

    while (evento > 0){
        aux2 = aux2 * evento
        evento = evento - 1
    }
    console.log(aux2)

    let n = 1

    while (amostra > 0){
        n = n * amostra
        amostra = amostra - 1
        //console.log(amostra)
    }

    console.log(n)
    let fraca = 1
    while (aux5 > 0){
        fraca = fraca * fracasso
        aux5 = aux5 - 1
    }

    console.log(fraca)
    let result = n /(aux1 * aux2) * suce * fraca * 100
    result = result.toFixed(2)
    console.log(result)
    let fraq = 100 - result
    fraq = fraq.toFixed(2)

    probnomi.innerHTML = ('Sucesso = ' + result + ' Fracasso : ' + fraq)
    
}

function testa(){
    console.log('s')
  }

  


  function test(){
    let tipodado = document.getElementById('tipdadosqualitativa').value
    let tipoquali = document.getElementById('qualitativa').value
    tablequalitativa.innerHTML = ""
    variavelquali.innerHTML=''
    tcqualitativa.innerHTML = ''

    if (tipodado == 'AMOSTRA'){
        if (tipoquali == 'ORDINAL'){
            qualitativaordinal()
        }else if (tipoquali == 'NOMINAL'){
            qualitativanominal()
        }
        }else if (tipodado == 'POPULAÇÃO'){
        if (tipoquali == 'DISCRETA'){
            qualiordpopulacao()
        }else if (tipoquali == 'NOMINAL'){
            qualinompopulacao()
        }
}
}




function qualitativaordinal(){
    let nomeVar = document.getElementById('variavelqualitativa').value; 
    tablequalitativa.innerHTML += `<tr> <td>${nomeVar}  </td><td>Frequência Simples</td> <td>Frequência Relativa</td><td>Frequência Acumulada</td><td>Frequência Acumulada Percentual</td></tr> `
    let dados = document.getElementById('valor').value; 
    let vetDiscreta = dados.toString().split(';'); 
    vetDiscreta.sort() 
    let quantDados ={} ; 
    let acum =0 ; 
    variavelquali.innerHTML+="Variavel Qualitativa Ordinal"
        for(let i = 0 ; i<vetDiscreta.length;i++){ 
            if(quantDados [vetDiscreta[i] ]){
                quantDados[vetDiscreta[i]]+=1
                acum++

            }else{
                quantDados[vetDiscreta[i]]=1
                acum++
 
            }			
    }
let fac = 0
let fap = 0
let fapcont = 0
    for(var chave in quantDados){ 
        fac+=quantDados[chave]
        fapcont = Math.round((quantDados[chave]/acum)*100)
        fap += fapcont 
        tablequalitativa.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${Math.round((quantDados[chave]/acum)*100) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> ${fac} <td> ${fap} % <br> ` 
          
    }
//Medida separatriz
    mdseparatriz.innerHTML = ''
    let porce = document.getElementById('porcentagem').value
    console.log(porce)
    let pmax =  document.getElementById('porcentagem').max
    console.log(pmax)
    let porc = (100/pmax)*porce
    console.log(porc)
    let itemvet = Math.round((acum/100)*porc)
    console.log(itemvet)
    let separatrizes = vetDiscreta[itemvet-1]
    console.log(separatrizes)
    let returnid = ''
    if (pmax == 4){
      returnid = "Q"
    }else if (pmax == 5){
      returnid = "K"
    }else if (pmax == 10){
      returnid = "D"
    }else if (pmax == 100){
      returnid = "P"
    }
    mdseparatriz.innerHTML = `${returnid}${porce} = ${separatrizes}`
    
     //fazer media moda mediana
     let moda = 0
     let ocorrenciasMaior = -1;
 
     let contagem = 1;
     for ( let i = 0 ; i <= vetDiscreta.length ; i++ ) {
     if ( i < vetDiscreta.length && vetDiscreta[i] == vetDiscreta[i-contagem] )
         contagem++;
     
     else if ( contagem > ocorrenciasMaior ) {
         moda = vetDiscreta[i-1];
         ocorrenciasMaior = contagem;
     }
     }
     if (moda == undefined){
        moda = String("Amodal")
     }

    let ultimo = vetDiscreta[vetDiscreta.length - 1]
     console.log(ultimo)
     console.log(ultimo);
     let ele1 = vetDiscreta[0]
     console.log(ele1)
     console.log(vetDiscreta)
     console.log(acum)
     let m = Math.round(acum/2)
     let mediana = null
     if (acum & 1){
        console.log("Impar")
        console.log(m)
        console.log("Media: Não Possui")
        mediana = vetDiscreta[m-1]
     } else {
         console.log("Par")
         console.log(m)
         mediana = (vetDiscreta[m-1] +","+ vetDiscreta[m])
     }
    console.log(`Moda : ${moda}`)
    tcqualitativa.innerHTML = ( `<tr> Mediana:${mediana} ||</tr> Moda: ${moda}`)
    // GRAFICO
Highcharts.chart('graficoqualitativa', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Gráfico teste'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Variaveis',
      colorByPoint: true,
        data: [{
            name: 'teste',
            y: 10},{
                name: 'qualitativa ordinal',
                y: 90
        }]
    }]
  });
 }


function qualitativanominal(){
    let nomeVar = document.getElementById('variavelqualitativa').value;
    tablequalitativa.innerHTML +=`<tr> <td> ${nomeVar}      </td><td>Frequência Simples</td><td>Frequência Relativa</td><td>Frequência Acumulada</td><td>Frequência Acumulada Percentual</td></tr> `
    var dados_nominal = document.getElementById('valor').value;
    let vetNominal = dados_nominal.toString().split(';');
    vetNominal.sort() 
     let quantDados ={} ; 
     let acum =0 ; 
     variavelquali.innerHTML+= "Variavel Qualitativa Nominal"
        for(let i = 0 ; i<vetNominal.length;i++){ 
            if(quantDados [vetNominal[i] ]){
                quantDados[vetNominal[i]]+=1
                acum++
            }else{
                quantDados[vetNominal[i]]=1
                acum++
            }			
    }
    let fac =0;
    let acumFac = 0;
    let fap = 0
    let fapcont = 0
    for(var chave in quantDados){ 
       fac+=quantDados[chave]
       fapcont = Math.round((quantDados[chave]/acum)*100)
       fap += fapcont
        tablequalitativa.innerHTML+= `<td> ${chave}  <td> ${quantDados[chave]} <td>${Math.round((quantDados[chave]/acum)*100) } % <td> ${fac}<td> ${fap} % <br> `
    }
    //medida separatriz
    mdseparatriz.innerHTML = ''
    let porce = document.getElementById('porcentagem').value
    console.log(porce)
    let pmax =  document.getElementById('porcentagem').max
    console.log(pmax)
    let porc = (100/pmax)*porce
    console.log(porc)
    let itemvet = Math.round((acum/100)*porc)
    console.log(itemvet)
    let separatrizes = vetNominal[itemvet-1]
    console.log(separatrizes)
    let returnid = ''
    if (pmax == 4){
      returnid = "Q"
    }else if (pmax == 5){
      returnid = "K"
    }else if (pmax == 10){
      returnid = "D"
    }else if (pmax == 100){
      returnid = "P"
    }
    mdseparatriz.innerHTML = `${returnid}${porce} = ${separatrizes}`
     //fazer media moda mediana
     let moda = null
     let ocorrenciasMaior = -1;
 
     let contagem = 1;
     for ( let i = 0 ; i <= vetNominal.length ; i++ ) {
     if ( i < vetNominal.length && vetNominal[i] == vetNominal[i-contagem] )
         contagem++;
     
     else if ( contagem > ocorrenciasMaior ) {
         moda = vetNominal[i-1];
         ocorrenciasMaior = contagem;
     }
     }
     if (moda == undefined){
        moda = String("Amodal")
     }
     let ultimo = vetNominal[vetNominal.length - 1]
     console.log(ultimo)
     console.log(ultimo);
     let ele1 = vetNominal[0]
     console.log(ele1)
     console.log(vetNominal)
     console.log(acum)
     let mediana = null
     let m = Math.round(acum/2)
     if (acum & 1){
        console.log("Impar")
        console.log(m)
        console.log("Media: Não Possui")
        mediana = vetNominal[m-1]
     } else {
         console.log("Par")
         console.log(m)
         mediana = (vetNominal[m-1] +","+ vetNominal[m]) 
     }
     console.log(`Moda : ${moda}`)
     tcqualitativa.innerHTML = (`Mediana:${mediana} ||</tr> Moda: ${moda}`)

// GRAFICO
Highcharts.chart('graficoqualitativa', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Gráfico teste'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Variaveis',
      colorByPoint: true,
        data: [{
            name: 'teste',
            y: 10},{
                name: 'qualitativa nominal',
                y: 90
        }]
    }]
  });

    }



    
function qualiordpopulacao(){
    let nomeVar = document.getElementById('variavelqualitativa').value; 
    tablequalitativa.innerHTML += `<tr> <td>${nomeVar}  </td><td>Frequência Simples</td> <td>Frequência Relativa</td><td>Frequência Acumulada</td><td>Frequência Acumulada Percentual</td></tr> `
    const dados = document.getElementById('valor').value; 
    const vetDiscreta = dados.toString().split(';'); 
    vetDiscreta.sort() 
    let quantDados ={} ; 
    let acum =0 ; 
    variavelquali.innerHTML+="Variavel Qualitativa Ordinal População"
        for(let i = 0 ; i<vetDiscreta.length;i++){ 
            if(quantDados [vetDiscreta[i] ]){
                quantDados[vetDiscreta[i]]+=1
                acum++
            }else{
                quantDados[vetDiscreta[i]]=1
                acum++
            }			
    }
let fac = 0
let fap = 0
let fapcont = 0
    for(var chave in quantDados){ 
        fac+=quantDados[chave]
        fapcont = Math.round((quantDados[chave]/acum)*100)
        fap += fapcont
        tablequalitativa.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${Math.round((quantDados[chave]/acum)*100) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> ${fac} <td> ${fap} % <br> `      
    }
    //medidas separatrizes
    mdseparatriz.innerHTML = ''
    let porce = document.getElementById('porcentagem').value
    console.log(porce)
    let pmax =  document.getElementById('porcentagem').max
    console.log(pmax)
    let porc = (100/pmax)*porce
    console.log(porc)
    let itemvet = Math.round((acum/100)*porc)
    console.log(itemvet)
    let separatrizes = vetDiscreta[itemvet-1]
    console.log(separatrizes)
    let returnid = ''
    if (pmax == 4){
      returnid = "Q"
    }else if (pmax == 5){
      returnid = "K"
    }else if (pmax == 10){
      returnid = "D"
    }else if (pmax == 100){
      returnid = "P"
    }
    mdseparatriz.innerHTML = `${returnid}${porce} = ${separatrizes}`
    //fazer media moda mediana
    let moda = 0
    let ocorrenciasMaior = -1;

    let contagem = 1;
    for ( let i = 0 ; i <= vetDiscreta.length ; i++ ) {
    if ( i < vetDiscreta.length && vetDiscreta[i] == vetDiscreta[i-contagem] )
        contagem++;
    
    else if ( contagem > ocorrenciasMaior ) {
        moda = vetDiscreta[i-1];
        ocorrenciasMaior = contagem;
    }
    }
    if (moda == undefined){
       moda = String("Amodal")
    }

   let ultimo = vetDiscreta[vetDiscreta.length - 1]
    console.log(ultimo)
    console.log(ultimo);
    let ele1 = vetDiscreta[0]
    console.log(ele1)
    console.log(vetDiscreta)
    console.log(acum)
    let m = Math.round(acum/2)
    let mediana = null
    if (acum & 1){
       console.log("Impar")
       console.log(m)
       console.log("Media: Não Possui")
       mediana = vetDiscreta[m-1]
    } else {
        console.log("Par")
        console.log(m)
        mediana = (vetDiscreta[m-1] +","+ vetDiscreta[m])
    }
   console.log(`Moda : ${moda}`)
   tcqualitativa.innerHTML = ( `<tr> Mediana:${mediana} ||</tr> Moda: ${moda}`)
}


function qualinompopulacao(){
    let nomeVar = document.getElementById('variavelqualitativa').value; 
    tablequalitativa.innerHTML += `<tr> <td>${nomeVar}  </td><td>Frequência Simples</td> <td>Frequência Relativa</td><td>Frequência Acumulada</td><td>Frequência Acumulada Percentual</td></tr> `
    const dados = document.getElementById('valor').value; 
    const vetDiscreta = dados.toString().split(';'); 
    vetDiscreta.sort(ordemCrescente) 
    let quantDados ={} ; 
    let acum =0 ; 
    variavelquali.innerHTML+="Variavel Qualitativa Nominal População"
        for(let i = 0 ; i<vetDiscreta.length;i++){ 
            if(quantDados [vetDiscreta[i] ]){
                quantDados[vetDiscreta[i]]+=1
                acum++
            }else{
                quantDados[vetDiscreta[i]]=1
                acum++
            }			
    }
let fac = 0
let fap = 0
let fapcont = 0
    for(var chave in quantDados){ 
        fac+=quantDados[chave]
        fapcont = Math.round((quantDados[chave]/acum)*100)
        fap += fapcont
        tablequalitativa.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${Math.round((quantDados[chave]/acum)*100) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> ${fac} <td> ${fap} % <br> `      
    }
    //medida separatriz
    mdseparatriz.innerHTML = ''
    let porce = document.getElementById('porcentagem').value
    console.log(porce)
    let pmax =  document.getElementById('porcentagem').max
    console.log(pmax)
    let porc = (100/pmax)*porce
    console.log(porc)
    let itemvet = Math.round((acum/100)*porc)
    console.log(itemvet)
    let separatrizes = vetNominal[itemvet-1]
    console.log(separatrizes)
    let returnid = ''
    if (pmax == 4){
      returnid = "Q"
    }else if (pmax == 5){
      returnid = "K"
    }else if (pmax == 10){
      returnid = "D"
    }else if (pmax == 100){
      returnid = "P"
    }
    mdseparatriz.innerHTML = `${returnid}${porce} = ${separatrizes}`
    //fazer media moda mediana
    let moda = null
    let ocorrenciasMaior = -1;

    let contagem = 1;
    for ( let i = 0 ; i <= vetNominal.length ; i++ ) {
    if ( i < vetNominal.length && vetNominal[i] == vetNominal[i-contagem] )
        contagem++;
    
    else if ( contagem > ocorrenciasMaior ) {
        moda = vetNominal[i-1];
        ocorrenciasMaior = contagem;
    }
    }
    if (moda == undefined){
        moda = String("Amodal")
     }
    let ultimo = vetNominal[vetNominal.length - 1]
    console.log(ultimo)
    console.log(ultimo);
    let ele1 = vetNominal[0]
    console.log(ele1)
    console.log(vetNominal)
    console.log(acum)
    let mediana = null
    let m = Math.round(acum/2)
    if (acum & 1){
       console.log("Impar")
       console.log(m)
       console.log("Media: Não Possui")
       mediana = vetNominal[m-1]
    } else {
        console.log("Par")
        console.log(m)
        mediana = (vetNominal[m-1] +","+ vetNominal[m]) 
    }
    console.log(`Moda : ${moda}`)
    tendenciacentralqualitativa.innerHTML = (`Mediana:${mediana} ||</tr> Moda: ${moda}`)




}

function medidaseparatiz(){
    let opmax = document.getElementById('medidaseparatizes').value
    porcentagem.max = opmax
    porcentagem.value = ''
    console.log("true")
    let opmaxm = document.getElementById('medidaseparatizesm').value
    console.log(opmaxm)
    porcentagemm.max = opmaxm
    porcentagemm.value = ''
  }