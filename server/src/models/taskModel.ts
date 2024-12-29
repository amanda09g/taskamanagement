// server/src/models/taskModel.ts
import client from '../database';

export const createTask = async (text: string) => {
  const result = await client.query('INSERT INTO tasks (text, completed) VALUES ($1, $2) RETURNING *', [text, false]);
  return result.rows[0];
};

export const getTasks = async () => {
  const result = await client.query('SELECT * FROM tasks');
  return result.rows;
};
