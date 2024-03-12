import React, { useEffect, useState } from 'react'
import SideNavBar from '../components/SideNavBar';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogListObject } from '../models/blogListData';
import axios from 'axios';

// eslint-disable-next-line no-dupe-args
export default function BlogPage() {

  const [blogPost, setBlogPost] = useState<BlogListObject>({
    _id: '',
    title: '',
    author: '',
    text: '',
    image: '',
    type: '',
    minutesToRead: null!,
    date: null!
  });

  const { blogId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // Make API call to fetch the blog data using the blogId
    console.log(blogId)
    axios.get(`http://localhost:5000/blog${blogId}`).then((response) => {
      console.log(response.data);
      setBlogPost(response.data);


    }).catch((error) => {
      console.log(error);
    });



  }, [blogId]);
  return (
    <div className="bg-gray-100 min-h-screen">

      {SideNavBar()}
      {/* Content */}
      <div className="max-w-4xl mx-auto py-8 pl-16">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800">{blogPost.title}</h1>
        </div>
        {/* Cover Image (optional) */}
        <img
          src={blogPost.image}
          alt="Cover"
          className="w-full rounded-lg mb-8 hover:border transition duration-300"
        />

        {/* Body of the Blog Post */}
        <div className="mb-8 text-gray-800">
          <p className="leading-relaxed">
            {blogPost.text}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center mb-8">
          <img
            src="https://via.placeholder.com/50"
            alt="Author"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-gray-800">By {blogPost.author}</p>
            <p className="text-sm text-gray-600">Published on {getFormattedDate(blogPost)}</p>
          </div>
        </div>

        {/* Sharing Options (optional) */}
        <div className="flex justify-between items-center bg-white border-t border-gray-200 py-6 px-4 rounded-lg">
          <div className="text-gray-600">
            <p>Share this post:</p>
            <div className="flex mt-2">
              <button className="mr-4 text-blue-500 hover:text-blue-600 focus:outline-none">
                <i className="fab fa-twitter"></i> Twitter
              </button>
              <button className="mr-4 text-blue-500 hover:text-blue-600 focus:outline-none">
                <i className="fab fa-facebook"></i> Facebook
              </button>
              <button className="text-blue-500 hover:text-blue-600 focus:outline-none">
                <i className="fab fa-linkedin"></i> LinkedIn
              </button>
            </div>
          </div>
          <div>
            <button className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-600 focus:outline-none" onClick={()=>navigate(`/`)}>
              Read More Articles
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
function getFormattedDate(blogPost: BlogListObject): React.ReactNode {
  return new Date(blogPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

