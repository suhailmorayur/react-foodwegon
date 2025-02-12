import React from 'react';

function OfferCard(props) {
    const products = props.product
    console.log(products)
    return (
        <div className='flex flex-col gap-3'>
        <img className='rounded-xl w-full sm:w-64 md:w-80 lg:w-96 h-auto object-contain' src= {products.image} alt="" />
        <h2>
            {
                products.title
            }
        </h2>
        <div>
        <span className='font-bold bg-orange-200 rounded-lg p-1 text-orange-600'> {products.offer} </span>

        </div>
        </div>
      
    );
}

export default OfferCard;