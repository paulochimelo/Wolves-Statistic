

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
            
        }
        }else if (tipodados == 'POPULAÇÃO'){
        if (tipoquanti == 'DISCRETA'){
            console.log('34')
        }else if (tipoquanti == 'NOMINAL'){
            console.log('64')
        }
    }
}


function qualitativadiscreta(){
    console.log('Teste')
}
function qualitativanominal(){
    tablequalitativa.innerHTML +="<tr> <td>VARIAVEL</td><td>FI</td><td>FR%   </td><td>FAC   </td><td>FAC%  </td></tr> "
    var nomeVar = document.getElementById('variavelqualitativa').value; //Coloca o nome da variavel
    var dados_nominal = document.getElementById('valor').value; //puxa os dados da pagina
    let vetNominal = dados_nominal.toString().split(';'); // separa os valores e insere no vetor
    vetNominal.sort() // deixa o vetor na ordem crescente/alfabetica
     var quantDados ={} ; //obj com informando a quantidade de cada elemento 
     var acum =0 ; // acumulador de elementos diferentes
    nomeVariavel.innerHTML+=nomeVar
        for(let i = 0 ; i<vetNominal.length;i++){ //metodo para alocar a quantidade de cada elemento
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
    for(var chave in quantDados){ // pega as variaveis
       fac+=quantDados[chave]
        facPorc = Math.round((quantDados[chave]/acum)*100)
        factotPorc = fac + acumFacPorc
        tablequalitativa.innerHTML+= `<td> ${chave /*Inserção de variavel na tabela*/}  <td> ${quantDados[chave]/*Insere a quantidade de repetições da variavel*/} <td>${Math.round((quantDados[chave]/acum)*100) /*Insere e calcula a porcentagem de vezes que o elemento foi inserido*/} % <td> ${fac}<td> ${factotPorc}  <br> `
        acumFacPorc+=facPorc
    }
}



function quantitativacontinua(){

    let adc = document.getElementById("valores").value;
    let lista= adc.toString().split(';')//tira o ;
    lista.sort(Crescente)//executa a função de organização

    let xmax = lista[lista.length - 1];
    let xmin = lista[0]
    let at = xmax-xmin

    let k = lista.length
    k = (Math.sqrt(k))
    let k2 =Math.floor(k)

    console.log(k2,k)
    console.log(lista)
    }


function Crescente(a,b){
    return(a-b)	// organiza
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