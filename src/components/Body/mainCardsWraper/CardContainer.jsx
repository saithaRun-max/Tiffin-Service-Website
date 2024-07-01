import React from 'react'
import ProductCard from './ProductCard'
import { restaurantsData } from '../../../utils/productsConstants';

const CardContainer = () => {
  
  return (
    <div className='flex flex-wrap mx-[10%] gap-6 mt-6'>
      {
        restaurantsData.map((restaurant,i)=> <ProductCard {...restaurant} key={i}/>)
      }
      
    </div>
  )
}

export default CardContainer
