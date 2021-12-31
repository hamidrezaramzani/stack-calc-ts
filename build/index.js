"use strict";
const inquirer = require("inquirer");
const commands = ["+", "*", "/", "POP", "DUP", "PSH", "END"];
const stack = [];
const question = {
    name: "input",
    message: "enter your command: ",
};
// get user input with inquirer
function getInput() {
    return inquirer.prompt([question]);
}
function run() {
    getInput().then(({ input }) => {
    });
}
run();
