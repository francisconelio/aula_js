let pais = "Brasil";
console.log(pais);

// transformando para maiúscula
console.log(pais.toUpperCase());
//transformando para minúscula
console.log(pais.toLocaleLowerCase());

let frase = "Um país continental";
console.log(pais + " " + frase);
// Concatenando string utilizando o teamplate string, forma atualizada de concatenação
console.log(`${pais} ${frase}`)
console.log(`O ${pais} é um país continental`)
let frasecompleta = `O ${pais} é um país continental`
console.log(frasecompleta.replace(`continental`,`tropical`));
console.log(frasecompleta.length);
