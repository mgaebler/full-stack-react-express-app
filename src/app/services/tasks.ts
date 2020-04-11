import axios from 'axios';
import { Task } from 'domain/Task';

const url = 'http://localhost:8000';

export async function fetchAllTasks() {
  const response = await axios.get<Task[]>(`${url}/tasks`);
  return response.data;
}

export async function postNewTask(task: Task) {
  const response = await axios.post<Task>(`${url}/task/new`, { task });
  return response.data;
}

export async function patchNewTask(task: Task) {
  const response = await axios.patch<Task>(`${url}/task/new`, { task });
  return response.data;
}
