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

<br/>

`` POST /api/schedule`` Cria um novo Job Schedule.
> recebe "date" em formato UTC pelo corpo da requisição (req.body).

<br/>

`` PUT /api/schedule`` Atualiza o Job Schedule.
> recebe "date" em formato UTC pelo corpo da requisição (req.body).

<br/>

`` DELETE /api/schedule`` Remove o Job Schedule criado.

---

### 📁 Instalação

```bash
  #  clone o repositório
  git clone https://github.com/mvgoliveira/job-scheduler-api

  #  navegue até o repositório clonado
  cd job-scheduler-api

  #  baixe as dependências
  yarn
 
  #  divirta-se!
  yarn dev
```
