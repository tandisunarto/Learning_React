import React, { useState } from 'react';

const ArrayObjectHookUseState = () => {

  const [items, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }
    ])
  }

  return (
    <div>
      <button onClick={addItem}>Add A Number</button>
      <div>
        {
          items.map(item => (
            <span>{item.value}|</span>
          ))
        }
      </div>
    </div>
  )
}

export default ArrayObjectHookUseState;