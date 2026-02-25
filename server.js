import express from 'express';
import process from 'process';

const app = express();

app.use(express.json());

const PORT = parseInt(process.argv[2]) || 3000;

/* Query Params
 *
 * Query params são usados para enviar dados adicionais na URL, geralmente para filtrar ou modificar a resposta do servidor.
 * {rota}?<chave>=<valor>&<chave>=<valor>
 * Exemplo: http://localhost:3000/?name=John&age=30
 * req.query = { name: 'John', age: '30' }
 */

/* Route Params
  *
  * Route params são usados para capturar valores dinâmicos na URL, geralmente para identificar recursos específicos.
  * {rota}/:parametro
  * Exemplo: http://localhost:3000/users/thiago
  * req.params = { name: 'thiago' }
  */

/* Body Params
 *
 * Body params são usados para enviar dados no corpo da requisição, geralmente em requisições POST, PUT ou PATCH.
 * O corpo da requisição pode ser enviado em diferentes formatos, como JSON, form-data, etc.
 * Exemplo: Enviar um JSON com { "name": "John", "age": 30 } no corpo da requisição.
 * req.body = { name: 'John', age: 30 }
 */

/* Headers
 * 
 * Headers são usados para enviar informações adicionais sobre a requisição ou resposta, como autenticação, tipo de conteúdo, etc.
 * Exemplo: Enviar um header Authorization com o valor Bearer token123
 * req.headers = { authorization: 'Bearer token123' }
 */

const account = {
  name: 'John Doe',
  age: 30,
  father: 'Richard Doe',
  mother: 'Jane Doe',
  birthDate: '1990-01-01',
  id: '123456789',
  balance: 1000,
}

app.get('/', (req, res) => {
  res.send('Bank Account API');
});

// Rota para obter os dados da conta
app.get('/account', (req, res) => {
  res.json(account);
});

// Rota para depositar dinheiro na conta
app.post('/deposit/', (req, res) => {
  account.balance += req.body.amount;
  res.send("OK");
});

// Rota para sacar dinheiro da conta
app.post('/withdraw/', (req, res) => {
  if (!account.balance || (account.balance < req.body.amount)) {
    res.status(400).send("Saldo insuficiente");
  } else {
    account.balance -= req.body.amount;
    res.send("OK");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
