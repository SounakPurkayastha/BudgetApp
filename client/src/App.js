import { useEffect, useState } from "react";
import AppContainer from "./components/AppContainer";

function App() {
  const [budget, setBudget] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/budgets/Project")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBudget(data.budget);
      });
  }, []);

  return (
    <div className="App">
      <AppContainer budget={budget} />
    </div>
  );
}

export default App;
