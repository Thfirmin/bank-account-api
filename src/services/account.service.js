import { account } from '../server.js';

function HelloWorld() {
  return "Bank Account API";
}

function GetAccount() {
  return account;
}

function Deposit(amount) {
  account.balance += amount;
  return "OK";
}

function Withdraw(amount) {
  if (!account.balance || (account.balance < amount)) {
    return "Saldo insuficiente";
  } else {
    account.balance -= amount;
    return "OK";
  }
}

const AccountServices = {
  HelloWorld,
  GetAccount,
  Deposit,
  Withdraw
};

export default AccountServices;