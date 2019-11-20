import React from 'react';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterHook from './components/CounterHook';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHook />
    </div>
  );
}

export default App;
