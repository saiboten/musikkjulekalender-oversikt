import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { Add } from "./Add";
import { See } from "./See";

const Test = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Heisann</h1>
    </header>
  </div>
);

const DefaultComponent = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">404</h1>
    </header>
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ul>
            <p>Menyvalg</p>
            <li>
              <Link to="/add">Legg til låt</Link>
            </li>
            <li>
              <Link to="/see">Se låter</Link>
            </li>
          </ul>

          <Switch>
            <Route component={See} path="/see" exact />
            <Route component={Add} path="/add" exact />
            <Route component={Test} path="/" exact />
            <Route component={DefaultComponent} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
