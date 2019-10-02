
//Primeira aula tipos básicos
let verdadeiro: boolean; //false ou true
let numero: number;//qualquer tipo numerico
let vstring: string; //cadeia de caracteres
let qualquer: any;// qualquer

numero = 1;
vstring = 'Curso';

qualquer = 1;
qualquer = 'Curso';

//Compilando o código typeScript para javaScript

let mostrarCurso = (nomeCurso: string, versao: number) => {
    let concatenar = nomeCurso + versao;

    console.log(concatenar);

}

let curso: string = 'Cursos Angular ';
let versao: number = 6;

mostrarCurso(curso, versao);

let numeros: number[] = [1,2,3];

let nomes: Array<string> = ['Angular', 'React', 'vue'];

numeros.forEach(element => {
    console.log(element)
});

for(let index = 0; index < nomes.length; index++){
    const element = nomes[index];
    console.log(element);
}

// Enum
