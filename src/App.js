import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const countCounter = () => {
    setCounter(prev => prev + 1);
  };

  const resetCounter = () => {
    if (window.confirm("are you sure you want to reset the counter")) {
      setCounter(0);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Counter Application</h1>
        <h2>{counter}</h2>
        <button type="button" className="btn btn-primary"
          onClick={countCounter}
        >
          Add
        </button>
        <button type="button" className="btn btn-secondary"
          onClick={resetCounter}
        >
          Reset
        </button>

      </div>
    </div>
  );
}

export default App;
