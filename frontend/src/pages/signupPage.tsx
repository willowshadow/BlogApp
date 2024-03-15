import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailInput, PasswordConfirmInput, PasswordInput, UserNameInput } from '../components/Inputs';
import axios from 'axios';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSignUp = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();



        // Implement your sign-up logic here
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        var url = 'http://localhost:5000/signup';
        await axios.post(url, {
            email: email,
            username: username,
            password: password,
        }).then((response) => {
            console.log(response.data);
            // Proceed with sign-up
            history('/login'); // Redirect to login page after successful sign-up
        }).catch((error) => {
            setError(error?.response?.data?.message||'errrrr');
            console.log(error);
        })


    };

    return (
        <div className="min-h-screen flex items-center justify-evenly bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex-col">
            <div className="">
                <h1 className="text-7xl text-center font-serif">Create an Account</h1>
            </div>
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign up for an account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <EmailInput username={email} setUsername={setEmail}></EmailInput>
                        <UserNameInput username={username} setUsername={setUsername}></UserNameInput>
                        <PasswordInput password={password} setPassword={setPassword} ></PasswordInput>
                        <PasswordConfirmInput password={confirmPassword} setPassword={setConfirmPassword}></PasswordConfirmInput>
                    </div>
                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="flex flex-row place-content-evenly">
                    <div>
                        <a
                            href=""
                            className="ml-3 text-sm text-gray-600 underline hover:text-gray-900"
                            onClick={() => history('/login')} // Navigate to login page
                        >
                            Already have an account? Sign in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
