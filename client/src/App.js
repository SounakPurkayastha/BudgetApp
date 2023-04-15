import { useEffect, useState } from "react";
import AppContainer from "./components/AppContainer";

function App() {
  const [budget, setBudget] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/budgets/Concert")
      .then((res) => res.json())
      .then((data) => setBudget(data));
  }, []);

  return (
    <div className="App">
      <AppContainer budget={budget} />
    </div>
  );
}

export default App;
