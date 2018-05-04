import * as React from 'react';
import './App.css';
import { inc, dec, reducer } from "./BasicReducer";
import Button from 'material-ui/Button';

class App extends React.Component {

  constructor(props: any) {
    super(props);
   
    const r1 = reducer(10, inc);
    const r2 = reducer(10, dec);

    console.log("r1 = " + r1 + " ... r2 = " + r2);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div>
            <Button variant="raised">0</Button>
          </div>
          <div>
            <Button variant="raised">+</Button>
          </div>
          <div>
            <Button variant="raised">-</Button>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
