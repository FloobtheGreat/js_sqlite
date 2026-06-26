export type TaskStatus = "backlog" | "open" | "completed";

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  createdAt: string;
};