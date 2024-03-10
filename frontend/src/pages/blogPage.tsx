import React from 'react'
import SideNavBar from '../components/SideNavBar';

type BlogPageProps = {
  title: string;
  body: string;
  author: string;
}
// eslint-disable-next-line no-dupe-args
export default function BlogPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {SideNavBar()}
      {/* Content */}
      <div className="max-w-4xl mx-auto py-8 pl-16">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800">Title of the Blog Post</h1>
        </div>
        {/* Cover Image (optional) */}
        <img
          src="https://via.placeholder.com/800x200"
          alt="Cover"
          className="w-full rounded-lg mb-8"
        />

        {/* Body of the Blog Post */}
        <div className="mb-8 text-gray-800">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <p className="font-semibold text-gray-800">Author Name</p>
            <p className="text-sm text-gray-600">Published on March 9, 2024</p>
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
            <button className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-600 focus:outline-none">
              Read More Articles
            </button>
          </div>
        </div>
      </div>

      {/* Footer (optional) */}
      <footer className="bg-white border-t border-gray-200 absolute bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 text-center">
          &copy; 2024 BlogName. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
