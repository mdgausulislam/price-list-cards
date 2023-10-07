import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 font-extrabold text-5xl'>{price.price}$</span>
                <span className='text-2xl text-white font-bold'>/product</span>
            </h2>
            <h5 className='text-2xl my-6 font-bold text-center'> {price.product}</h5>
            <p className='font-bold text-white underline '>Features: </p>
            {
                price.features.map((feature,idx)=><Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
             <button className='bg-green-500 hover:bg-green-700 mt-auto py-2 w-full rounded-md text-white font-bold'>Buy Now</button>

        </div>
    );
};

export default PriceCard;