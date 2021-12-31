const inquirer = require("inquirer");
const commands: string[] = ["+", "*", "/", "-", "POP", "DUP", "PSH", "END"];
let stack: (string | number)[] = [];
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

// Returns  previous numbers
function getLastNumbers(): number[] {
  return stack.slice(0, stack.length);
}

// get user input with inquirer
function getInput() {
  return inquirer.prompt([question]);
}

function doOperation(operand: string): void {
  const numbers: number[] = getLastNumbers();

  stack = [];
  stack[0] = numbers.reduce((a, b) => {
    switch (operand) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  });
}

// run app
function run() {
  getInput().then(({ input }: ResponseInputType) => {
    if (/\d/.test(input)) {
      stack.push(Number(input));
    } else if (!commands.includes(input)) {
      console.log("Command not found");
      return;
    }

    switch (input) {
      // sum all the array numbers together and assign array with it's number
      case "+":
        doOperation("+");
      case "-":
        doOperation("-");
    }

    console.log(stack[stack.length - 1]);

    run();
  });
}

run();
