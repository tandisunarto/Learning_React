import React, { useState } from 'react';

const CounterHookTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const reset = () => {
    setCount(initialCount);
  }

  const increment = () => {
    setCount(count + 1);
  }

  const increment5 = () => {    
    for(let i=0; i<5; i++) {
      // this will use the stale value of count insted of the newly incremented value
      // setCount(count + 1);

      // we should pass a function to read current state value
      setCount(prevCount => prevCount + 1);
    }
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      Count: {count}
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={increment5}>Increment 5</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterHookTwo;