function calcularDesconto() {
    //
    let valorproduto = document.getElementById('preco').value
    // Variável que contém o valor do produto com desconto de 20% (0.2)
    let resultado = valorproduto - (valorproduto * 0.2)
    let desconto = valorproduto*0.2

    console.log(resultado)
// Transforma para decimal e com as duas casas decimais, ficando no formato de moeda.
    let resultadoFormatado = parsefloat(resultado).tofixed(2);


// Exibe o texto com o valor formatado para Reais (R$)
let textoresultado= `O valor do desconto de 20% do produto é: R$ ${resultadoFormatado}`;
document.getElementsByTagName('h3')[0].innerHTML = textoresultado

}