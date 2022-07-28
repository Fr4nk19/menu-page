import React from 'react'
const defImage = 'https://via.placeholder.com/373x203?text=Feature+Image';

const dishes = [
    {
        featImage : defImage,
        title : 'Veggie Burger',
        description : 'Eggplant cheese and parsley patty served with sauteed mushrooms and caramelized onions.',
        price : '$10.00',
    },
    {
        featImage : defImage,
        title : 'Crunchy Tacos',
        description : '',
        price : '$9.50',
    },
    {
        featImage : defImage,
        title : 'Chicken',
        description : 'Grilled boneless chicken breast marinated in teriyaki sauce topped with caramelized onions',
        price : '$10.75',
    },
    {
        featImage : defImage,
        title : 'Fish',
        description : '5oz fresh fish fillet sauteed to perfection with grilled eggplant, carrot and zucchini on ciabatta bread.',
        price : '$11.50',
    },
    {
        featImage : defImage,
        title : 'Boca Olas Burger',
        description : 'Grilled beef patty topped with bacon and cheese, caramelized onions and mushrooms.',
        price : '$12.50',
    },
    {
        featImage : defImage,
        title : 'Steak Burger',
        description : '6oz seasoned grilled sirloin, bacon, mozarella cheese and mushrooms.',
        price : '$15.00',
    },
    {
        featImage : defImage,
        title : 'French Fries',
        description : 'All Sandwiches are served with French fries.',
        price : '$15.00',
    }
]
export default function Sandwiches() {
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
