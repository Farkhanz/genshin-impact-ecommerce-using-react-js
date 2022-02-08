import React from 'react';

const AddProduct = () => {
  return (
      <div>
          <form>
              <div className='field'>
                  <label className='label'>Name Product</label>
                  <input class="input" type="text" placeholder="Add name products"/>
              </div>

              <div className='field'>
                  <label className='label'>Quantity</label>
                  <input class="input" type="text" placeholder="Add name products"/>
              </div>

              <div className='field'>
                  <label className='label'>Price</label>
                  <input class="input" type="text" placeholder="Add name products"/>
              </div>

              <div className='field'>
                  <button className='button'>Save Product</button>
              </div>
          </form>
      </div>
  )
};

export default AddProduct;
