const inquirer = require("inquirer");
const commands: string[] = ["+", "*", "/", "POP", "DUP", "PSH", "END"];
const stack: string[] | number[] = [];
type QuestionTypes = {
  name: string;
  message: string;
};

type ResponseInputType = {
  input: string;
};

const question: QuestionTypes = {
  name: "input",
  message: "enter your command: ",
};

// get user input with inquirer
function getInput() {
  return inquirer.prompt([question]);
}

function run() {
  getInput().then(({ input }: ResponseInputType) => {
      
  });
}

run();
