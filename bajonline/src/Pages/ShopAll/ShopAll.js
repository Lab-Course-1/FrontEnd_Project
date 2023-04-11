import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ProductCard from '../Components/ProductCard/ProductCard'
import "./ShopAll.css"

const ShopAll = () => {
    return (
        <>
            <Navbar />
            <div className='shop__all'>
                <h1 className='title'>SHOP ALL</h1>
                <div className='filters__and__products'>
                    <aside className='filters'>
                        <h1>Filter by</h1>
                        <hr />
                        <div className='category'>
                            <p>Category</p>
                            <h3>All</h3>
                            <ul>
                                <li>PhoneCases</li>
                                <li>Mini Leather</li>
                                <li>Leather Belts</li>
                                <li>Best SELLERS</li>
                                <li></li>
                            </ul>
                            <p></p>
                        </div>
                        <hr />
                        <div className='price'>
                            <input className='from' type='number' name='from' placeholder='2' />
                            <p>to</p>
                            <input className='from' type='number' name='to' placeholder='102' />
                        </div>
                    </aside>
                    <div className='products'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShopAll