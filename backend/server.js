const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000; 

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portal da Fábrica - Início</title>
<style>
body { font-family: Arial, sans-serif; margin: 20px; padding: 20px; line-height: 1.6; }
h1 { color: #2c3e50; }
nav a { margin-right: 15px; text-decoration: none; color: #2980b9; font-weight: bold; }
nav a:hover { text-decoration: underline; }
</style>
</head>
<body>
<h1>Portal Interno da Fábrica</h1>
<p>Bem-vindo ao sistema de informação da linha de produção industrial.</p>
<p>Selecione uma das opções abaixo para navegar pelas seções:</p>

<hr>
<nav>
<a href="/">Início</a> |
<a href="/manuais">Manuais Operacionais</a> |
<a href="/seguranca">Normas de Segurança</a>
</nav>
</body>
</html>
`);
});

app.get('/manuais', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Manuais Operacionais</title>
<style>
body { font-family: Arial, sans-serif; margin: 20px; padding: 20px; line-height: 1.6; }
h1 { color: #2c3e50; }
ul { background-color: #f8f9fa; padding: 20px 40px; border-radius: 5px; }
nav a { margin-right: 15px; text-decoration: none; color: #2980b9; font-weight: bold; }
nav a:hover { text-decoration: underline; }
</style>
</head>
<body>
<h1>Manuais de Trabalho</h1>
<p>Confira a lista de manuais e guias operacionais das máquinas:</p>

<ul>
<li>Manual de Operação da Prensa Hidráulica</li>
<li>Guia de Manutenção Preventiva da Esteira</li>
<li>Instruções de Calibração dos Sensores Industriais</li>
</ul>

<hr>
<nav>
<a href="/">Início</a> |
<a href="/manuais">Manuais Operacionais</a> |
<a href="/seguranca">Normas de Segurança</a>
</nav>
</body>
</html>
`)
});

app.get('/seguranca', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Normas de Segurança</title>
<style>
body { font-family: Arial, sans-serif; margin: 20px; padding: 20px; line-height: 1.6; }
h1 { color: #c0392b; }
ul { background-color: #fdf2e9; padding: 20px 40px; border-radius: 5px; border-left: 5px solid #e67e22; }
nav a { margin-right: 15px; text-decoration: none; color: #2980b9; font-weight: bold; }
nav a:hover { text-decoration: underline; }
</style>
</head>
<body>
<h1>Normas e Procedimentos de Segurança</h1>
<p><strong>Atenção:</strong> Requisitos obrigatórios para todos os operadores no chão de fábrica:</p>

<ul>
<li>Uso obrigatório de óculos de proteção e protetor auricular.</li>
<li>Mantenha a área de trabalho limpa e livre de obstáculos.</li>
<li>Em caso de emergência, acione o botão de parada imediata ao lado da máquina.</li>
</ul>

<hr>
<nav>
<a href="/">Início</a> |
<a href="/manuais">Manuais Operacionais</a> |
<a href="/seguranca">Normas de Segurança</a>
</nav>
</body>
</html>
`);
});


app.listen(PORT, () => {
    console.log(`Servidor ativo em: http://localhost:${PORT}`);
});
