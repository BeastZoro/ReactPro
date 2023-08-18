import React, { createContext, useState } from 'react'

export const ProductContext = createContext()
export const CartContext = createContext()

const Context = ({ children }) => {

  const [product, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [allProducts, setAllProducts] = useState([])

  const [cart, setCart] = useState([])
  const [categories, setCategories] = useState(['all'])
  
  const updateProducts = (newProducts) => {
    setProducts(newProducts)
  }
  
  const updateCategories = (newCategories) =>{
    setCategories(newCategories)
  }
  
  const updateAllProducts = (allprods) =>{
    setAllProducts(allprods)
  }

  const updateLoading = (newValue) => {
    setLoading(newValue)
  }

  const addToCart = (newProduct) => {
    // Find the cart item with the same product ID
    const existing_product = cart.find((item) => item.product.id === newProduct.id)
    if (existing_product) {
      const updated_cart = cart.map((ele) =>
        ele.product.id === existing_product.product.id ?
          { ...ele, count: ele.count + 1 } : ele
      )
      setCart(updated_cart)
    }
    else {
      setCart([...cart, { product: newProduct, count: 1 }])
    }
  }

  //remove items from cart
  const removeFromCart = (del_product) => {
    const filteredCart = cart.filter((ele) => ele.product.id !== del_product.id)
    setCart(filteredCart)
  }

// decrease the qunatity of the product in the cart
  const decreaseCount = (product) =>{
    const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0); // Remove items with count <= 0
    setCart(updatedCart);
  }

  const clearCart = (item) =>{
    setCart(item)
  }

  const product_data = { product, updateProducts, loading, updateLoading, categories, updateCategories, allProducts, updateAllProducts}
  const cart_data = { cart, addToCart, removeFromCart, decreaseCount, clearCart}

  return (
    <ProductContext.Provider value={product_data}>
      <CartContext.Provider value={cart_data} >
        {children}
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default Context