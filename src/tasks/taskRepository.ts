import { db } from "../db/database.js";
import type { Task, TaskStatus } from "./taskTypes.js";

type TaskRow = {
  id: number;
  title: string;
  status: TaskStatus;
  created_at: string;
};

function rowToTask(row: TaskRow): Task {
  return {
    id: row.id,
    title: row.title,
    status: row.status,
    createdAt: row.created_at,
  };
}

export function createTask(title: string): Task {
  const createdAt = new Date().toISOString();

  const result = db.prepare(`
    INSERT INTO tasks (title, created_at)
    VALUES (?, ?)
  `).run(title, createdAt);

  const id = Number(result.lastInsertRowid);

  return getTaskById(id);
}

export function getTaskById(id: number): Task {
  const row = db.prepare(`
    SELECT id, title, status, created_at
    FROM tasks
    WHERE id = ?
  `).get(id) as TaskRow | undefined;

  if (!row) {
    throw new Error(`Task not found: ${id}`);
  }

  return rowToTask(row);
}

export function listTasks(): Task[] {
  const rows = db.prepare(`
    SELECT id, title, status, created_at
    FROM tasks
    ORDER BY id DESC
  `).all() as TaskRow[];

  return rows.map(rowToTask);
}

export function completeTask(id: number): void {
  db.prepare(`
    UPDATE tasks
    SET status = 'completed'
    WHERE id = ?
  `).run(id);
}

export function deleteTask(id: number): void {
  db.prepare(`
    DELETE FROM tasks
    WHERE id = ?
  `).run(id);
}