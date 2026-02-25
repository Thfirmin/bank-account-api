import express from 'express';
import process from 'process';
import AccountRoutes from './routes/account.route.js';

export const app = express();

app.use(express.json());

const PORT = parseInt(process.argv[2]) || 3000;

export const account = {
  name: 'John Doe',
  age: 30,
  father: 'Richard Doe',
  mother: 'Jane Doe',
  birthDate: '1990-01-01',
  id: '123456789',
  balance: 1000,
}

AccountRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
