// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        longadouro: 'Rua ABC',
        numero: 1000
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { longadouro, numero, cep} } = pessoa
console.log(longadouro, numero, cep)
