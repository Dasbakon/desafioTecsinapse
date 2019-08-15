var itensVendidos = [0, 0, 0, 0, 0]; //Array que guarda a quantidade de itens vendidos para cada posição
var itemMaisVendido = 0;
var quantidadeMaisVendida;
var totalMaisVendido = 0;

var request = new XMLHttpRequest();

$(document).ready(function(){
    $.getJSON('https://eventsync.portaltecsinapse.com.br/public/recrutamento/input?email=felipe.lira.oliveira@gmail.com', function(itens) {
        for (var i = 0; i < itens.length; i++) {
            if (itens[i].dia.match(/[\d*][/][1][2][/][\d*]/) != null) {
                var temp = parseInt(itens[i].item.match(/\d/));
                itensVendidos[temp - 1] += parseInt(itens[i].quantidade);
            }
        }
        
        quantidadeMaisVendida = itensVendidos[0];
        
        for (var i = 1; i < itensVendidos.length; i++) {
            if (itensVendidos[i] > quantidadeMaisVendida) {
                itemMaisVendido = i;
                quantidadeMaisVendida = itensVendidos[i];
            }
        }
        
        for (var i = 0; i < itensVendidos.length; i++) {
            totalMaisVendido += itens[i].total;
        }
        
        totalMaisVendido = parseFloat(totalMaisVendido).toFixed(2);
        
        console.log(itemMaisVendido + 1);
        console.log(quantidadeMaisVendida);
        console.log(totalMaisVendido);
        
        //$.post('https://eventsync.portaltecsinapse.com.br/public/recrutamento/finalizar?email=felipe.lira.oliveira@gamil.com', {})
    });
});
    