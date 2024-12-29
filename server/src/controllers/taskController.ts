// server/src/controllers/taskController.ts
import { Request, Response } from 'express';
import * as taskModel from '../models/taskModel';

export const createTask = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const newTask = await taskModel.createTask(text);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskModel.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};
