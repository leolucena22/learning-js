function calcularIMC() {
  // Captura os valores de peso e altura dos inputs
  const peso = parseFloat(document.querySelector('#peso').value)
  const altura = parseFloat(document.querySelector('#altura').value)

  console.log(peso, altura)

  // Verifica se os valores são válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.')
    return
  }

  // Calcula o IMC
  const imc = peso / (altura * altura)

  const resultado = document.querySelector('.resultado')
  resultado.classList.remove('disable')
  resultado.textContent = `IMC = ${imc.toFixed(2)}`

  // Adiciona categorias de IMC
  let categoria = ''
  if (imc < 18.5) {
    categoria = 'Abaixo do peso'
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = 'Peso normal'
  } else if (imc >= 25 && imc < 29.9) {
    categoria = 'Sobrepeso'
  } else {
    categoria = 'Obesidade'
  }

  resultado.textContent += ` (${categoria})`
}

function limparCampos() {
  // Limpa os inputs de peso e altura
  document.querySelector('#peso').value = ''
  document.querySelector('#altura').value = ''

  // Oculta o resultado
  const resultado = document.querySelector('.resultado')
  resultado.classList.add('disable')
  resultado.textContent = ''
}
