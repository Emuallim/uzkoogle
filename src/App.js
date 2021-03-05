import React from 'react';
import './App.css';
import Home from './Home';
// import Navbar from './Navbar';
import SearchPage from "./SearchPage";
import Collections from './pages/Collections';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OfflineSearches from './pages/OfflineSearches';
import SearchHistory from './pages/SearchHistory';
import Feedback from './pages/Feedback';
import Help from './pages/Help';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchPage} />
          <div>
            {/* <Navbar /> */}
            <Route path='/search-history' component={SearchHistory} />
            <Route path='/collections' component={Collections} />
            <Route path='/offline-searches' component={OfflineSearches} />
            <Route path='/Help' component={Help} />
            <Route path='/Feedback' component={Feedback} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
