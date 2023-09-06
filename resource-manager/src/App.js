// App.js with React Router

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
