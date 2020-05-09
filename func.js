

function qualitativa(){
    let tipodado = document.getElementById('tipdadosqualitativa').value
    let tipoquali = document.getElementById('qualitativa').value
    

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
    

    if (tipodados == 'AMOSTRA'){
        if (tipoquanti == 'DISCRETA'){
            console.log('34')
        }else if (tipoquanti == 'NOMINAL'){
            qualitativanominal()
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
    let adcd = document.getElementById("valor").value;
    let listagem = adcd.toString().split(';');
    console.log(listagem)
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