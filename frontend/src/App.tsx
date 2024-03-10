import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AdminPage from './pages/adminPage'
import BlogPage from './pages/blogPage'
import Dashboard from './pages/dashboard';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signupPage';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status (e.g., presence of JWT token)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
