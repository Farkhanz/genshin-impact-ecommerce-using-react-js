import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const [name,setName] = useState('');
  const [quantity,setQuantity] = useState('');
  const [price,setPrice] = useState('');
  const { id } =  useParams();

  const UpdateProduct = async (x) => {
    x.preventDefault();
    await axios.patch(`http://localhost:2000/products/${id}`,{
        name: name,
        quantity: quantity,
        price: price
    })
    .then(() => {
        window.location = '/ProductList';
    });
  }

  useEffect(() => {
      getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:2000/products/${id}`);
    setName(response.data.name);
    setQuantity(response.data.quantity);
    setPrice(response.data.price);
  }
  return (
      <div>
          <form onSubmit={ UpdateProduct }>
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
                  <button className='button is-medium is-primary' style={{ marginTop:2 }}>Update Product</button>
              </div>
          </form>
      </div>
  )
};

export default EditProduct;
