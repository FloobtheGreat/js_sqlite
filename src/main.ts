import { initializeSchema } from "./db/schema.js";
import { createTask, listTasks} from "./tasks/taskRepository.js";

initializeSchema();

createTask("Test repository layer");

const tasks = listTasks();

console.log(tasks)

// const db = new DatabaseSync('data/test.db');

// db.exec(`
//   CREATE TABLE IF NOT EXISTS tasks (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     title TEXT NOT NULL,
//     status TEXT NOT NULL DEFAULT 'open',
//     created_at TEXT NOT NULL
//   )
// `);

// const insert = db.prepare(`
//     INSERT INTO tasks (title, created_at)
//     VALUES (?, ?)
// `);

// insert.run("It's working now", new Date().toISOString());

// const rows = db.prepare(`
//   SELECT id, title, status, created_at
//   FROM tasks
//   ORDER BY id DESC
// `).all() as TaskRow[];

// console.log(rows.length)

// db.close()