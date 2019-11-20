import React, { useState } from 'react';

const CounterHook = () => {

  const [count, incrementCount] = useState(0);

  return (
    <button onClick={() => incrementCount(count + 1)}> Count {count}</button>
  )
}

export default CounterHook;