import React from 'react';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterHookUseState from './components/CounterHookUseState';
import CounterHookUseStateTwo from './components/CounterHookUseStateTwo';
import NameObjectHookUseState from './components/NameObjectHookUseState';
import ArrayObjectHookUseState from './components/ArrayObjectHookUseState';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHookUseState />
      <CounterHookUseStateTwo />
      <NameObjectHookUseState />
      <ArrayObjectHookUseState />
    </div>
  );
}

export default App;
