import React, { useState, useEffect } from 'react'
import "./RecommendedProductSlider.css"
import axios from 'axios';
import { Variables } from '../../../Variables';
import { Slide } from 'react-slideshow-image';
import ProductCard from '../ProductCard/ProductCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const RecommendedProductSlider = () => {
    const [recommendedProducts, setRecommendedProducts] = useState([])
    useEffect(() => {
        if (!sessionStorage.getItem("jwtToken")) {
            return;
        }
        getRecommendedProducts()
    }, [])

    const getRecommendedProducts = async () => {
        try {
            const response = await axios.get(Variables.API_URL + `Product/GetRecommendedProducts?pageIndex=1&pageSize=10`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`,
                    },
                }
            );

            setRecommendedProducts(response.data);
        } catch (error) {
        }
    }
    return (
        <div className='recommended__products'>
            <h1 className='recommended_title'>Recommended products for you</h1>
            <Carousel showThumbs={false}
                dynamicHeight={false}
                showArrows={true}
                showStatus={false}
                centerMode={true}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                centerSlidePercentage={25}>
                {recommendedProducts.map((product) => (
                    <ProductCard product={product} key={product.id} isWishlist={false} />
                ))}
            </Carousel>
        </div>
    )
}

export default RecommendedProductSlider
