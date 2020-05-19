let num = document.querySelector('input#fnun')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#res')

let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }

}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''

    }else{
        window.alert('Valor invalido ou ja se encontra na lista !')
    }
    num.value = ''
    num.focus()
}

function processar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de processar !')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        var soma = 0, media = 0

        for(let aux in valores){
            soma = soma + valores[aux]
            

            if(valores[aux] > maior)
                maior = valores[aux]
            if(valores[aux] < menor)
                menor = valores[aux]

        }

        media = soma / tot
        

        

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Qnt Numeros cadastrados: ${tot}</p>`
        resultado.innerHTML += `<p>Maior valor: ${maior}</p>`
        resultado.innerHTML += `<p>Menor valor: ${menor}</p>`
        resultado.innerHTML += `<p>Soma: ${soma}</p>`
        resultado.innerHTML += `<p>Media: ${media.toFixed(2)}</p>`
    }
}