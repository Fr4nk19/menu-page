import React from 'react';
import Appetizers from './Appetizers';
import './css/GridMenu.css';
import Desserts from './Desserts';
import Extras from './Extras';
import Kids from './Kids';
import MainDishes from './MainDishes';
import Salads from './Salads';
import Soups from './Soups';
import Tipicos from './Tipicos';
import Traditional from './Traditional';



export default function GridMenu() {
  return (
    <>
                <div className="dish-content">
                  <Appetizers/>
                </div>

                 <div className="dish-content">
                  <MainDishes/>
                </div>

                 <div className="dish-content">
                  <Traditional/>
                </div>

                 <div className="dish-content">
                 <Soups/>
                </div>
              
                <div className="dish-content">
                  <Salads/>
                </div> 

                <div className="dish-content">
                  <Desserts/>
                </div> 

                <div className="dish-content">
                  <Tipicos/>
                </div> 

                <div className="dish-content">
                  <Kids/>
                </div> 

                <div className="dish-content">
                  <Extras/>
                </div> 
    </>
  );
}
