import React from 'react'
const defImage = 'https://www.bocaolas.com/wp-content/uploads/2022/07/dishwhite.png';

const dishes = [
    {
        featImage : defImage,
        title : 'Sopa de tortilla',
        description : 'With cron chips, cheese and avocado.',
        price : '$12.00',
    },
    {
        featImage : defImage,
        title : 'Crema de Cilantro',
        description : 'With herbs and croutons and butter.',
        price : '$12.00',
    },
    {
        featImage : defImage,
        title : 'Mariscada',
        description : 'Seafood broth, cream or natural.',
        price : 'Medium $12.00, Big $27.00',
    }
]
export default function Soups() {
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
