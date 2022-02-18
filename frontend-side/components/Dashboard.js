import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from './Navbar';
import ProductList from './ProductList';

const Dashboard = () => {
    const [name, setName] = useEffect('');
    const [token, setToken] = useEffect('');
    const [expire, setExpire] = useEffect('');

    useEffect(() => {
        refreshToken();
    },[]);

    const refreshToken = async() => {
        try {
            const response = await axios.get('http://localhost:2000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            console.log(decoded.name);
        } catch (error) {
            if (error.response) {
                window.location = '/';
            }
        }
    }

    const axiosJWT =  axios.create();

    axiosJWT.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if(expire * 1000 < currentDate.getTime()){
            const response = await axios.get('http://localhost:2000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.expire);
        }
        return config;
    },(error)=>{
        return Promise.reject(error);
    })

    const getUsers = async() => {
        const response = await axiosJWT.get('http://localhost:2000/users',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
    }
    return (
        <div className='container mt-5'>
            <Navbar />
            <h1>Welcome : {name}</h1>
            <ProductList />
        </div>
    )
}

export default Dashboard