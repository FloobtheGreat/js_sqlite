import { initializeSchema } from "./db/schema.js";
import { createTask, listTasks, closeDatabase } from "./tasks/taskRepository.js";
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
        closeDatabase();
        console.log("Goodbye");
        break;
    }

}
