

function qualitativa(){
    let tipodado = document.getElementById('tipdadosqualitativa').value
    let tipoquali = document.getElementById('qualitativa').value
    tablequalitativa.innerHTML = ""
    variavelquali.innerHTML=''

    if (tipodado == 'AMOSTRA'){
        if (tipoquali == 'DISCRETA'){
            qualitativadiscreta()
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
function qualitativadiscreta(){
    tablequalitativa.innerHTML +="<tr> <td>VARIAVEL</td><td>FI</td><td>FR%   </td><td>FAC   </td><td>FAC%  </td></tr> "
    var nomeVar = document.getElementById('variavelquali').value; 
    var dados = document.getElementById('valor').value; 
    let vetDiscreta = dados.toString().split(';'); 
    vetDiscreta.sort(ordemCrescente) 
    var quantDados ={} ; 
    var acum =0 ; 
    variavelquali.innerHTML+=nomeVar
        for(let i = 0 ; i<vetDiscreta.length;i++){ 
            if(quantDados [vetDiscreta[i] ]){
                quantDados[vetDiscreta[i]]+=1
                acum++
            }else{
                quantDados[vetDiscreta[i]]=1
                acum++
            }			
    }
    for(var chave in quantDados){ 
        tablequalitativa.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${Math.round((quantDados[chave]/acum)*100) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> <br> `      
}
}
function qualitativanominal(){
    tablequalitativa.innerHTML +="<tr> <td>VARIAVEL</td><td>FI</td><td>FR%   </td><td>FAC   </td><td>FAC%  </td></tr> "
    var nomeVar = document.getElementById('variavelqualitativa').value;
    var dados_nominal = document.getElementById('valor').value;
    let vetNominal = dados_nominal.toString().split(';');
    vetNominal.sort() 
     var quantDados ={} ; 
     var acum =0 ; 
     variavelquali.innerHTML+=nomeVar
        for(let i = 0 ; i<vetNominal.length;i++){ 
            if(quantDados [vetNominal[i] ]){
                quantDados[vetNominal[i]]+=1
                acum++
            }else{
                quantDados[vetNominal[i]]=1
                acum++
            }			
    }
    var fac =0;
    var acumFac = 0;
    var factotPorc =0;
    var acumFacPorc = 0; 
    for(var chave in quantDados){ 
       fac+=quantDados[chave]
        facPorc = Math.round((quantDados[chave]/acum)*100)
        factotPorc = fac + acumFacPorc
        tablequalitativa.innerHTML+= `<td> ${chave}  <td> ${quantDados[chave]} <td>${Math.round((quantDados[chave]/acum)*100) } % <td> ${fac}<td> ${factotPorc}  <br> `
        acumFacPorc+=facPorc
    }
}



function quantitativacontinua(){
        var nomeVar = document.getElementById('variavelquant').value;
        variavelquant.innerHTML+=nomeVar
		var dados_continua = document.getElementById('valores').value;
		let vetDiscreta = dados_continua.toString().split(';');
		vetDiscreta.sort(ordemCrescente)
        var n = vetDiscreta.length;
        var xmin=vetDiscreta[0];
        var xmax=vetDiscreta[n-1];
        var k =Math.sqrt(n);
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
        tablequantitativa.innerHTML+=`<td>${valorInicial}<td>-------------<td>${valorFinal}<td>` 
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