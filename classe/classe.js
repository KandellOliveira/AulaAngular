var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.recuperNome = function () {
        return this.nome;
    };
    return Animal;
}());
var nomeAnimal = "Cachorro";
var animal = new Animal(nomeAnimal);
console.log(animal.recuperNome());
