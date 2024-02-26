import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import FilterAndBookList from './components/filterandbooklist.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/books" element={<FilterAndBookList />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

