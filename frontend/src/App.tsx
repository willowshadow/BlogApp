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
import BlogEditPage from './pages/blogEditPage';
import { Toaster } from '../src/@/components/ui/toaster';

function App() {

  const routes = [
    {
      
    }
  ]
  
  return (
    
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/blog/:blogId" element={<BlogPage/>}/>
        <Route path="/blogCreate" element={<BlogEditPage/>}/>
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;
