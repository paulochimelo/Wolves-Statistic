let lista = []


function selectionsort(lista. inicio = 0){
    if (inicio > lista.length - 1 ){
        return  //condição de saida
    }
    let pasmin = inicio + 1
    for(let i= pasmin + 1; i < lista.length; i++)
        if(Menor (lista.[pasmin] lista[i]) pasmin = i){

        }
        if(lista[pasmin]< lista[inicio])troca(lista[pasmin], lista[inicio]){
            selectionsort(vet, inicio + 1)
        }
}