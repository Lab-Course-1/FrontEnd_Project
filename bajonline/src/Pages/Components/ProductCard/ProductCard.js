import React from 'react'
import "./ProductCard.css"

const ProductCard = () => {
    return (
        <div className='product__card'>
            <img className='image' src={require("./Assets/pic1.png")} alt='pencil' />
            <p className='product__title'>Title: Im a product</p>
            <p className='product__price'><i>$250.00</i></p>
        </div>
    )
}

export default ProductCard