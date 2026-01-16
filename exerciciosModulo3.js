/*
Manipulação de Array - parte 1
a. Crie um array chamado produtos contendo três nomes de produtos.
b. Acesse e imprima o segundo produto.
c. Modifique o terceiro produto para "Notebook" e imprima o array atualizado.
*/

let produtos = ['mouse', 'copo', 'celular'];

console.log(produtos[1]);
produtos[2]= 'notebook';
console.log(produtos[2]);

/*
Manipulação de Array - parte 2
a. Crie um array chamado clientes contendo três nomes de clientes.
b. Adicione um quarto cliente ao array.
c. Remova o último cliente e imprima o array atualizado.
*/
let clientes = ['Gilmar', 'Bruno', 'Marcinho']

clientes[clientes.length] = 'Rayan'
console.log(clientes);
clientes.length = clientes.length - 1;
console.log(clientes);

/*
Manipulação de Objetos - parte 1
a. Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
b. Acesse e imprima o nome do produto.
c. Modifique o preço do produto e imprima o objeto atualizado.
*/

let produto = {
    nome: 'Alcatra',
    preco: 20.0,
    quantidade: 5,
}

console.log(produto.nome)
produto.preco = 54;
console.log(produto)


/* Manipulação de Objetos - parte 2
a. Crie um objeto chamado venda com as propriedades cliente, produto e valor.
b. Adicione a propriedade data ao objeto.
c. Remova a propriedade produto e imprima o objeto atualizado
 */

let vendas = {
    cliente: 'Marcos',
    produto: 'Pack Heineken', 
    valor: 1200,

}
vendas.data = '16-07-2024';
console.log(vendas);
delete vendas.produto;
console.log(vendas);



/*
Manipulação dos Tipos Referências
a. Crie um array estoque e atribua seus valores para um novo array novoEstoque.
b. Modifique um elemento de novoEstoque e mostre que estoque não foi alterado.
c. Crie um objeto funcionario e atribua seus valores para um novo objeto
novoFuncionario.
d. Modifique uma propriedade de novoFuncionario e mostre que funcionario não foi
alterado.
*/

let estoque = ['copo', 'chinelo', 'parede']
let novoEstoque = [...estoque];
novoEstoque[novoEstoque.length] = 'cueca';
console.log(novoEstoque);
console.log(estoque);


funcionario = {
    nome: 'Claudio'
}

novoFuncionario = {...funcionario}

novoFuncionario.idade = 17;
console.log(funcionario);
console.log(novoFuncionario);