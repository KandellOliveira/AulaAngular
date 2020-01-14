var Animais = /** @class */ (function () {
    function Animais(nome) {
        this.nome = nome;
    }
    Animais.prototype.recuperarNome = function () {
        return this.nome;
    };
    return Animais;
}());
var animais = new Animais("Gato");
console.log(animais.recuperarNome());
