var itensVendidos = [0, 0, 0, 0, 0]; //Array que guarda a quantidade de itens vendidos para cada posição
var itemMaisVendido = 1;
var quantidadeMaisVendida;
var totalMaisVendido = 0;
var string; //String para concatenar item (nº item)#(total em $)

//Manipulação da página em JQuery
$(document).ready(function(){
    //Requisição de leitura da url com arquivo JSON
    $.getJSON('https://eventsync.portaltecsinapse.com.br/public/recrutamento/input?email=felipe.lira.oliveira@gmail.com', function(itens) {
        for (var i = 0; i < itens.length; i++) {
            if (itens[i].dia.match(/[\d*][/][1][2][/][\d*]/) != null) { //RegEx pegar apenas os itens do mês de dezembro
                var temp = parseInt(itens[i].item.match(/\d/)); //
                itensVendidos[temp - 1] += parseInt(itens[i].quantidade);
            }
        }
        quantidadeMaisVendida = itensVendidos[0];
        
        //Ver qual o item mais vendido, automaticamente atribui ao anterior na ordem alfabética caso haja empate
        for (i = 1; i < itensVendidos.length; i++) {
            if (itensVendidos[i] > quantidadeMaisVendida) {
                itemMaisVendido = i + 1;
                quantidadeMaisVendida = itensVendidos[i];
            }
        }
        
        //Calcular o total do mais vendido
        for (i = 0; i < itens.length; i++) {
            if (itens[i].item.match(/\d/) == itemMaisVendido && itens[i].dia.match(/[\d*][/][1][2][/][\d*]/) != null) {
                totalMaisVendido += itens[i].total;
            }
        }
        totalMaisVendido = parseFloat(totalMaisVendido).toFixed(2); 
        string = "item " + (itemMaisVendido) + "#" + (totalMaisVendido);        
    });
});

//função para fazer o POST
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }  
    };
    xhttp.open("POST", "https://eventsync.portaltecsinapse.com.br/public/recrutamento/finalizar?email=felipe.lira.oliveira@gmail.com");
    xhttp.setRequestHeader("Content-Type", "text/plain");
    xhttp.send(string);
}
    