require("dotenv").config();

const db = require("./db");

// Defino uma constante e recebo o require especificando a biblioteca que vai carregar.
const express = require("express");
// Defino uma constante chamada app que recebe uma função que inicializa uma aplicação (web API)
const app = express();

// Configuração de corpo para que no momento da criação de novos clientes os dados do corpo do post sejam processados pela API
app.use(express.json());

app.delete("/produto/:id", (request, response) => {
    const id = request.params.id;
    db.removeProduto(id);
    response.sendStatus(204);
});

app.patch("/produto/:id", (request, response) => {
    const id = request.params.id;
    const dadosproduto = request.body;
    db.alteraProduto(id, dadosproduto);
    response.sendStatus(200);
});

app.post("/produto", (request, response) => {
    const produto = request.body;
    db.insereProduto(produto);
    response.sendStatus(201);
});

app.get("/produto/:id", (request, response) => {
    const id = request.params.id;
    response.json(db.listaProduto(id));
});

app.get("/produto", (request, response) => {
    response.json(db.listaProdutos());
});

// Criação da rota ou endpoint principal ou raiz com a função definindo o que será feito.
app.get("/", (request, response) => {
    response.json({
        message: "Está OK o Response!"
    });
});

// Listen é de escutar. preciso definir qual a porta de escuta. Por boa prática criei o .env
app.listen(process.env.PORT, () => {
    console.log("App IS RUNNING!");
});
