import React from 'react'

const defImage = 'https://via.placeholder.com/373x203?text=Feature+Image';

const dishes = [
    {
        featImage : defImage,
        title : 'Ensalada Cítrica',
        description : 'Mixed greens tossed with orange, avocado, cherry tomatoes and candied peanuts in a balsamic vinaigrette.',
        price : '$12.00',
    },
    {
        featImage : defImage,
        title : 'Cesar Salad',
        description : 'With grilled chicken or shrimp(+$4.00)',
        price : '$13.00',
    },
    {
        featImage : defImage,
        title : 'Ensalada Cobb',
        description : 'Mixed greens, tomatoe, bacon pieces, grilled chicken, egg, avocado and cheddar cheese.',
        price : '$15.00',
    }
]

export default function Salads() {
  return (
    <>
        {dishes.map((dish) =>  
        <div className='box_dish' key={dish.title}>
            <div className='image_dish'>
                <img src={dish.featImage} alt={dish.title}/>
            </div>
            <div className='desc_dish'>
                <h4>{dish.title}</h4>
                <p>{dish.description}</p>
                <span>{dish.price}</span>              
            </div>
        </div>
        )}  
    </>
  )
}
