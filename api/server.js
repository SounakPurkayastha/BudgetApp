const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

const budgets = [];

app.get("/budgets", (req, res) => {
  res.status(200).json({ budgets: budgets });
});

app.post("/budgets", (req, res) => {
  const newBudget = req.body;
  budgets.push(newBudget);
  res.status(201).json({ message: "New budget created!" });
});

app.get("/budgets/:title", (req, res) => {
  const budgetTitle = req.params.title;
  const budget = budgets.find(({ title }) => title === budgetTitle);
  res.status(200).json(budget);
});

app.post("/budgets/:title", (req, res) => {
  const budgetTitle = req.params.title;
  const budget = budgets.find(({ title }) => title === budgetTitle);
  budget.expenses.push(req.body);
  budget.currentExpenditure += parseInt(req.body.price);
  res.status(200).json({ budget: budget });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
