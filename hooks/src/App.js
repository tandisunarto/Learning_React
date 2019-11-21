import React from 'react';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterHook from './components/CounterHook';
import CounterHookTwo from './components/CounterHookTwo';
import NameObjectHook from './components/NameObjectHook';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHook />
      <CounterHookTwo />
      <NameObjectHook />
    </div>
  );
}

export default App;
