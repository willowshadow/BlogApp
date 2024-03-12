import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import SideNavBar from '../components/SideNavBar';
import { Console } from 'console';

interface BlogListObject {
    title: string;
    author: string;
    text: string;
    image: string;
    type: string;
    minutesToRead: number;
    date: string;
}

const BlogEditPage: React.FC = () => {


    const [blogPost, setBlogPost] = useState<BlogListObject>({
        title: '',
        author: '',
        text: '',
        image: '',
        type: '',
        minutesToRead: null!,
        date: null!
    });

    const [imageFile, setImageFile] = useState<File | Blob>(null!);
    const [stateUpdated, setStateUpdated] = useState(false);

    useEffect(()=>{
        if(stateUpdated)
        {
            handleSave();
        }
    },[stateUpdated]);
    console.log(localStorage.getItem('username'))
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBlogPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(blogPost);
            const result = await axios.post('http://localhost:5000/blog', blogPost, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStateUpdated(false);
            console.log(result.data);
            // Redirect to the published post or show a success message
        } catch (error) {
            // Handle error
            console.log(error);
        }
    };

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0]; // Get the selected file
        if (selectedFile) {
            setImageFile(selectedFile);
        }
    };

    const handleImageUpload = async (e: any) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();

            formData.append('image', imageFile);
            formData.append('imageName', imageFile.type);
            var url = 'http://localhost:5000/upload';
            const result = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // console.log(result.data)
            setBlogPost(prevState => ({
                ...prevState,
                image: result.data,
                author: localStorage.getItem('username') || '',
                date: new Date().toISOString()
            }))
            console.log(blogPost);
            setStateUpdated(true);
            // Delay the call to handleSave() for 500 milliseconds (adjust as needed)
        }
        catch (error) {
            // Handle error
            console.log(error)
        }
    };

    return (
        <div>
            <SideNavBar />

            <div className="pl-20 pt-16 pr-10 bg-gray-50 h-screen">
                <form onSubmit={(e) => handleImageUpload(e)}>
                    <h1 className='text-4xl font-sans font-semibold pb-10'>Write Your Story</h1>
                    <input
                        type="text"
                        name="title"
                        required={true}
                        value={blogPost.title}
                        onChange={handleChange}
                        className="border-0 border-gray-400  bg-slate-200 p-2 mb-4 w-full"
                        placeholder="Enter title"
                    />
                    <textarea
                        name="text"
                        value={blogPost.text}
                        minLength={10}
                        required={true}
                        onChange={handleChange}
                        className="border-0 border-gray-400  bg-slate-200 p-2 h-64 w-full"
                        placeholder="Enter content"
                    />
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        required={true}
                        onChange={handleFileChange}
                        className="border-0 border-gray-400  bg-slate-200 p-2 mb-4 w-full file:bg-slate-50 file:border-0 file:text-gray-500 file:px-4 file:py-2 file:hover:bg-gray-100"
                    />
                    <input
                        type="text"
                        name="type"
                        value={blogPost.type}
                        onChange={handleChange}
                        required={true}
                        className="border-0 border-gray-400 bg-slate-200 p-2 mb-4 w-full"
                        placeholder="Enter type"
                    />
                    <input
                        type="number"
                        name="minutesToRead"
                        value={blogPost.minutesToRead}
                        onChange={handleChange}
                        required={true}
                        className="border-0 border-gray-400  bg-slate-200 p-2 mb-4 w-full"
                        placeholder="Enter minutes to read"
                    />
                   
                    <button
                        className="bg-gray-600 min-w-32 text-white p-2 mt-4 hover:bg-gray-700"
                    >
                        Save
                    </button>
                </form>

            </div>
            <button className='bg-gray-600 min-w-16 text-white p-2 mt-4 hover:bg-gray-700 self-center pl-64 text-center'>
                TestUpload
            </button>
        </div>

    );
};

export default BlogEditPage;
