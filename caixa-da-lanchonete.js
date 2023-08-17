class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        //funcao test 
        function verificaExtra(itens) {
    let hasPrincipal = false;
    let hasExtraWithoutPrincipal = false;

    itens.forEach(item => {
        const [itemCodigo, quantidade] = item.split(',');

        if (itemCodigo === "cafe" || itemCodigo === "sanduiche") {
            hasPrincipal = true;
        } else if (itemCodigo === "chantily" || itemCodigo === "queijo") {
            if (!hasPrincipal) {
                hasExtraWithoutPrincipal = true;
            }
        }
    });
    return hasExtraWithoutPrincipal;
}
//formas de pagamento
const formasDePagamento = ['dinheiro','debito','credito'];
//principais
const cardapio = [
//principais
{ codigo: 'cafe', valor: 3.00 },
{ codigo: 'suco', valor: 6.20 },
{ codigo: 'sanduiche', valor: 6.50 },
{ codigo: 'salgado', valor: 7.25 },
//extras
{ codigo: 'chantily', valor: 1.50 },
{ codigo: 'queijo', valor: 2.00 },
//combos
{ codigo: 'combo1', valor: 9.50 },
{ codigo: 'combo2', valor: 7.50 },
];
if(verificaExtra(itens)){
    return("Item extra não pode ser pedido sem o principal");

}
if(!formasDePagamento.includes(metodoDePagamento)){
return "Forma de pagamento inválida!"
}
let valorTotal = 0;
let quantidadeInvalida = false;
let itemInvalido = false;



itens.forEach(item => {
const [itemCodigo, quantidade] = item.split(',');     
let qtdInt = parseInt(quantidade);
if(qtdInt == 0){
    quantidadeInvalida = true;
} 
const itemEncontrado = cardapio.some(item => item.codigo === itemCodigo); 
if(!itemEncontrado){
    itemInvalido = true;
}
const itemValor = cardapio.find(item => item.codigo === itemCodigo).valor; 
valorTotal += itemValor * qtdInt;
});
//--------------------//
if(quantidadeInvalida){
return "Quantidade inválida!";
}
if(itemInvalido){
return "Item inválido!";
}
if(itens.length === 0){
return "Não há itens no carrinho de compra!"
}


if (metodoDePagamento == 'dinheiro') {
valorTotal *= 0.95; 
} else if (metodoDePagamento == 'credito') {
valorTotal *= 1.03; 
}
function parseLocalNum(num) {
    return (num.replace(".", ","));
} 
valorTotal = valorTotal.toFixed(2);
valorTotal = parseLocalNum(valorTotal);
return `R$ ${valorTotal}`;
}
}

export { CaixaDaLanchonete };
