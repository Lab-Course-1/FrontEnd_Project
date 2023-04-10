import React from 'react'
import "./BestSellers.css"
import ProductCard from '../ProductCard/ProductCard'

const BestSellers = () => {
    return (
        <section className='bestsellers'>
            <h1>BEST SELLERS</h1>
            <div className='products'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <button type='button' className='shop__all'>Shop All Products</button>
        </section>
    )
}

export default BestSellers