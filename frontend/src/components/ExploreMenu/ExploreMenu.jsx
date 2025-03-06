/* eslint-disable no-unused-vars */
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat aperiam voluptatibus labore exercitationem architecto voluptas est, assumenda, quos,</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div

                            onClick={() => {
                                // Check if the clicked category is the same as the current category
                                if (category === item.menu_name) {
                                    // If yes, set the category to "All" (deselect)
                                    setCategory("All");
                                } else {
                                    // If no, set the category to the clicked item's name
                                    setCategory(item.menu_name);
                                }
                            }}

                            key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu