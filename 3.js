var frase = "Olá, mundo!";

for (var i = 0; i < 5; i++) {
    alert(frase);
}


var contador = 0;
while (contador < 5) {
    alert(frase);
    contador++;
}

setInterval(function() {
    alert(frase);
}, 1); 