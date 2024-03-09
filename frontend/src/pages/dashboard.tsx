import React from 'react'
import { SlOptions } from "react-icons/sl";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdList } from 'react-icons/md';
import { FaUser, FaEdit, FaBell, FaHome } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';




const blogListData = [
  {
    title: 'Blog 1',
    author: 'John Doe',
    text: 'This is a brief description of blog 1 content.',
    image: 'https://via.placeholder.com/200x150', // Dummy content picture
    type: 'Technology',
    minutesToRead: 5,
    date: 'March 9, 2024'
  },
  {
    title: 'Blog 2',
    author: 'Jane Smith',
    text: 'This is a brief description of blog 2 content.',
    image: 'https://via.placeholder.com/200x150', // Dummy content picture
    type: 'Health',
    minutesToRead: 8,
    date: 'March 10, 2024'
  },
  {
    title: 'Blog 3',
    author: 'Bob Johnson',
    text: 'This is a brief description of blog 3 content.',
    image: 'https://via.placeholder.com/200x150', // Dummy content picture
    type: 'Science',
    minutesToRead: 10,
    date: 'March 11, 2024'
  },
  {
    title: 'Blog 3',
    author: 'Bob Johnson',
    text: 'This is a brief description of blog 3 content.',
    image: 'https://via.placeholder.com/200x150', // Dummy content picture
    type: 'Science',
    minutesToRead: 10,
    date: 'March 11, 2024'
  },
  // Add more blog entries as needed
];

export default function Dashboard() {

  const navigate = useNavigate();
  const handleLogout = () => {
    // Logic for logout
    console.log('Logged out');
  };
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Left Pane Navbar */}
      <nav className="bg-white w-16 p-4 fixed top-0 left-0 bottom-0 overflow-y-auto shadow-sm shadow-gray-400">
        <div className="text-gray-800 mb-8 flex items-center justify-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-10 h-10 mb-2" />
        </div>
        {/* Icons */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-center items-center w-10 h-10 rounded-md hover:bg-gray-300 cursor-pointer">
            <FaHome className="text-gray-600" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 rounded-md hover:bg-gray-300 cursor-pointer">
            <FaBell className="text-gray-600" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 rounded-md hover:bg-gray-300 cursor-pointer">
            <FaEdit className="text-gray-600" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 rounded-md hover:bg-gray-300 cursor-pointer">
            <FaUser className="text-gray-600" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 pl-16">
        {/* Top Navigation Bar */}
        <nav className="bg-white shadow-sm fixed top-0 left-16 right-0 h-16 flex items-center justify-end px-4">
          <button onClick={()=>navigate('/login')} className="text-sm font-bold text-gray-200 hover:text-gray-100 focus:outline-none bg-slate-800 px-4 py-2 rounded-md">
            Logout
          </button>
        </nav>
        {/* Blog List */}
        <div className="container  py-20">
          <h1 className="text-4xl font-semibold mb-8 pl-4">Your Stories</h1>
          <div className="grid gap-5 pl-4 pr-4">
            {/* Map through the blog list data and render each blog item */}
            {blogListData.map((blog, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer">
                {/* Author Name */}
                <div className="bg-gray-100 px-4 py-2 border-t border-gray-400">
                  <p className="text-sm text-gray-600">By {blog.author}</p>
                </div>
                {/* Content */}
                <div className="flex">
                  <div className="flex-1 px-4 py-6">
                    {/* Blog Title */}
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    {/* Blog Text */}
                    <p className="text-gray-600 mb-2">{blog.text}</p>
                    {/* Type of Article and Minutes to Read */}
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">{blog.type}</span>
                      <span>{blog.minutesToRead} min read</span>
                    </div>
                  </div>
                  {/* Dummy Content Picture */}
                  <img src={blog.image} alt="Blog" className="w-1/3" />
                </div>
                {/* Bottom Actions */}
                <div className="flex justify-between bg-gray-100 px-4 py-2 border-b border-gray-400">
                  {/* Blog Date */}
                  <p className="text-sm text-gray-600">{blog.date}</p>
                  {/* Option and Bookmark Buttons */}
                  <div className='flex flex-grow-1'>
                    <SlOptions className='m-2' onClick={() => { }} />
                    <MdOutlineBookmarkAdd className='m-2' onClick={() => { }} />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
