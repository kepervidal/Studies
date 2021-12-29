const saudacao = 'Opa' // Contexto Léxico 1

function exec (){
    const saudacao = 'Falaaaa'
    return saudacao
}

const cliente = {
    nome: 'jose',
    idade: 32,
    peso:90,
    endereco : {
        rua: 'Rua Baviera',
        numero: 103

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)