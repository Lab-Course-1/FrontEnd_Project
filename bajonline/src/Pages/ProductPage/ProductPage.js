import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import "./ProductPage.css"

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <div className='product__page'>
                <div className='left__part'>
                    <h2>Badfnsoidfbiusdfiubiubiusdbfiusbdiufbiusa sfbaiusbfiuasfia dgiudfuabdsiufbbasd isadfubdsaiufsad fisabfuaofbg iaef fdahsaiu</h2>
                </div>

                <div className='mid__part'>
                    <h2>Badfnsoidfbiusdfiubiubiusdbfiusbdiufbiusa sfbaiusbfiuasfia dgiudfuabdsiufbbasd isadfubdsaiufsad fisabfuaofbg iaef fdahsaiu</h2>
                </div>

                <div className='right__part'>
                    <div className='product__name'>
                        <h1 className='product__title'>Albion baba ne shitje</h1>
                        <p className='product__description'>Albioni paqarizi baba ne shitj baba ne shitj baba ne shitj baba ne shitj</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ProductPage  