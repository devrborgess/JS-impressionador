const { join } = require("node:path");

/* Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
remova o primeiro item e exiba o carrinho atualizado  */ 
newArray = ['Produto A', 'Produto B'];
console.log(newArray);
newArray.push('Produto C');
newArray.shift();
console.log(newArray);

/*Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
disponíveis.
*/
newArray = ['Produto X', 'Produto Y'];
newArray.push('Produto Z');
newArray2 = ['Produto A', 'Produto B'];

console.log(newArray2.concat(newArray));

/* Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
'Agenda' estão presentes no estoque.
 */

newArray = ['Caderno', 'Lápis', 'Estojo'];
console.log(newArray.includes('Lápis'));
console.log(newArray.includes('Agenda'))

/* 
Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
que 7.
*/
 newArray = [2, 5, 8, 1]; 
 console.log(newArray.some(x => x> 7));
 
/* Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
 */

newArray = [4, 6, 8, 2]
console.log(newArray.filter(x => x>3)) 