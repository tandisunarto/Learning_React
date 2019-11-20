import React, { useState } from 'react';

const CounterHook = () => {

  const defaultState = {
    count: 0,
    name: "Hook"
  };

  const [state, incrementCount] = useState(defaultState);

  const handleClick = () => ({
    ...state,
    count: state.count + 1
  });

  return (
    <button onClick={() => incrementCount(handleClick())}> {state.name} Count {state.count}</button>
  )
}

export default CounterHook;