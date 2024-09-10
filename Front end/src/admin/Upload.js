import React from 'react'
import './admin.css'
import {toast} from 'react-toastify'

const Upload = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const image =form.image.value;
        const title = form.title.value;
        const ds = form.ds.value;
        const price = form.price.value;
        const quantity = 1;

        if(image === "" || title === "" || ds === "" || price === ""){
            toast.warn("Fill all the fields");
        }
        const prdObj = {
            image,title,ds,price,quantity
        };console.log(prdObj);

        fetch("http://localhost:7777/product",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(prdObj)
        })
        .then((res)=>res.json())
        .then((data)=>{
            toast.success("Product Added Successfully")
            form.reset();
            window.location.href = "/admin";
        });
    }
  return (
    <div className='up'>

        <div className='card up1'>
        <h3>Upload Products</h3>
      <form onSubmit={handleSubmit}>
        <label value="image">Image</label><br/>
        <input 
        type='text'
        name='image'
        id='image'
        /><br/>
        <label value="title">Title</label><br/>
        <input 
        type='text'
        name='title'
        id='title'
        /><br/>
        <label value="ds">Description</label><br/>
        <input 
        type='text'
        name='ds'
        id='ds'
        /><br/>
        <label value="price">Price</label><br/>
        <input 
        type='number'
        name='price'
        id='price'
        /><br/><br/>
        <button type="submit" className='btn btn-success'>Upload</button>
      </form>
      </div>
    </div>
  )
}

export default Upload
