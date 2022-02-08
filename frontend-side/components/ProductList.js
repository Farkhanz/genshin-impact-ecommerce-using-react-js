import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:2000/products');
        setProducts(response.data);
    }
    return (
        <div>
            <table className='table is-stripped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((products, index) => (
                        <tr key={ products.id }>
                            <td>{ index + 1 }</td>
                            <td>{ products.name }</td>
                            <td>{ products.quantity }</td>
                            <td>{ products.price }</td>
                            <td>
                                <button className='button is-small is-info' style={{ marginRight:6 }}>Edit</button>
                                <button className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ProductList;
