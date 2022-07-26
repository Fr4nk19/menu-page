import React from 'react'
const defImage = 'https://www.bocaolas.com/wp-content/uploads/2022/07/dishwhite.png';

const dishes = [
    {
        featImage : defImage,
        title : 'Fish Fillet',
        description : 'Grilled, garlic or breaded.',
        price : '$19.00',
    },
    {
        featImage : defImage,
        title : 'Fried Fish',
        description : 'Depending on availability, size and type of fish',
        price : '$20.00, $22.00, $24.00',
    },
    {
        featImage : defImage,
        title : 'Shrimps',
        description : 'Grilled, garlic or breaded.',
        price : '$23.00',
    },
    {
        featImage : defImage,
        title : 'Stuffed Fish',
        description : 'Stuffed with shrimp and calamari.',
        price : '$27.50',
    },
    {
        featImage : defImage,
        title : 'Butter Lobster',
        description : 'Lobster in menier butter or garlic.',
        price : '$27.00',
    }
]


export default function Traditional() {
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
