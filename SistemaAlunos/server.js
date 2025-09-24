const express = require("express");
const app = express();

const alunos = [
  { id: 1, nome: "Juan Vila Nova", idade: 17 },
  { id: 2, nome: "João Paz", idade: 16 },
  { id: 3, nome: "Luana", idade: 16 },
  { id: 4, nome: "Matheus Luciano", idade: 16 },
  { id: 5, nome: "João Guilherme", idade: 17 },
];

app.get("/aluno/:id", (req, res) => {
  let id = req.params.id;
  let aluno = alunos[id - 1];
  if (aluno) {
    res.send("Nome: " + aluno.nome + "<BR>Idade: " + aluno.idade);
  } else {
    res.send("Aluno não encontrado");
  }
});

app.listen(3000, () => {
  console.log(
    "Servidor em execução. Para encontrar um aluno busque por http://localhost:3000/aluno/(Insira o ID)"
  );
});
