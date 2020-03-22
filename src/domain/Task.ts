export interface Task {
  name: string;
  id: string;
  group: string;
  owner: string;
  isComplete?: boolean;
}
