import React, { useEffect, useState } from 'react'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartsl';
import { useSelector,useDispatch } from 'react-redux';
import {Bounce, ToastContainer, toast} from 'react-toastify'
import "react-toastify/ReactToastify.css"
import './ourprd.css'

const Ourproducts = () => {
  const removeItem = () =>
    toast.warning("Item Removed Successfully",{
        position:"top-center",
        autoClose: 1500,
        hideProgressBar: true,
        pauseOnHover: true,
        closeOnClick:true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    const addItem = () =>
      toast.success("Item added Successfully",{
          position:"top-center",
          autoClose: 1500,
          hideProgressBar: true,
          pauseOnHover: true,
          closeOnClick:true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
      });
    const cartProducts = useSelector((state)=>state.cart.cartItems) 
    const dispatch = useDispatch();
    const addCart=(item)=>{
      dispatch(addToCart(item));
       addItem();
    };
    const deleteCart=(item)=>{
      dispatch(deleteFromCart(item));
       removeItem();
    }
    const [oilProduct,setOilProduct] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:7777/allproducts")
      .then((res)=>res.json())
      .then((data)=>{
        if(Array.isArray(data)){
          setOilProduct(data);
        }
      })
    });

  return (
    <div>
      <ToastContainer/>
      <div className='conatiner top3'>
        <div className='row'>
            {oilProduct.map((item)=>(
          <div className='col-lg-3'>
          <div class="card" key={item._id}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.ds}</p>
    {cartProducts.find(items=>items._id === item._id)?
    <button className='btn btn-danger' onClick={()=>deleteCart(item)}>Remove from Cart</button>:
    <button className='btn btn-success' onClick={()=>addCart(item)}>Add to Cart</button>
    }
  </div>
</div>
          </div>))}
        </div>
      </div>
    </div>
  )
}

export default Ourproducts
