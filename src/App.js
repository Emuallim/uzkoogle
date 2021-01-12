import React from 'react';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is the search page</h1>
            <Search />
          </Route>
          <Route path="/">
            <h1>This is the home page</h1>
            <Home />
          </Route>
        </Switch>
        <h1>App Header here</h1>

      </Router>
    </div>
  );
}

export default App;
