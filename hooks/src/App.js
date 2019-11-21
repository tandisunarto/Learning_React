import React from 'react';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterHook from './components/CounterHook';
import CounterHookTwo from './components/CounterHookTwo';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHook />
      <CounterHookTwo />
    </div>
  );
}

export default App;
