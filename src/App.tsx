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
      <section className="min-h-screen bg-papaya">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <Switch>
            <Route component={See} path="/" exact />
            <Route component={Add} path="/add" exact />
            <Route component={DefaultComponent} />
          </Switch>
        </div>
      </section>
    </BrowserRouter>
  );
};

export default App;