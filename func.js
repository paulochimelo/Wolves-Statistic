function qualitativa(){
    let tipodado = document.getElementById('tipdadosqualitativa').value
    let tipoquali = document.getElementById('qualitativa').value
    if (tipodado = 'AMOSTRA' && tipoquali = 'DISCRETA'){
        Console.LOG("SIM")
    }
      

    console.log(tipodado + tipoquali)
}

function qualitativanominal(){
    let adcd = document.getElementById("valor").value;
    let listagem = adcd.toString().split(';');
    alert(listagem)
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

    alert(k2,k)
    alert(lista)
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





 