import { useState } from 'react';
import './App.css';

function App() {
  const[count, setcount] = useState(0)
  return (
    <div className="App">
      <h1>Counter App</h1>
      Count: {count}
      <br/>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
