import * as React from 'react';
import './App.css';
import { inc, dec } from "./BasicReducer";
import { Home1, Home2 } from "./Home/index";  // use barrel file index.tsx
import { AppStore } from './AppStore';

import Chat from './Chat/Chat';
import ChatFooter from './Chat/ChatFooter';
import Counter from './Counter/Counter';

class App extends React.Component {

  constructor(props: any) {
    super(props);
  }

  name: string = "Hello";

  public render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home1 greeting="Welcome" />
        <Home2 />
        <div className="App-intro">
          <Counter />
        </div>
        <div style={{marginTop: "50px"}}>
          <Chat />
          <ChatFooter />
        </div>
      </div>
    );
  }
}

export default App;