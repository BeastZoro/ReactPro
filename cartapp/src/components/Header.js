import React, { useContext, useEffect, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { BiSolidDownArrow } from 'react-icons/bi'
import { CartContext, ProductContext } from '../Context'
import { Link } from 'react-router-dom'


const Header = () => {

  const { updateProducts, categories, allProducts, product } = useContext(ProductContext)
  const { cart } = useContext(CartContext)

  const [displayCategory, setDisplayCategory] = useState(false)

  const totalQuantity = cart.reduce((acc, ele) => acc + ele.count, 0)

  const handleCategory = (cat) => {
    if (cat === 'all') {
      updateProducts(allProducts)
    }
    else {
      const filteredProds = allProducts.filter((ele) => ele.category === cat)
      updateProducts(filteredProds)
    }
  }

  return (
    <nav className='flex items-center justify-between w-full bg-gray-600 py-5 px-8 text-white'>
      <Link to="/"> <h3 className='text-xl text-white font-medium'>Cart Manager</h3></Link>

      <ul className='flex gap-6 items-center'>
        <Link to='/'><li className='cursor-pointer'>Home</li></Link>

        <li className='flex items-center gap-1 cursor-pointer relative' onClick={() => setDisplayCategory(!displayCategory)}>Categories <BiSolidDownArrow size={12} />

          {displayCategory &&
            <ul className='bg-gray-700 text-xs p-4 absolute top-7 left-0 rounded-lg space-y-2'>
              {
                categories.map((cat) =>
                  <li key={cat} onClick={() => handleCategory(cat)}>{cat.toString().toUpperCase()}</li>
                )
              }
            </ul>
          }
        </li>
        <Link to='cart'><li className='relative cursor-pointer '><FaCartPlus size={20} /> <span className='bg-slate-900 rounded-2xl px-1.5 absolute bottom-2 left-4 text-sm'>{totalQuantity}</span></li></Link>
      </ul>
    </nav>
  )
}

export default Header