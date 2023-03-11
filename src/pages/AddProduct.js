import React from 'react'

const AddProduct = () => {
  return (
    <div>
        <h3 className='mb-4'>Add Product</h3>
        <div className='product-add'>
            <form action=''>
                <input type="file" name="" value="" placeholder='Image'  />
                <br />
                <input type="text" name="" value="" placeholder='Product Title' />
                <br />
                <textarea placeholder='Product Description'></textarea>
                <br />
                <input type="number" name="" value="" placeholder='Product Price' />
                <br />
                Select Category: <select name="" id="">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                <br />
                Select Color: <select name="" id="">
                      <option value="green">green</option>
                      <option value="Red">Red</option>
                      <option value="3">Blue</option>
                    </select>
                <br />
                <button className='btn btn-success border-0 rounded-3 my-5' type="submit">Add Product</button>
            </form>
        </div>
    </div>
  )
}

export default AddProduct