import React, { useState } from 'react'

// icons
import { BsHeart } from 'react-icons/bs'

// react-redux
import { connect, useSelector  } from 'react-redux'
import { 
  activeSIngleProduct, 
  deActiveSIngleProduct,
  getProductId
} from '../../redux/actions/productActions'
// components
import Title from '../public/Title'

function Product({data, dispatch }) {
  const openState = useSelector(state => state.productReducer.showProduct)
  
  const onOpen = () => {
    if(openState) {
      return dispatch(deActiveSIngleProduct())
    } else if(!openState) {
      return dispatch(activeSIngleProduct())
    }
  }

  return (
    <div id={data.id} onClick={() => dispatch(getProductId(data.id))} className="product-slider-container relative  cursor-pointer">
      <img onClick={() => onOpen()} className="product-slider-image" src={data.api_featured_image} alt={data.api_featured_image}/>
      <span className=" 
        text-red-500
        text-3xl
        absolute 
        bg-white 
        rounded-full 
        p-2 
        top-5 
        right-10" 
        onClick={() => alert('liked')}
        >
        <BsHeart />
      </span>
      <div className="pt-3 uppercase">
        <Title padding='pt-2' size={'text-2xl'} title={data.name} />
      </div>
      <span className="text-gray-700 text-2xl">${data.price}</span>
    </div>
  )
}

export default connect(null)(Product)
