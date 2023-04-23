import React from 'react'
import "./SimpleAnalytics.css"

const SimpleAnalytics = () => {
    let percentage = -5;
    return (
        <div className='simple__analytics'>
            <div className='orders analytic' title='Show More'>
                <div className='order__logo__container'>
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </div>
                <div className='description'>
                    <p>ORDERS MADE</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: percentage < 0 ? "darkred" : "green" }} className='percentage'>{percentage}%</p>
                <p className='total'>3934</p>
            </div>
            <div className='new__products analytic' title='Show More'>
                <div className='products__logo__container'>
                    <span class="material-symbols-outlined">
                        inventory
                    </span>
                </div>
                <div className='description'>
                    <p>NEW PRODUCTS</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: percentage < 0 ? "darkred" : "green" }} className='percentage'>{percentage}%</p>
                <p className='total'>3934</p>
            </div>
            <div className='new__customers analytic' title='Show More'>
                <div className='customers__logo__container'>
                    <span class="material-symbols-outlined">
                        person_add
                    </span>
                </div>
                <div className='description'>
                    <p>NEW CUSTOMERS</p>
                    <h5>Last 24 hours</h5>
                </div>
                <p style={{ color: percentage < 0 ? "darkred" : "green" }} className='percentage'>{percentage}%</p>
                <p className='total'>3934</p>
            </div>
        </div>
    )
}

export default SimpleAnalytics