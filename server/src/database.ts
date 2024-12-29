// server/src/database.ts
import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'task_manager',
  user: 'task_user',
  password: '123456',
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err: { stack: any; }) => console.error('Connection error', err.stack));

export default client;
