import React from 'react'

const defImage = 'https://www.bocaolas.com/wp-content/uploads/2022/07/dishwhite.png';

const dishes = [
    {
        featImage : defImage,
        title : 'Ceviche Tropical',
        description : 'With troopicalk fruit, mixed bell peppers, red onion and cilantro with a citrus avocado sauce.',
        price : 'Shrimp $13.00, Fish $11.00, Mixed $13.50',
    },
    {
        featImage : defImage,
        title : 'Ceviche Tradicional',
        description : 'Red Onions, carrots, cilantro and rice wine vinegar.',
        price : 'Shrimp $13.00, Fish $11.00',
    },
    {
        featImage : defImage,
        title : 'Camarón Pink',
        description : 'Shrimp cocktail in pink sauce.',
        price : '$11.75',
    },
    {
        featImage : defImage,
        title : 'Washimi',
        description : 'Fish slices marinated in fine herbs.',
        price : '$19.00',
    },
    {
        featImage : defImage,
        title : 'Fried Fishes',
        description : 'Tiny fried fish with house sauce.',
        price : '$9.00',
    },
    {
        featImage : defImage,
        title : 'Zucchini Shrimp',
        description : 'Zucchini wrapped in shrimp with passion fruit sauce.',
        price : '$13.00',
    },
    {
        featImage : defImage,
        title : 'Camarón Bites',
        description : 'Bruschetas of ciabatta bread topped with shrimp.',
        price : '$13.00',
    },
    {
        featImage : defImage,
        title : 'Nachos Beef',
        description : 'Avocado, sour cream, chimole, chopped beef and refried beans.',
        price : '$14.00',
    },
    {
        featImage : defImage,
        title : 'Yuka',
        description : 'Crispy yucca with pork greaves.',
        price : '$14.50',
    },
    {
        featImage : defImage,
        title : 'Costillas de Cerdo',
        description : 'Pork with house seasoning.',
        price : '$17.00',
    },
    {
        featImage : defImage,
        title : 'Super Boca Mix',
        description : 'Grilled steak, breaded shrimp, fish and calamari.',
        price : '$24.00',
    },
    {
        featImage : defImage,
        title : 'Boca Pig',
        description : 'Seafood mixture with pork chop, chiken and onion rings.',
        price : '$25.00',
    }
]


export default function Appetizers() {
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
