import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="App"></div>;
}

export default App;
