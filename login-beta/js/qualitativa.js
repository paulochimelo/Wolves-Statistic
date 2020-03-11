function qualitativacontinua(){

let adc = document.getElementById("valores").value;
let lista= adc.toString().split(';')//tira o ;
lista.sort(Crescente)//executa a função de organização

let xmax = lista[lista.length - 1];
let xmin = lista[0]
let at = xmax-xmin

let k = lista.length
k = (Math.sqrt(k))
let k2 = k.tofixed(0)

alert(k2,k)
}


function Crescente(a,b){
    return(a-b)	// organiza
}

