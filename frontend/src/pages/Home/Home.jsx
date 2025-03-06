/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />

      {/* intitally , ALL and setcat func is sent as prop to explorehomemenu
      all items are rendered intially
      means for fooddislay (prop is category which is initially ALL)
      but when any category is selected , setcat func , sets category value to that of clicked one (oneclick func in exploremenu)
      so at the same time , prop of fooddisplay , also changes to the selected category and it now shows the foods of the selected category */}

      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />

    </div>
  )
}

export default Home