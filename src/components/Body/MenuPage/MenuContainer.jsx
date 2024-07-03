import React, { useContext } from 'react'
import MenuPage from './MenuPage'
import userContext from '../../../utils/userContext';

const MenuContainer = ({heading}) => {
  const {restaurantInfo} =useContext(userContext);
  return (
    <div>
      <MenuPage heading={heading} restaurantInfo={restaurantInfo}/>
    </div>
  )
}

export default MenuContainer
