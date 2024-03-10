import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import blogListData from '../models/blogListData';
import SideNavBar from '../components/SideNavBar';

const AdminPage: React.FC = () => {
  const [blogs, setBlogs] = useState(blogListData);

  return (
    <div className="container mx-auto px-4 py-8">
      <SideNavBar/>

      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      <Link to="/create-blog" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 inline-block">
        Create New Blog
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.text}</p>
            <div className="flex items-center justify-between">
              <Link to={`/edit-blog/${blog.author}`} className="text-blue-500 hover:text-blue-600">
                <FaEdit className="mr-1" /> Edit
              </Link>
              <button className="text-red-500 hover:text-red-600 flex flex-col" onClick={() => {}}>
                <FaTrash className="mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
