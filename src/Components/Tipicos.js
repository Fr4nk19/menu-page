import React from 'react'

const defImage = 'https://www.bocaolas.com/wp-content/uploads/2022/07/dishwhite.png';

const dishes = [
    {
        featImage : defImage,
        title : 'Salvadorean Dinner',
        description : '4oz meat, eggs, beens, plantains, cheese and avocado.',
        price : '$10.50',
    },
    {
        featImage : defImage,
        title : 'Tipico Guanaco',
        description : '2oz of Yuca, 2 corn fritters stuffed with meat, 2 pupusas.',
        price : '$5.00',
    }
]


export default function Tipicos() {
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
