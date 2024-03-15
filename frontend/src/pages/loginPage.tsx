import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { EmailInput, PasswordInput } from '../components/Inputs';
import axios from 'axios';



export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
  const [text, setText] = useState('');
  const originalText = 'Crreate Your Stories';

  useEffect(() => {
    // Toggle the state after a certain interval
    const interval = setInterval(() => {
      setIsExtended(prevState => !prevState);
    }, 1000); // Change the interval as needed
    return () => clearInterval(interval); // Clean up interval
  }, []);


  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex === originalText.length - 1) {
        clearInterval(typingInterval);
      } else {
        setText(prevText => prevText + originalText[currentIndex]);
        console.log(text);
        currentIndex++;
      }
    }, 100, 1000); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(typingInterval);
  }, []); // Effect runs once on component mount

  const [isExtended, setIsExtended] = useState(false);

  const divRef = React.useRef<HTMLDivElement>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace this with your actual authentication logic
    var url = 'http://localhost:5000/login';
    await axios.post(url, {
      username: username,
      password: password
    }).then((response) => {
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', username);
      // Proceed with login
      history('/');
    }).catch((error) => {
      console.log(error)
      setError(error.response.data.message || 'Login failed');
    })

  };

  return (
    <div className="min-h-screen flex items-center justify-evenly bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex-col">
      <div className='' ref={divRef}>
        <h1 className={`text-7xl text-gray-700 text-left font-serif ${isExtended ? 'extended' : 'retracted'}`}>
          Medium{isExtended ? '.' : '.'}
        </h1>
        <h1 className='text-2xl text-center'>
          {text}
        </h1>
      </div>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <EmailInput username={username} setUsername={setUsername}></EmailInput>
            <PasswordInput password={password} setPassword={setPassword}></PasswordInput>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
        <div className='flex flex-row place-content-evenly'>
          <div>
            <a
              href=""
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Forgot your password?
            </a>
          </div>
          <div>
            <a
              onClick={()=>history('/signup')}
              className="ml-3 text-sm text-gray-600 underline hover:text-gray-900"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
