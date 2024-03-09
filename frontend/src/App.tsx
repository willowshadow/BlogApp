import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; import AdminPage from './pages/adminPage'
import BlogPage from './pages/blogPage'
import Dashboard from './pages/dashboard'
import LoginPage from './pages/loginPage'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
