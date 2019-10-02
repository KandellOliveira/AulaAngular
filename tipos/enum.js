//Enum sem declarar os valores das contantes
var cor;
(function (cor) {
    cor[cor["Amarelo"] = 0] = "Amarelo";
    cor[cor["Vermelho"] = 1] = "Vermelho";
    cor[cor["Azul"] = 2] = "Azul";
})(cor || (cor = {}));
console.log(cor.Amarelo);
//Enum com declarações dos valores
var corExtra;
(function (corExtra) {
    corExtra[corExtra["Amarelo"] = 1] = "Amarelo";
    corExtra[corExtra["Vermelho"] = 2] = "Vermelho";
    corExtra[corExtra["Azul"] = 3] = "Azul";
})(corExtra || (corExtra = {}));
console.log(corExtra.Amarelo);
console.log(corExtra[1]);
