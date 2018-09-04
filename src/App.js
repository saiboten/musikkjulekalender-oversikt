import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Add } from "./Add";
import { See } from "./See";
import styled from "styled-components";

const DefaultComponent = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">404</h1>
    </header>
  </div>
);

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  width: 920px;
  margin: 2rem auto;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Switch>
            <Route component={See} path="/" exact />
            <Route component={Add} path="/add" exact />
            <Route component={DefaultComponent} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
