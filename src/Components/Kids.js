import React from 'react'

const defImage = 'https://www.bocaolas.com/wp-content/uploads/2022/07/dishwhite.png';

const dishes = [
    {
        featImage : defImage,
        title : 'Macaroni & Cheese',
        description : 'Pasta with cheese',
        price : '$9.00',
    },
    {
        featImage : defImage,
        title : 'Kiddy Burger',
        description : 'Beef or chicken, served with fries.',
        price : '$9.50',
    },
    {
        featImage : defImage,
        title : 'Chicken Finger or Fish Fingers',
        description : 'Grilled or breaded.',
        price : '$10.00',
    },
]

export default function Kids() {
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
