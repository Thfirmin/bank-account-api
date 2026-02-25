import AccountService from "../services/account.service.js";

function HelloWorld(req, res)
{
  res.send(AccountService.HelloWorld());
}

function GetAccount(req, res)
{
  res.json(AccountService.GetAccount());
}

function Deposit(req, res)
{
  res.send(AccountService.Deposit(req.body.amount));
}

function Withdraw(req, res)
{
  const result = AccountService.Withdraw(req.body.amount);
  if (result === "Saldo insuficiente") {
    res.status(400).send("Saldo insuficiente");
  } else {
    res.send("OK");
  }
}

const AccountController = {
  HelloWorld,
  GetAccount,
  Deposit,
  Withdraw
};

export default AccountController;