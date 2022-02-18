import { useState } from 'react';
import axios from 'axios';
import React from 'react';
// import { Alert } from 'react-bootstrap';

const AddProduct = () => {
  const [name,setName] = useState('');
  const [quantity,setQuantity] = useState('');
  const [price,setPrice] = useState('');

  const SaveProduct = async (x) => {
    x.preventDefault();
    await axios.post('http://localhost:2000/products',{
        name: name,
        quantity: quantity,
        price: price
    })
    .then(() => {
        window.location = '/ProductList';
    })
  }
  return (
      <div>
          <form onSubmit={ SaveProduct }>
              <div className='field'>
                  <label className='label'>Name Product</label>
                  <input className="input" type="text" placeholder="What's name products?" value={name} onChange={ (printing) => setName(printing.target.value) } />
              </div>

              <div className='field'>
                  <label className='label'>Quantity</label>
                  <input className="input" type="text" placeholder="How's Quantity of products?" value={quantity} onChange={ (printing) => setQuantity(printing.target.value) }/>
              </div>

              <div className='field'>
                  <label className='label'>Price</label>
                  <input className="input" type="text" placeholder="How many's price of products?" value={price} onChange={ (printing) => setPrice(printing.target.value) }/>
              </div>

              <div className='field'>
                  <button className='button is-medium is-primary' style={{ marginTop:2 }}>Save Product</button>
              </div>
          </form>
      </div>
  )
};

export default AddProduct;
