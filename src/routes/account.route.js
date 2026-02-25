import AccountController from '../controllers/account.controller.js';

function AccountRoutes(app) {
  // Rota para a mensagem de boas-vindas
  app.get('/', AccountController.HelloWorld);
  
  // Rota para obter os dados da conta
  app.get('/account', AccountController.GetAccount);
  
  // Rota para depositar dinheiro na conta
  app.post('/deposit/', AccountController.Deposit);
  
  // Rota para sacar dinheiro da conta
  app.post('/withdraw/', AccountController.Withdraw);
}

export default AccountRoutes;

