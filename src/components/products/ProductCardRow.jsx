import React from 'react'

import { Col } from 'antd'
import { NavLink } from "react-router-dom";

export default function ProductCardRow({data}) {
  return (
    
      <Col l
        g={6} 
        md={8} 
        sm={12} 
        className="shadow-md w-full bg-white rounded-2xl overflow-y-hidden cursor-pointer m-3">
        <NavLink to={`/product/${data.id}`}>
        {
          data &&
          <>
            <img className="mx-auto h-96 w-full object-cover" src={data.api_featured_image} alt={data.api_featured_image}/>
            <div className="p-5 pb-2 text-3xl capitalize text-left">
              <div className="mt-4">{data.name}</div>
              <div className="mt-4">brand: {data.brand}</div>
              <div className="mt-4">type: {data.product_type}</div>
              <p className="text-2xl pt-5">{data && data.description && data.description.substring(0, 60)}...</p>
            </div>
          </>
        }
        </NavLink>
      </Col>
  )
}
