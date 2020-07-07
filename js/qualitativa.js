function qualitativa(){

    alert("teste")

    let tipodado = document.getElementById('tipdadosqualitativa').value
    let tipoquali = document.getElementById('qualitativa').value
    tablequalitativa.innerHTML = ""
    variavelquali.innerHTML=''
    tcqualitativa.innerHTML = ''

    if (tipodado == 'AMOSTRA'){
        if (tipoquali == 'DISCRETA'){
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