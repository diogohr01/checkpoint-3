

let Curso = require('./curso.js');

Curso.adicionarAluno('Diogo', 1, [10, 9, 9]);
Curso.adicionarAluno('Felipe', 3, [6, 10, 5]);
Curso.adicionarAluno('João', 5, [3, 2, 5]);
Curso.adicionarAluno('Carlos', 0, [10, 10, 10]);
Curso.adicionarAluno('Rafael', 1, [10, 7, 6]);
Curso.adicionarAluno('Thomas', 0, [8, 8, 8]);
Curso.adicionarAluno('Rafaela', 2, [8, 10, 6]);
Curso.adicionarAluno('Marcos', 0, [7, 3, 10]);
Curso.adicionarAluno('Bernardo', 1, [9, 6, 9]);
Curso.adicionarAluno('Teresa', 4, [7, 10, 6]);
Curso.mediaNotaAlunos(Curso.estudantes);
Curso.adicionarFalta(Curso.estudantes, 'Teresa');

Curso.aprovado(Curso.estudantes, 'Marcos');

Curso.listaAprovacao(Curso.estudantes);