import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { connectDB } from './connect-db';
import './initialize-db';

import { Task } from 'domain/Task';

const port = 8000;
const app = express();

app.listen(port, () => console.log('ServerListen on port ', port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

const addNewTask = async (task: Task) => {
  const db = await connectDB();
  const collection = db.collection<Task>('tasks');
  const dbResponse = await collection.insertOne(task);
  // return the created db object
  return dbResponse.ops[0];
};

app.get('/tasks', async (req, res) => {
  const db = await connectDB();
  const collection = db.collection<Task>('tasks');
  const cursor = await collection.find({});
  const tasks = await cursor.toArray();
  res.status(200).json(tasks);
});

app.post('/task/new', async (req, res) => {
  let { task } = req.body;
  console.log(task);
  const savedTask = await addNewTask(task);

  res.status(200).json(savedTask);
});

const updateTask = async (task: Task) => {
  const { id, group, isComplete, name } = task;
  const db = await connectDB();
  const collection = db.collection<Task>('tasks');

  if (group) {
    await collection.updateOne({ id }, { $set: { group } });
  }
  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }
  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }
};

app.post('/task/update', async (req, res) => {
  let task = req.body;
  console.log(task);
  await updateTask(task);
  res.status(200).send();
});
