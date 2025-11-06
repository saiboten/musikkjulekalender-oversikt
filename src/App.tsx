import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Add } from "./Add";
import { See } from "./See";

const DefaultComponent: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">404</h1>
    </header>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <section className="p-16 bg-papaya w-[920px] my-8 mx-auto">
        <Switch>
          <Route component={See} path="/" exact />
          <Route component={Add} path="/add" exact />
          <Route component={DefaultComponent} />
        </Switch>
      </section>
    </BrowserRouter>
  );
};

export default App;