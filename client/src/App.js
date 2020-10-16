import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import CreateNew from "./components/createnew";
import ShowAll from "./components/showall";
import ShowOne from "./components/showone";

function App() {
  return (
    <div className="App">
      <Router>
        <ShowAll path="/" />
        <ShowOne path="/rvs/:id" />
        <CreateNew path="/new" />
      </Router>
    </div>
  );
}
export default App;
