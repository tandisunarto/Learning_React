import React, { useState } from 'react';

const CounterHookUseState = () => {

  const defaultState = {
    count: 0,
    name: "Hook"
  };

  const [state, incrementCount] = useState(defaultState);

  const handleClick1 = () => ({
    ...state,
    count: state.count + 1
  });

  const handleClick2 = () => {
    incrementCount({
      ...state,
      count: state.count + 1
    });
  }

  return (
    <div>
      <div>
        <button onClick={() => incrementCount(handleClick1())}>          
          {state.name} Count_1 {state.count}
        </button>
      </div>
      <div>
        <button onClick={handleClick2}>
          {state.name} Count_2 {state.count}
        </button>
      </div>
    </div>
  );
}

export default CounterHookUseState;