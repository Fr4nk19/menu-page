import React from 'react'
import eloctopus from './assets/images/platillos/eloctopus.png';
import lomitoPimienta from './assets/images/platillos/lomitopimienta.png';
import salmon from './assets/images/platillos/salmon.png';
import udonMar from './assets/images/platillos/udonMar.png';
const defImage = 'https://via.placeholder.com/373x203?text=Feature+Image';

const dishes = [
    {
        featImage : eloctopus,
        title : 'Elocto-pus',
        description : '6oz grilled octopus in garlic butter.',
        price : '$25.00',
    },
    {
        featImage : defImage,
        title : 'Mareño',
        description : 'Fresh fish fillet served with coconut sauce, tostones and pinto rice.',
        price : '$22.00',
    },
    {
        featImage : defImage,
        title : 'Stuffed Fillet',
        description : '8oz fillet of grilled fish stuffed with shrimp in a white wine creamy sauce.',
        price : '$27.00',
    },
    {
        featImage : defImage,
        title : 'Surf and Turf',
        description : 'Grilled tenderloin fillet in a mushroom sauce paired with a fresh lobster tail and menier sauce.',
        price : '$25.00',
    },
    {
        featImage : salmon,
        title : 'Salmon',
        description : '8oz grilled salmon in dill butter.',
        price : '$29.00',
    },
    {
        featImage : defImage,
        title : 'Termidor Lobster',
        description : 'Lobster in white sauce with mushrooms.',
        price : '$30.50',
    },
    {
        featImage : defImage,
        title : 'Coco Shrimps',
        description : 'Crispy coconut breaded shrimp served over washed potato.',
        price : '$25.50',
    },
    {
        featImage : defImage,
        title : 'Almond Fillet',
        description : 'Fresh fish fillet in a butter and almond menier sauce.',
        price : '$20.00',
    },
    {
        featImage : udonMar,
        title : 'Udon Mar',
        description : 'Japanese noodle combined with shrimp, mussels, vegetables and hot sauce.',
        price : '$25.00',
    },
    {
        featImage : defImage,
        title : 'Linguini Veggie',
        description : 'With sauteed vegetables and roasted pepper sauce.',
        price : '$16.50',
    },
    {
        featImage : defImage,
        title : 'Fetuccinie al dente',
        description : 'Fetuccine al dente with fresh shrimp in a light olive oil and grilled pepper sauce.',
        price : '$18.00',
    },
    {
        featImage : defImage,
        title : 'Pacific Rice',
        description : 'Shrimps, calamari and mussels in a paella style.',
        price : '$20.50',
    },
    {
        featImage : defImage,
        title : 'Lomo a las hierbas',
        description : '8oz of grilled tenderloin medallions in white wine, fine herbs and butter sauce.',
        price : '$20.50',
    },
    {
        featImage : lomitoPimienta,
        title : 'Lomito Pimienta',
        description : '8oz of tenderloin fillet in a black pepper wine sauce.',
        price : '$20.50',
    },
    {
        featImage : defImage,
        title : 'Pacific Rice',
        description : 'Shrimps, calamari and mussels in a paella style.',
        price : '$20.50',
    },
    {
        featImage : defImage,
        title : 'Boca Olas Chicken',
        description : 'Boneless chicken breast in a ginger sauce or local alguashte sauce.',
        price : '$17.00',
    },
    {
        featImage : defImage,
        title : 'Lemon Chicken',
        description : 'Boneless chicken breast in a lemon sauce with rice and vegetables.',
        price : '$17.00',
    }
]

export default function MainDishes() {
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
