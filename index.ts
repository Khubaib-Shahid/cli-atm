#! /usr/bin/env node

import inquirer from "inquirer";

let atm = await inquirer.prompt([
  { message: "Enter your pin", type: "number", name: "pin" },
  { message: "Enter your password", type: "number", name: "password" },
  {
    message: "Choose transaction",
    type: "list",
    choices: ["Fast Cash", "Withdraw"],
    name: "transaction",
  },
]);

if (atm.transaction === "Fast Cash") {
  let cash = await inquirer.prompt([
    {
      message: "Select your amount",
      type: "list",
      name: "amount",
      choices: [1000, 2000, 3000, 4000, 5000, 10000],
    },
  ]);

  console.log({
    Pin: atm.pin,
    Transaction: atm.transaction,
    Current_Balance: 500000,
    Amount: cash.amount,
    Remaining_Balance: 500000 - cash.amount,

  });
} else if (atm.transaction === "Withdraw") {
  let cash = await inquirer.prompt([
    { message: "Enter amount", type: "number", name: "amount" },
  ]);
  if (cash.amount > 200000) {
    console.log("minimum 200000 amount allowed");
  } else {
    console.log({
      Pin: atm.pin,
      Transaction: atm.transaction,
      Current_Balance: 500000,
      Amount: cash.amount,
      Remaining_Balance: 500000 - cash.amount,
    });
  }
}
