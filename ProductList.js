// import {useState,useEffect} from 'react';

const ProductList = () => {
  return (
        <div>
        <table className='table is-stripped is-fullwidth'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Primordial Jade Winged Spear</td>
                    <td>40</td>
                    <td>25000</td>
                    <td>
                        <button className='button is-small is-info' style={{ marginRight : 6 }}>Edit</button>
                        <button className='button is-small is-danger' >Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
};

export default ProductList;
