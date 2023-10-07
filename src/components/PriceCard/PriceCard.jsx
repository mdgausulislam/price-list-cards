import React from 'react';

const PriceCard = ({ price }) => {
    return (
        <div>
            <h2>
                <span className='text-purple-700 font-extrabold text-5xl'>{price.price}$</span>
                <span className='text-2xl'>/product</span>
            </h2>
            <h5 className='text-2xl font-bold'> {price.product}</h5>

        </div>
    );
};

export default PriceCard;