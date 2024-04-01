import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t welcome to CodeWithHamna - Todo-List Application\n"));
while(conditions){
let addTask = await inquirer.prompt([
    {
        name: "task",
        type: "input",
        message: "Enter your New task:"
    }
]);
todoList.push (addTask.task);
console.log(chalk.greenBright.bold(`${addTask.task}Task added in Todo-list successfully`));

let addMoreTask = await inquirer.prompt([
    {
        name: "addmore",
        type: "confirm",
        message:"Do you want to add more task ?",
        default: "false"
    }
]);
conditions = addMoreTask.addmore
}
console.log(chalk.blue.bold("your updated Todo-List:", todoList));