function contadorC() {
    var entraDado = window.document.querySelector('input#entraDado')
    var qtdContagem = Number(entraDado.value)
    cont = 0
    if (qtdContagem == '') {
        alert('Por favor, insira um valor')
    } else {
        while (cont <= qtdContagem) {
            numberCont.innerText = `${cont} Valor: ${qtdContagem}`
            numberContf.innerText = `${cont*10} Valor: ${qtdContagem}`
            cont ++
            
        }
        
        
}
}
function utilizarFor() {
    var entraDado = window.document.querySelector('input#entraDado2')
    var qtdContagem = Number(entraDado.value)
    for (cont = 0; cont <= qtdContagem; cont++) {
        
        comFor.innerHTML = `${cont}`
        
    }
}

function comDo() {
    var entraDado = window.document.querySelector('input#entraDado3')
    var qtdContagem = Number(entraDado.value)
    
    do { 
        
        comDof.innerText = `Testando - ${qtdContagem} `
        
    }
    while (cont <= qtdContagem);
}