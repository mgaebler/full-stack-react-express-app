import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { connectDB } from './connect-db';

const port = 8080;
const app = express();

app.listen(port, () => console.log('ServerListen on port ', port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

interface Task {
  name: string;
  id: string;
  group: string;
  owner: string;
  isComplete?: boolean;
}

const addNewTask = async (task: Task) => {
  const db = await connectDB();
  const collection = db.collection<Task>('tasks');
  await collection.insertOne(task);
};

app.post('/task/new', async (req, res) => {
  let task = req.body;
  console.log(task);
  await addNewTask(task);
  res.status(200).send();
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
