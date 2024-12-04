// Criando uma constante com o nome produtos que é um array com chave e valor, simulando o formato JSON -> chave:valor. Ex.: id:1
const produtos = [
    {
        id: 1,
        nome: "televisão",
        preco: 2800.00,
        quantidade: 10
    },
    {
        id: 2,
        nome: "celular",
        preco: 3000.00,
        quantidade: 15
    },
    {
        id: 3,
        nome: "Emmy",
        preco: 100000000.00,
        quantidade: 1
    }
];

// Criando uma função. Padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado }
function listaProduto(id) {
    return produtos.find(p => p.id == id);
}

// Criando uma função. Padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado }
function listaProdutos() {
    return produtos;
}

// Função para inserir um produto novo
function insereProduto(produto) {
    produtos.push(produto);
}

function alteraProduto(id, dadosproduto) {
    const produtonovo = produtos.find(p => p.id == id);
    if (produtonovo) {
        produtonovo.nome = dadosproduto.nome;
        produtonovo.preco = dadosproduto.preco;
        produtonovo.quantidade = dadosproduto.quantidade;
    } else {
        return ("Deu ruim!");
    }
}

function removeProduto(id) {
    const indice = produtos.findIndex(p => p.id == id);
    produtos.splice(indice, 1);
}

// Comando para que a função seja acessível de fora do arquivo db.js
module.exports = {
    listaProduto,
    listaProdutos,
    insereProduto,
    alteraProduto,
    removeProduto
}
