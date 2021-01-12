import React from 'react';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <div className="app">
      <h1>App Header here</h1>
      {/* Home (the one with the search on) */}
      <Home />
      {/* SearchPage (the results page) */}
      <Search />
    </div>
  );
}

export default App;
