import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./ProductPage.css";

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <div className='product__page'>
                <div className='left__part'>
                    <ul className='details__list'>
                        <li>
                            <h2 className='button'>Description</h2>
                        </li>
                        <li>
                            <h2 className='button'>Material</h2>
                        </li>
                        <li>
                            <h2 className='button'>Pack</h2>
                        </li>
                        <li>
                            <h2 className='button'>Packaging</h2>
                        </li>
                        <li>
                            <h2 className='button'>Product FAQ</h2>
                        </li>
                        <li>
                            <h2 className='button'>Reviews</h2>
                        </li>
                    </ul>
                </div>

                <div className='mid__part'>
                    <img src="/public/product1.png" alt="Product Image" className="product__image" />
                </div>

                <div className='right__part'>
                    <div className='product__name'>
                        <h1 className='product__title'>Name Of Product</h1>
                        <p className='product__description'>Description of product: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <hr className='section__divider' />
                    <div className='color__selection'>
                        <p className='button'>colors</p>
                        <ul className='color__list'>
                            <li className='color__item red'>Red</li>
                            <li className='color__item green'>Green</li>
                            <li className='color__item brown'>Brown</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage;
