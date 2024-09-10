import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartsl';
import {Bounce, ToastContainer, toast} from 'react-toastify'
import "react-toastify/ReactToastify.css"
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
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
    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const dispatch = useDispatch();

    const deleteCart = (item)=>{
        dispatch(deleteFromCart(item));
        removeItem();
    };
    const incrementCart = (id,quantity) =>{
        dispatch(updateQuantity({id,quantity: quantity+1}))
    };
    const decrementCart = (id,quantity)=>{
        if(quantity>1){
         dispatch(updateQuantity({id,quantity: quantity - 1}))
        }
    }
    const totalQuantity = cartProducts.reduce((total,item)=>total+item.quantity,0);
    const totalAmount = cartProducts.reduce((total,item)=>total+item.price*item.quantity,0);
    const totalPrice = totalAmount.toFixed(2)
  return (
    <>
    <div>
      <ToastContainer/>
        {totalQuantity ? (
            <section className='ctt'>
        {cartProducts.map((item)=>(
      <div class="card mb-3" key={item._id}>
  <div class="row g-0">
    <div class="col-md-4 im">
      <img src={item.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.ds}</p>
        <p className='card-text'>Rs:{item.price}</p>
      <button className='btn btn-primary ml-5'><button className='btn btn-warning ye' onClick={()=>{decrementCart(item._id,item.quantity)}}>-</button>{item.quantity}<button className='btn btn-warning ye' onClick={()=>{incrementCart(item._id,item.quantity)}}>+</button></button>
      <button className='btn btn-warning' onClick={()=>{deleteCart(item)}}>Delete</button>
      </div>
    </div>
  </div>
</div>
 ))}
 <div className='card cd'>
    <h3 className='card-title'>{totalQuantity}Items in your cart</h3>
    <p className='card-title'>Rs:{totalPrice}</p>
    <button className='btn btn-dark'>Checkout</button>
 </div>
 </section>):(
 <section className='ct1'>
        <div className='ct'>
           <p> Cart is Empty</p><br/>
            <button><Link className='lin' to="/coco">SHOP NOW</Link></button>
        </div>
        </section>)}
    </div>
    </>
  );
}

export default Cart
