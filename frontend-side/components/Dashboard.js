import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from './Navbar';
import ProductList from './ProductList';

const Dashboard = () => {
    const [name, setName] = useEffect('');
    const [token, setToken] = useEffect('');

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
    return (
        <div className='container mt-5'>
            <Navbar />
            <h1>Welcome : {name}</h1>
            <ProductList />
        </div>
    )
}

export default Dashboard