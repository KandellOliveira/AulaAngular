interface IAnimal{
    recuperarNome() : string;
    nome: string;
}

class Animais implements IAnimal{

    recuperarNome(): string {
        return this.nome;
    }
    nome: string;

    
    constructor(nome: string) {
        this.nome = nome;
    }
}

let animais = new Animais("Gato");
console.log(animais.recuperarNome());