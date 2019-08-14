var itensVendidos = [0, 0, 0, 0, 0]; //Array que guarda a quantidade de itens vendidos para cada posição

$(document).ready(function(){
    $.getJSON('https://eventsync.portaltecsinapse.com.br/public/recrutamento/input?email=felipe.lira.oliveira@gamil.com', function(itens) {
        for (var i = 0; i < itens.length; i++) {
            if(itens[i].dia.match(/[\d*][/][1][2][/][\d*]/) != null) {
                var temp = parseInt(itens[i].item.match(/\d/));
                itensVendidos[temp - 1] += parseInt(itens[i].quantidade);
            }
        }
        console.log(itensVendidos);
    });
});
    