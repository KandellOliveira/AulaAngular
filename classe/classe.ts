class Animal {
    public nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    recuperNome() : string {
        return this.nome;
    }
}


class Cachorro extends Animal{
    
    constructor(nome: string) {
        super(nome);
    }
}

/* const cachorro = new Cachorro("Bob");
const nomeCachorro = cachorro.recuperNome();
console.log(nomeCachorro); */

/* const nomeAnimal = "Cachorro";
let animal = new Animal(nomeAnimal);

console.log(animal.recuperNome()); */