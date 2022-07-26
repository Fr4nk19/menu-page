import React from 'react'

const defImage = 'https://www.bocaolas.com/wp-content/uploads/2022/07/dishwhite.png';

const dishes = [
    {
        featImage : defImage,
        title : 'Cheesecake',
        description : 'With strawberry jam.',
        price : '$5.00',
    },
    {
        featImage : defImage,
        title : 'Ice Cream',
        description : 'Vanilla ice cream scoops with cherry and chocolate or strawberry topping.',
        price : '$5.00',
    },
    {
        featImage : defImage,
        title : 'Pastel Triple chocolate con caramelo',
        description : '',
        price : '$5.95',
    },
    {
        featImage : defImage,
        title : 'Hawaian Ice Cream',
        description : '',
        price : '$6.00',
    },
    {
        featImage : defImage,
        title : 'Banana Olas',
        description : 'Vanilla ice creamwith banana, whipped cream and cherry with orco topping.',
        price : '$6.00',
    },
    {
        featImage : defImage,
        title : 'Brownie a la moda $6.50',
        description : 'Home made brownie topped with vanilla ice cream.',
        price : '$6.50',
    },
]

export default function Desserts() {
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
