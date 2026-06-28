import { initializeSchema } from "./db/schema.js";
import { createTask, listTasks } from "./tasks/taskRepository.js";
import promptsync from "prompt-sync";

const prompt = promptsync();

//function for getting deposits
const getInput = (): string => {
    while(true) {
        const input: string = prompt("What would you like to do? ");

        return input; 
    }     
}

initializeSchema();
//createTask("Test repository layer");

while (true) {
    const tasks = listTasks();

    console.log(tasks)

    console.log("\n q to quit, c to create a task.");
    const choice = getInput();

    if (choice === 'q') {
        console.log("Goodbye");
        break;
    }

}


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