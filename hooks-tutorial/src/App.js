import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import UseReducer from "./components/UseReducer";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Counter />}
      <hr />
      <UseReducer />
    </div>
  );
}

export default App;
