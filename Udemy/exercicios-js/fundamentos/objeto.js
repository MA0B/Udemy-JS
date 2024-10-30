const prodCell = {}
prodCell.nome = 'Celular Ultra Mega'
prodCell.marca = 'Xiaomi'
prodCell.preco = ((Math.random() * 2000) + 1000).toFixed(2)
prodCell['Desconto Legal'] = 0.40 // evitar atributos com espaço
console.log(prodCell)

const prodCell2 = {
    nome: 'Pixel',
    preco: ((Math.random() * 2000) + 1000).toFixed(2) // Calcular o preço diretamente
}

console.log(`Preço do ${prodCell2.nome}: R$ ${prodCell2.preco}`);
