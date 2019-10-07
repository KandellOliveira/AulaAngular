class Generics<T>{
    public nome: T;

    constructor(nome: T) {
        this.nome = nome;
    }

    recuperarNome(): T {
        return this.nome;
    }

    recuperarTipo(): string {
        return typeof(this.nome);
    }
}

let generico = new Generics<string>('Hello World');
console.log(generico.recuperarNome());
console.log(generico.recuperarTipo());

let generico1 = new Generics<number>(1);
console.log(generico1.recuperarNome());
console.log(generico1.recuperarTipo());

let generico2 = new Generics<number>(1);
console.log(generico2.recuperarNome());
console.log(generico2.recuperarTipo());