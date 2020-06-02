

function qualitativa(){
    let tipodado = document.getElementById('tipdadosqualitativa').value
    let tipoquali = document.getElementById('qualitativa').value
    tablequalitativa.innerHTML = ""
    variavelquali.innerHTML=''

    if (tipodado == 'AMOSTRA'){
        if (tipoquali == 'DISCRETA'){
            qualitativaordinal()
        }else if (tipoquali == 'NOMINAL'){
            qualitativanominal()
        }
        }else if (tipodado == 'POPULAÇÃO'){
        if (tipoquali == 'DISCRETA'){
            console.log('34')
        }else if (tipoquali == 'NOMINAL'){
            console.log('64')
        }
}
}

function quantitativa(){
    let tipodados = document.getElementById('tipdadosquantitativa').value
    let tipoquanti = document.getElementById('quantitativa').value
    tablequantitativa.innerHTML = ""
    variavelquant.innerHTML=''
    

    if (tipodados == 'AMOSTRA'){
        if (tipoquanti == 'DISCRETA'){
            console.log('34')
        }else if (tipoquanti == 'NOMINAL'){
            quantitativacontinua()
        }
        }else if (tipodados == 'POPULAÇÃO'){
        if (tipoquanti == 'DISCRETA'){
            console.log('34')
        }else if (tipoquanti == 'NOMINAL'){
            console.log('64')
        }
    }
}

function ordemCrescente(a,b){
    return(a-b)	
}   
function qualitativaordinal(){
    let nomeVar = document.getElementById('variavelqualitativa').value; 
    tablequalitativa.innerHTML += `<tr> <td>${nomeVar}  </td><td>Frequência Simples</td> <td>Frequência Relativa</td><td>Frequência Acumulada</td><td>Frequência Acumulada Percentual</td></tr> `
    const dados = document.getElementById('valor').value; 
    const vetDiscreta = dados.toString().split(';'); 
    vetDiscreta.sort(ordemCrescente) 
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

    //fazer media moda mediana
    let ultimo = vetDiscreta[vetDiscreta.length - 1]
    console.log(ultimo)
    let ele1 = vetDiscreta[0]
    console.log(ele1)
    console.log(quantDados)
    console.log(acum)
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
    let factotPorc =0;
    let acumFacPorc = 0; 
    for(var chave in quantDados){ 
       fac+=quantDados[chave]
        facPorc = Math.round((quantDados[chave]/acum)*100)
        factotPorc = fac + acumFacPorc
        tablequalitativa.innerHTML+= `<td> ${chave}  <td> ${quantDados[chave]} <td>${Math.round((quantDados[chave]/acum)*100) } % <td> ${fac}<td> ${factotPorc} % <br> `
        acumFacPorc+=facPorc
    }
}



function quantitativacontinua(){
        let nomeVar = document.getElementById('variavelquantitativa').value;
        variavelquant.innerHTML+=nomeVar
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
        tablequantitativa.innerHTML+=`<td>${valorInicial}<td>|----<td>${valorFinal}<td>` 
        var valorInicial = valorFinal
        }
    }


function Crescente(a,b){
    return(a-b)
}

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