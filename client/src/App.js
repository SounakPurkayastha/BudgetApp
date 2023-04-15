import { useEffect, useState } from "react";
import AppContainer from "./components/AppContainer";

function App() {
  const [budget, setBudget] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/budgets/Concert")
      .then((res) => res.json())
      .then((data) => setBudget(data));
  }, []);

  const addExpense = (expense) => {
    fetch("http://localhost:5000/budgets/Concert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    })
      .then((res) => res.json())
      .then((data) => {
        setBudget((budget) => {
          const newBudget = { ...budget };
          newBudget.expenses.push(data);
          newBudget.currentExpenditure += parseInt(data.price);
          return newBudget;
        });
      });
  };

  return (
    <div className="App">
      <AppContainer budget={budget} onAddExpense={addExpense} />
    </div>
  );
}

export default App;
