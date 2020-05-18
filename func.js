

function qualitativa(){
    let tipodado = document.getElementById('tipdadosqualitativa').value
    let tipoquali = document.getElementById('qualitativa').value
    tablequalitativa.innerHTML = ""
    variavelquali.innerHTML=''

    if (tipodado == 'AMOSTRA'){
        if (tipoquali == 'DISCRETA'){
            console.log('34')
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

function qualitativanominal(){
        tablequalitativa.innerHTML +="<tr> <td>VARIAVEL</td><td>FI</td><td>FR%   </td><td>FAC   </td><td>FAC%  </td></tr> "
		let nomevar = document.getElementById('variavelquali').value;
		let dados_nominal = document.getElementById('dados_nominal').value;
		let vetNominal = dados_nominal.toString().split(';');
		vetNominal.sort()
		 let quantDados ={} ;
		 let acum =0 ;
         variavelquali.innerHTML+=nomevar
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
		for(let chave in quantDados){ 
		   fac+=quantDados[chave]
            facPorc = Math.round((quantDados[chave]/acum)*100)
            factotPorc = fac + acumFacPorc
            tablequalitativa.innerHTML+= `<td> ${chave }  <td> ${quantDados[chave]} <td>${Math.round((quantDados[chave]/acum)*100) } % <td> ${fac}<td> ${factotPorc}  <br> `
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