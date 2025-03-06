/* eslint-disable no-unused-vars */

import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


// category passed in Fooddisplay will change every time we select / deselect any category 
// we have all items with their categories stores in foodlist
// now when category is changed , we need to re render Fooddisplay with the changed category
// so we map foodlist.map to loop through all the items and we render those items who have category==="ALL"(means no category selected )
// or we will render items with category as that of selected one (when we have pressed any category)

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext)
  return (
    <div className='food-dsiplay' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {

          if (category === "All" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

          }

        })}
      </div>
    </div>
  )
}

export default FoodDisplay