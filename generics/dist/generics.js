"use strict";
var Generics = /** @class */ (function () {
    function Generics(nome) {
        this.nome = nome;
    }
    Generics.prototype.recuperarNome = function () {
        return this.nome;
    };
    Generics.prototype.recuperarTipo = function () {
        return typeof (this.nome);
    };
    return Generics;
}());
var generico = new Generics('Hello World');
console.log(generico.recuperarNome());
console.log(generico.recuperarTipo());
var generico1 = new Generics(1);
console.log(generico1.recuperarNome());
console.log(generico1.recuperarTipo());
var generico2 = new Generics(1);
console.log(generico2.recuperarNome());
console.log(generico2.recuperarTipo());
