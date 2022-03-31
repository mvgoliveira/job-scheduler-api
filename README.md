### :man_technologist: Sobre a aplicação

Uma api simples de agendamento de tarefas (Jobs) volátil.

---

### ⚙ Tecnologias usadas:

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node-Schedule](https://github.com/node-schedule/node-schedule)
- [Express](https://expressjs.com/pt-br/)

---

### 🔀 Rotas da API

`` GET /api/schedule`` Lista todas as Job Schedules criadas.

`` POST /api/schedule`` Cria um novo Job Schedule.

`` PUT /api/schedule`` Atualiza o Job Schedule.
| recebe date em formato UTC pelo corpo da requisição (req.body).

`` DELETE /api/schedule`` Remove o Job Schedule criado.

---

### 📁 Instalação

```bash
  #  clone o repositório
  git clone https://github.com/mvgoliveira/LetMeAsk-web

  #  navegue até o repositório clonado
  cd LetMeAsk-web

  #  baixe as dependências
  yarn
 
  #  divirta-se!
  yarn start
```
