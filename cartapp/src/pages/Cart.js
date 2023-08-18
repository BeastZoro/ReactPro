import React, { useContext } from 'react'
import { CartContext } from '../Context'
import { Link } from 'react-router-dom'
import {AiOutlineLine} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import {FaTrash} from 'react-icons/fa'

const Cart = () => {

  const { cart, removeFromCart, addToCart, decreaseCount,clearCart } = useContext(CartContext)

  const total_amount = cart.reduce((total, ele) => total + ele.product.price * ele.count, 0)

  const handleClearCart  = () =>{
    clearCart([])
  }

  return (
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-gray-500 text-center my-3 md:text-4xl'>Cart</h1>
      {cart.length > 0 ?
        cart.map((ele, index) => {

          const { product, count } = ele
          return (
            <article key={product.id} className='flex items-center my-4 gap-8'>
              <div className='w-3/5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
                <img src={product.thumbnail} alt={product.title} className='w-full' />
                <div className='flex justify-between p-3'>
                  <p className='text-slate-600 font-bold'>{product.title}</p>
                  <p>${product.price}</p>
                </div>
              </div>
              <div className='border border-slate-700 rounded-full w-24 flex justify-between items-center px-2'>
                <button onClick={() => decreaseCount(product)}><AiOutlineLine /></button>
                {count}
                <button onClick={() => addToCart(product)}><GrAdd /></button>
              </div>
              <button className="text-slate-700" onClick={() => removeFromCart(product)}><FaTrash /></button>
            </article>
          )
        })
        :
        <div className='text-center'> 
          <h3>The cart is empty!</h3>
          <Link to='/'> <button className="bg-gray-700 text-white px-7 py-2 rounded-lg"> Continue Shopping</button></Link>
        </div>
      }

      <h1 className='my-7 px-8 text-2xl self-end'>Total :  ${total_amount}</h1>
      <h3 className='text-xl self-end text-white bg-red-600 px-5 py-2 rounded-md' onClick={handleClearCart}>Clear Cart</h3>
    </div>
  )
}

export default Cart