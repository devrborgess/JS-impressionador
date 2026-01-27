let string = 'olá, mundo!';

console.log(string.toUpperCase()) // letras maiusculas 
console.log(string.toLowerCase()) // letras minusculas

//fatiamento
//slice(start, end)

console.log(string.slice(0,5))
console.log(string.slice(-6)) //de trás p frente

//substring (start, end) /retorna uma parte da string

console.log(string.substring(0,5)) //faz a contagem e extrai a parte da range -- n aceita numero negativo

//replace (search, replaceWith)

console.log(string.replace("o", "Javascript"))

console.log(string);


let texto = "maça, banana, laranja, uvas";   
let frutas = texto.split(",", 3);
console.log(frutas) 


texto = "maça banana      laranja            uvas";
frutas = texto.split(/\s+/);

//splice (indice, numerodeintesrremover, item1 ...)

frutas.splice(1,1);
console.log(frutas);


//////////////// exercicios
