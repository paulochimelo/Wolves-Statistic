function quantitativa(){
    let tipodados = document.getElementById('tipdadosquantitativa').value
    let tipoquanti = document.getElementById('quantitativa').value
    tablequantitativa.innerHTML = ""
    variavelquant.innerHTML=''
    tendenciacentral.innerHTML=''
    

    if (tipodados == 'AMOSTRA'){
        if (tipoquanti == 'DISCRETA'){
            quantitativadiscreta()
        }else if (tipoquanti == 'NOMINAL'){
            quantitativacontinua()
        }
        }else if (tipodados == 'POPULAÇÃO'){
        if (tipoquanti == 'DISCRETA'){
            quantitativadiscretapop()
        }else if (tipoquanti == 'NOMINAL'){
            console.log('64')
        }
    }
}



function ordemCrescente(a,b){
    return(a-b)	
}   






function quantitativacontinua(){
    let nomeVar = document.getElementById('variavelquantitativa').value;
    tablequantitativa.innerHTML += `<tr> <td> ${nomeVar}   </td><td>Frequência Simples</td><td>Frequência Relativa</td><td>Frequência Acumulada</td><td>Frequência Acumulada Percentual</td></tr> `
    variavelquant.innerHTML+=('Variavel Quantitativa Continua')
    let dados_continua = document.getElementById('valores').value;
    let vetDiscreta = dados_continua.toString().split(';');
    vetDiscreta.sort(ordemCrescente)
    let n = vetDiscreta.length;
    let xmin=vetDiscreta[0];
    let xmax=vetDiscreta[n-1];
    let k =Math.sqrt(n);
    k=Math.floor(k)
    console.log(k)
    var ic = 0 ; 
    console.log(xmax+":"+xmin)
    console.log(k);
     var alt = xmax - xmin
     console.log(alt)
     ic = Math.floor(alt/k)
       console.log(alt+ "/"+k+" = "+ic)
    var valorInicial = Number(xmin);
    console.log(`Antes do while ${valorInicial}:${xmax}`)
    console.log(typeof ic + typeof valorInicial)
    while(valorInicial <= xmax){ 
    var valorFinal = 0 ;
    valorFinal = Number(valorInicial + ic)
    console.log(`${valorInicial}:${valorFinal}:${xmax}`)
    vetfi = []
    cont = 0
    fac = 0
    fr = 0
    fap = 0
    for ( let i = 0 ; i <= vetDiscreta.length ; i++ ) {
    if(vetDiscreta[i] < valorFinal & vetDiscreta[i] >= valorInicial){
      cont += 1
      vetfi += vetDiscreta[i]
      fr = Math.round((cont/xmax)*100)
    }
    if(vetDiscreta[i] < valorFinal){
      fac += 1 
      fap = Math.round((fac/xmax)*100)
  }}
    tablequantitativa.innerHTML+=`<td>${valorInicial} |----  ${valorFinal}<td> ${cont}  <td> ${fr} % <td> ${fac} <td> ${fap} % </td></td>` 
    var valorInicial = valorFinal
    }
      // GRAFICO
Highcharts.chart('graficoquantitativa', {
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
            name: 'quantitativa continua',
            y: 90
    }]
}]
});
}


function Crescente(a,b){
return(a-b)
}




function quantitativadiscreta(){
    let nomeVar = document.getElementById('variavelquantitativa').value
    tablequantitativa.innerHTML += `<tr> <td>${nomeVar}  </td><td>Frequência Simples</td> <td>Frequência Relativa</td><td>Frequência Acumulada</td><td>Frequência Acumulada Percentual</td></tr> `
    let dados = document.getElementById('valores').value; 
    let vetdiscreta = dados.toString().split(';'); 
    vetdiscreta.sort(ordemCrescente) 
    let quantDados ={} ; 
    let acum =0 ; 
    variavelquant.innerHTML+="Variavel Quantitativa Discreta"
        for(let i = 0 ; i<vetdiscreta.length;i++){ 
            if(quantDados [vetdiscreta[i] ]){
                quantDados[vetdiscreta[i]]+=1
                acum++
            }else{
                quantDados[vetdiscreta[i]]=1
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
        tablequantitativa.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${Math.round((quantDados[chave]/acum)*100) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> ${fac} <td> ${fap} % <br> `      
    }

  //Medida separatriz
  mdseparatrizm.innerHTML = ''
  let porce = document.getElementById('porcentagemm').value
  console.log(porce)
  let pmax =  document.getElementById('porcentagemm').max
  console.log(pmax)
  let porc = (100/pmax)*porce
  console.log(porc)
  let itemvet = Math.round((acum/100)*porc)
  console.log(itemvet)
  let separatrizes = vetdiscreta[itemvet-1]
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
  mdseparatrizm.innerHTML = `${returnid}${porce} = ${separatrizes}`

     //fazer media moda mediana
     let moda = null
     let ocorrenciasMaior = -1;
 
     let contagem = 1;
     for ( let i = 0 ; i <= vetdiscreta.length ; i++ ) {
     if ( i < vetdiscreta.length && vetdiscreta[i] == vetdiscreta[i-contagem] )
         contagem++;
     
     else if ( contagem > ocorrenciasMaior ) {
         moda = vetdiscreta[i-1];
         ocorrenciasMaior = contagem;
     }
     }
     if (moda == undefined){
        moda = String("Amodal")
     }
    let ultimo = vetdiscreta[vetdiscreta.length - 1]
     console.log(ultimo)
     console.log(ultimo);
     let ele1 = vetdiscreta[0]
     console.log(ele1)
     console.log(vetdiscreta)
     console.log(acum)
     let m = Math.round(acum/2)
     let mediana = null
     if (acum & 1){
        console.log("Impar")
        console.log(m)
        console.log("Media: Não Possui")
        mediana = vetdiscreta[m-1]
     } else {
         console.log("Par")
         console.log(m)
         mediana = (vetdiscreta[m-1] +","+ vetdiscreta[m])
     }
    console.log(`Moda : ${moda}`)
    tendenciacentral.innerHTML = ( `<tr> Mediana:${mediana} ||</tr> Moda: ${moda}`)  


       // GRAFICO
   Highcharts.chart('graficoquantitativa', {
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
                name: 'quantitativa discreta',
                y: 90
        }]
    }]
  });
}
     


function quantitativadiscretapop(){
    let nomeVar = document.getElementById('variavelquantitativa').value
    tablequantitativa.innerHTML += `<tr> <td>${nomeVar}  </td><td>Frequência Simples</td> <td>Frequência Relativa</td><td>Frequência Acumulada</td><td>Frequência Acumulada Percentual</td></tr> `
    let dados = document.getElementById('valores').value; 
    let vetdiscreta = dados.toString().split(';'); 
    vetdiscreta.sort(ordemCrescente) 
    let quantDados ={} ; 
    let acum =0 ; 
    variavelquant.innerHTML+="Variavel Quantitativa Discreta População"
        for(let i = 0 ; i<vetdiscreta.length;i++){ 
            if(quantDados [vetdiscreta[i] ]){
                quantDados[vetdiscreta[i]]+=1
                acum++
            }else{
                quantDados[vetdiscreta[i]]=1
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
        tablequantitativa.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${Math.round((quantDados[chave]/acum)*100) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> ${fac} <td> ${fap} % <br> `      
    }
         //fazer media moda mediana

         let somatoria = 0
         let acumulador = 0
         for (let b = 0; b<vetdiscreta.length; b++){
            somatoria += Number(vetdiscreta[b])
            acumulador++
         }
         let media = Number(somatoria/acumulador)
         let moda = 0
         let ocorrenciasMaior = -1;
     
         let contagem = 1;
         for ( let i = 0 ; i <= vetdiscreta.length ; i++ ) {
         if ( i < vetdiscreta.length && vetdiscreta[i] == vetdiscreta[i-contagem] )
             contagem++;
         
         else if ( contagem > ocorrenciasMaior ) {
             moda = vetdiscreta[i-1];
             ocorrenciasMaior = contagem;
         }
         
         }
         if (moda == undefined){
            moda = String("Amodal")
         }
         let ultimo = vetdiscreta[vetdiscreta.length - 1]
         console.log(ultimo)
         console.log(ultimo);
         let ele1 = vetdiscreta[0]
         console.log(ele1)
         console.log(vetdiscreta)
         console.log(acum)
         console.log("teste")
         let m = Math.round(acum/2)
         let mediana = null
         if (acum & 1){
            console.log("Impar")
            console.log(m)
            console.log("Media: ")
            mediana = vetdiscreta[m-1]
         } else {
            console.log("Par")
            console.log(m)
            let m1 = Number(vetdiscreta[m-1])
            let m2 = Number(vetdiscreta[m])
            mediana = Number(m1+m2) /2
         }
         console.log(`Moda: ${moda}`)
         console.log(`Média : ${media}`)
         tendenciacentral.innerHTML = ( `<tr>Média : ${media} <tr>|| Mediana:${mediana} ||</tr> Moda: ${moda}`)
}