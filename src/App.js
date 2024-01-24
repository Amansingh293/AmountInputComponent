import logo from "./logo.svg";
import "./App.css";
import AmountField from "./components/AmountField";
import { useState } from "react";

function App() {
  const [update, onUpdate] = useState();

  console.log(update);

  return (
    <div className="App">
      <AmountField onUpdate={onUpdate} />
    </div>
  );
}

export default App;
