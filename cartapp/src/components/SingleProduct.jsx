import React, { useContext } from 'react'
import { CartContext } from '../Context'

const SingleProduct = ({product}) => {

  const {cart, addToCart} = useContext(CartContext)
  const {id, thumbnail, title, price} = product
  
  //count the current product in the cart
  const cart_item = cart.find((item) => item.product.id === id)
  const item_count = cart_item ? cart_item.count : 0

  // console.log(cartItemCount)
  return (
    <article className='h-80 my-4 flex flex-col items-center rounded-lg overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
      <img className="w-full h-2/3 max-h-48 object-cover" src={thumbnail} alt={title} />
      <div className='w-full px-4 py-3 flex justify-between'>
        <p className='text-xl'>{title.substring(0,15) + '...'}</p>
        <p>${price}</p>
      </div>
      <button className="m-3 px-5 py-2 rounded-lg  border bg-gray-500 text-white "  
      onClick={() =>addToCart(product)}>Add to cart ({item_count})</button>
    </article>
  )
}

export default SingleProduct