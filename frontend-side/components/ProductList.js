import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:2000/products');
        setProducts(response.data);
    }

    const DeleteProduct = async (id) => {
        await axios.delete(`http://localhost:2000/products/${id}`);
        getProducts();
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
                        <tr key={products.id}>
                            <td>{index + 1}</td>
                            <td>{products.name}</td>
                            <td>{products.quantity}</td>
                            <td>{products.price}</td>
                            <td>
                                <Link to={`/EditProduct/${products.id}`} className='button is-small is-info' style={{ marginRight: 6 }}>Edit</Link>
                                <button onClick={() => DeleteProduct(products.id)} className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/AddProduct" className="button is-primary" style={{ marginLeft: 530 }}>Add new</Link>
        </div>
    )
}

export default ProductList