import React from 'react';
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

/**
 * Renders a dashboard blog item with author, title, text, type, minutes to read, image, and date.
 *
 * @param {Object} props - Object containing blog details like author, title, text, type, minutes to read, image, and date
 * @return {React.ReactElement} A div containing the blog item
 */
export function DashboardBlogItem(props: { blog: { author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; minutesToRead: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; image: string | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }): React.ReactElement {
  return (<div className="border border-gray-100 overflow-hidden cursor-pointer bg-white">
    {
      /* Author Name */
    }
    <div className="px-4 py-4 content w-fit">
      <p className="text-sm text-gray-800">By {props.blog.author}</p>
      <div className=' border-b border-gray-400'></div>
    </div>
    {
      /* Content */
    }
    <div className="flex">
      <div className="flex-1 px-4 py-6">
        {
          /* Blog Title */
        }
        <h2 className="text-xl font-semibold mb-2">{props.blog.title}</h2>
        {
          /* Blog Text */
        }
        <p className="text-gray-600 mb-2">{props.blog.text}</p>
        {
          /* Type of Article and Minutes to Read */
        }
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-4">{props.blog.type}</span>
          <span>{props.blog.minutesToRead} min read</span>
        </div>
      </div>
      {
        /* Dummy Content Picture */
      }
      <img src={props.blog.image} alt="Blog" className="w-1/3" />
    </div>
    {
      /* Bottom Actions */
    }
    <div className="flex justify-between  px-4 py-2 border-b border-gray-400">
      {
        /* Blog Date */
      }
      <p className="text-sm text-gray-600">{props.blog.date}</p>
      {
        /* Option and Bookmark Buttons */
      }
      <div className='flex flex-grow-1'>
        <SlOptions className='m-2' onClick={() => { }} />
        <MdOutlineBookmarkAdd className='m-2' onClick={() => { }} />
      </div>

    </div>
  </div>);
}
