
import './App.css'
import Clock from './components/Clock'
import Counter from './components/Counter';
import { useState } from "react";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="container">
      <h1>useEffect Demo</h1>

      <button onClick={() => setShowClock(!showClock)}>
        Toggle Clock
      </button>

      {showClock && <Clock />}

      <Counter/>
    </div>
  )
}

export default App
