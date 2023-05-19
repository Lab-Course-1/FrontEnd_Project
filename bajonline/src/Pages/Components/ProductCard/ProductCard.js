import React from 'react'
import "./ProductCard.css"

const ProductCard = ({props}) => {
    const imageUrl = (props.imageUrl !== "string" || "") ? props.imageUrl : "Assets/pic1.png"
    return (
        <div className='product__card'>
            <img className='image' src={(imageUrl)} alt='pencil' />
            <p className='product__title'>{props.name}</p>
            <p className='product__price'><i>{props.price}  </i></p>
        </div>
    )
}

export default ProductCard