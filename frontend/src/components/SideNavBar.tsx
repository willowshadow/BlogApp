import React from "react";
import { FaUser, FaEdit, FaBell, FaHome } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { renderIcon } from "./renderIcon";
import { useNavigate } from "react-router-dom";


export default function SideNavBar() {
  
    const navigate = useNavigate();

    return (
      <nav className="bg-white w-16 p-4 fixed top-0 left-0 bottom-0 overflow-y-auto shadow-sm shadow-gray-100">
        <div className="text-gray-800 mb-8 flex items-center justify-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-10 h-10 mb-2 animate-spin" />
        </div>
        {/* Icons */}
        <div className="flex flex-col items-center space-y-4">
          {renderIcon(<FaHome />, "bg-gray-100 hover:bg-gray-200",()=>navigate('/'))}
          {renderIcon(<FaBell />, "bg-gray-100 hover:bg-gray-200")}
          {renderIcon(<FaEdit onClick={()=>navigate('/blogCreate')} />, "bg-gray-100 hover:bg-gray-200",()=>navigate('/blogCreate'))}
          {renderIcon(<FaUser onClick={()=>navigate('/admin')} />, "bg-gray-100 hover:bg-gray-200",()=>navigate('/admin'))}
        </div>
      </nav>
    );
  }

