import React from 'react';
import { MdList } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import blogListData, { BlogListObject } from '../models/blogListData';
import { DashboardBlogItem } from '../components/DashboardBlogItem';

export default function Dashboard() {

  const navigate = useNavigate();

  


  function showAllBlogs() {
    return blogListData.map((blog, index) => {
      return (
        <DashboardBlogItem key={index} blog={blog}></DashboardBlogItem>
      );
    })
  }
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Left Pane Navbar */}
      {SideNavBar()}

      {/* Main Content */}
      <div className="flex-1 pl-16">
        {/* Top Navigation Bar */}
        {TopNavBar()}
        {/* Blog List */}
        <div className="container  py-20">
          <h1 className="text-4xl font-semibold mb-8 pl-4">Your Stories</h1>
          <div className="grid gap-5 pl-4 pr-4">
            {/* Map through the blog list data and render each blog item */}
            {showAllBlogs()}
          </div>
        </div>
      </div>
    </div>
  )



  function TopNavBar() {
    return <nav className="bg-white shadow-sm fixed top-0 left-16 right-0 h-16 flex items-center justify-center px-4">
      <div className='text-3xl font-serif flex flex-1 justify-center items-center'>
        <h1>MEDIUM</h1>
      </div>
      <div className='items-center justify-end'>
        <button onClick={() => navigate('/login')} className="text-sm font-bold text-gray-200 hover:text-gray-100 focus:outline-none bg-slate-800 px-4 py-2 rounded-md">
          Logout
        </button>
      </div>

    </nav>;
  }
}

