// Curtir seu feed...
function clickButtonAll(){
    let object = document.querySelectorAll('._aamw > ._abl-  > ._abm0._abl_')
    for (const iterator of object) {
        iterator.click()
    }
}
// Rolar a tela automaticamente...    
function rolarTela(){
    let rolar = document.querySelectorAll('._aamw >._abl-')
    for (const iterator of rolar) {
        iterator.scrollIntoView()
    }
}
// Tempo de rolagem da tela...
const tempo = setInterval(()=>{
    clickButtonAll()
    rolarTela()
}, 10000)
// Função para parar de curtir...
tempo
clearInterval(tempo)