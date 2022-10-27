import { useState } from "react";
import { Card } from "./components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/public/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank"></a>
      </div>
      <h1>Vite + React</h1>
      <Card>Hello</Card>
    </div>
  );
}

export default App;
