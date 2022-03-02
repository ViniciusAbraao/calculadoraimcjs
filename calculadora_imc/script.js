
const calcular = document.getElementById('calcular')

function imc() {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')

    if (nome != '' && peso != '' && altura != '') {

        const calcIMC = (peso / (altura * altura)).toFixed(2)

        let condicao = ''

        if (calcIMC < 18.5) {
            condicao = 'Abaixo do Peso'
        } else if (calcIMC < 25) {
            condicao = 'Peso Normal'
        } else if (calcIMC < 30) {
            condicao = 'Sobrepeso'
        } else if (calcIMC < 35) {
            condicao = 'Obesidade'
        } else if (calcIMC < 40) {
            condicao = 'Obesidade Morbida'
        }

        resultado.textContent = `${nome} seu IMC é ${calcIMC} e sua condição é ${condicao}`

    } else {
        resultado.textContent = "Preencha os Campos!"
    }

}

calcular.addEventListener('click', imc)
