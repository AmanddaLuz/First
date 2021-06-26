var pessoa = {
    "nome": "joão",
    idade: 40,
    telefone: "(99) 99999-9999",
    temCarro: true,
    animaisDeEstimacao: [
        "totó",
        "Bob"
    ],
    pai: {
        nome: "Pedro",
        idade: 68
    }
};

//console.log(pessoa.idade);
//console.log(pessoa.nome);
//console.log(pessoa.animaisDeEstimacao);

//para adicionar item no array, use "push"

//pessoa.animaisDeEstimacao.push("Billy");
//console.log(pessoa);
//pessoa.nome = pessoa.nome + " Silva";
//console.log(pessoa);

// adicionar os dados em uma função
function salvarDadosPessoa(pessoa) {
    console.log(pessoa);
} 
/*agora é possível adicionar dados diretamente
no arquivo Json*/
pessoa.mae = "Maria";
//para a mae virar uma propriedade do elemento, use "{}"

pessoa.mae = {
    nome: "Maria",
    idade: 68

}

salvarDadosPessoa(pessoa);

console.log(JSON.stringify(pessoa));
