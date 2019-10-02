//Primeira aula tipos básicos
var verdadeiro; //false ou true
var numero; //qualquer tipo numerico
var vstring; //cadeia de caracteres
var qualquer; // qualquer
numero = 1;
vstring = 'Curso';
qualquer = 1;
qualquer = 'Curso';
//Compilando o código typeScript para javaScript
var mostrarCurso = function (nomeCurso, versao) {
    var concatenar = nomeCurso + versao;
    console.log(concatenar);
};
var curso = 'Cursos Angular ';
var versao = 6;
mostrarCurso(curso, versao);
var numeros = [1, 2, 3];
var nomes = ['Angular', 'React', 'vue'];
numeros.forEach(function (element) {
    console.log(element);
});
for (var index = 0; index < nomes.length; index++) {
    var element = nomes[index];
    console.log(element);
}
