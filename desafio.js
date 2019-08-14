$(document).ready(function(){
    $.getJSON('https://eventsync.portaltecsinapse.com.br/public/recrutamento/input?email=felipe.lira.oliveira@gamil.com', function(itens) {
        for(var i = 0; i < itens.length; i++) {
            if (itens[i].dia.match(/[\d*][/][1][2][/][\d*]/) != null) {
                console.log(itens[i].dia);    
            }
        }
    });
});
    