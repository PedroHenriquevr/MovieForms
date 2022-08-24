const database = require("../database/connection");

class TaskController {
  novaTarefa(request, response) {
    const { p1, p2, p3, p4, p5 } = request.body;

    let p11 = p1[0],
      p12 = p1[1],
      p13 = p1[2],
      p14 = p1[3],
      p15 = p1[4],
      p16 = p1[5];

    console.log(p11, p12, p13, p14, p15, p16, p2, p3, p4, p5);

    database
      .insert({ p11, p12, p13, p14, p15, p16, p2, p3, p4, p5 })
      .table("perguntas")
      .then((data) => {
        console.log(data);
        response.json({ message: "Tarefa Criada com sucesso!" });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new TaskController();
