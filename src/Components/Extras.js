import React from 'react'

const defImage = 'https://www.bocaolas.com/wp-content/uploads/2022/07/dishwhite.png';

const dishes = [
    {
        featImage : defImage,
        title : 'Bread',
        price : '$1.50',
    },
    {
        featImage : defImage,
        title : 'Garlic Bread',
        price : '$2.00',
    },
    {
        featImage : defImage,
        title : 'Rice',
        price : '$1.50',
    },
    {
        featImage : defImage,
        title : 'Fried Tortilla with Cheese',
        price : '$2.00',
    },
    {
        featImage : defImage,
        title : 'Mashed Potatoes',
        price : '$2.00',
    },
    {
        featImage : defImage,
        title : 'Avocado',
        price : '$2.00',
    },
    {
        featImage : defImage,
        title : 'Toasted Banana',
        price : '$2.50',
    },
    {
        featImage : defImage,
        title : 'Vegetables',
        price : '$2.50',
    },
    {
        featImage : defImage,
        title : 'Fresh Salad',
        price : '$2.50',
    },
]

export default function Extras() {
  return (
    <>
    {dishes.map((dish) =>  
        <div className='box_dish' key={dish.title}>
            <div className='image_dish'>
                <img src={dish.featImage} alt={dish.title}/>
            </div>
            <div className='desc_dish'>
                <h4>{dish.title}</h4>
                <span>{dish.price}</span>              
            </div>
        </div>
        )} 
    </>
  )
}
