import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';


export const axiosInstance = axios.create({
    baseURL: 'http://10.2.11.184:5000',
});

const interceptor = axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error(error);
        if (error.response?.status === 401 || error.response?.status === 403) {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
