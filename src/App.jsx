import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Counter count={count} setCount={setCount} />
  )
}

function Counter(props) {
  const { count, setCount } = props;

  return (
    <div className="App">
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default App