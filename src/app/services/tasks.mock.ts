import { Task } from '../../domain/Task';

let tasks: Task[] = [
  {
    id: '23215234123412341235',
    name: 'foobar',
    group: 'G1',
    owner: 'user1',
  },
  {
    id: '1234523523',
    name: 'baz',
    group: 'G2',
    owner: 'user1',
  },
  {
    id: '235125124312341',
    name: 'bat',
    group: 'G3',
    owner: 'user1',
  },
];

export function loadSnapshot(): Promise<Task[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(tasks);
    }, 500);
  });
}

export function saveSnapshot(data: Task[]): Promise<undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      tasks = data;
      resolve();
    }, 500);
  });
}

export function postNewTask(task: Task): Promise<Task> {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(task), 1000)
  );
}
