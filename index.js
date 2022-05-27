const express = require("express");

const server = express();

server.use(express.json());

const cursos = [
  "Fullstack Master",
  "Desenvolvimento de Games",
  "Viver de Youtube",
];

/*
 *The get um curso
 */
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  console.log("Curso retornado ", res.json(cursos[index]));
  return res.json(cursos[index]);
});

/*
 *The get todos curso
 */
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

/*
 * The create new curso
 */
server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

/*
 *The update curso
 */
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

/*
 *The delete um curso
 */
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({ message: "O curso foi deletado" });
});

server.listen(3000);
