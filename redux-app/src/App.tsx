import * as React from 'react';
import './App.css';
import Button from 'material-ui/Button';
import { inc, dec } from "./BasicReducer";
import { Home1, Home2 } from "./Home/index";  // use barrel file index.tsx
import { AppStore } from './AppStore';

import Chat from './Chat/Chat';

class App extends React.Component {

  readonly store = new AppStore();

  state = {
    number: this.store.getState().number
  };

  constructor(props: any) {
    super(props);
  }

  handleIncrement = () => {
    this.store.dispatch(inc);
    this.setState({
      number: this.store.getState().number
    })
  }

  handleDecrement = () => {
    this.store.dispatch(dec);
    this.setState({
      number: this.store.getState().number
    })
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
          <div>
            <Button variant="raised">{this.state.number}</Button>
          </div>
          <div>
            <Button variant="raised" onClick={this.handleIncrement} >+</Button>
          </div>
          <div>
            <Button variant="raised" onClick={this.handleDecrement}>-</Button>
          </div>
        </div>
        <div style={{
          marginTop: "50px"
          }}>
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;