const todos = [
  {
    userId: 1,
    title: 'ABC',
    completed: false,
    id: 1,
  },
  {
    userId: 1,
    title: 'DEF',
    completed: true,
    id: 2,
  },
];

const express = require('express');

const app = express();

/*
curl --dump-header - --location --request GET 'http://localhost:5000/todos'     
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 52
ETag: W/"34-B7yWUXpHS82PX0bg+fqznwXr0B8"
Date: Wed, 20 May 2020 08:04:28 GMT
Connection: keep-alive

[{"userId":1,"title":"DEF","completed":true,"id":2}]
*/
app.get('/todos', (req, res) => {
  res.json(todos);
});

// RESTful
// https://fr.wikipedia.org/wiki/Representational_state_transfer#Relation_entre_URI_et_méthodes_HTTP
// GET /resources (ex GET /todos) -> Lecture Liste
// GET /resoures/id  (ex GET /todos/1) -> Lecture Détails
// POST /resources (ex POST /todos) -> Création
// DELETE /resources/id (ex DELETE /todos/1) -> Suppression
// PUT /resources/id (ex PUT /todos/1) -> Remplacement
// PATCH /resources/id (ex PATCH /todos/1) -> Mise à jour partielle / fusion


// DELETE http://localhost:5000/todos/1
// DELETE http://localhost:5000/todos/20
// DELETE http://localhost:5000/todos/55
/*
curl --dump-header - --location --request DELETE 'http://localhost:5000/todos/1'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 2
ETag: W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"
Date: Wed, 20 May 2020 08:04:09 GMT
Connection: keep-alive

{}
*/
app.delete('/todos/:todoId', (req, res) => {
  const todoId = req.params.todoId;

  const indexToDelete = todos.findIndex((t) => t.id === Number(todoId));
  todos.splice(indexToDelete, 1);

  res.json({});
});

// http://localhost:5000
app.listen(5000);
