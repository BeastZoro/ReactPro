import React, { useEffect } from 'react'
import { ProductContext } from '../Context'
import { useContext } from 'react'
import SingleProduct from '../components/SingleProduct'

const Home = () => {

    const { product, updateProducts, updateCategories, updateAllProducts, allProducts } = useContext(ProductContext)
    const { loading, updateLoading } = useContext(ProductContext)


    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            updateAllProducts(data.products)
            updateProducts(data.products)
            updateLoading(false)
            const allCategories = ['all', ...new Set(data.products.map((ele) => ele.category))]
            updateCategories(allCategories)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2 className='text-3xl text-gray-500 text-center my-3 md:text-4xl'>Products</h2>
            <section className='max-w-7xl gap-7 md:grid grid-cols-3  mx-auto px-8'>
                {
                    product.map((ele, index) => {
                        return (
                            <SingleProduct key={ele.id} product={ele} />
                        )
                    })
                }
            </section>
        </>
    )
}

export default Home


