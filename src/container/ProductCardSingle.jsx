import React, { useEffect } from 'react'

// redux
import { connect } from 'react-redux'
import { fetchSingleProducts } from '../redux/actions/productActions'
import { useParams } from "react-router-dom";

// components
import MainLayout from '../components/layout/MainLayout'

function ProductCardSingle(props) {
  let { id } = useParams();

  useEffect(() => {
    props.fetchSingleProducts(id)
  },[id])
  return (
    <MainLayout>
     { props.single 
        && 
        <>
          <img className="mx-auto" src={props.single.api_featured_image} alt={props.single.api_featured_image}/>
          <div className="p-5 pb-2 text-3xl capitalize text-left">
            <div className="mt-4">{props.single.name}</div>
            <div className="mt-4">brand: {props.single.brand}</div>
            <div className="mt-4">type: {props.single.product_type}</div>
            <p className="text-2xl pt-5">{props.single && props.single.description && props.single.description.substring(0, 60)}...</p>
          </div>
        </>
      }
    </MainLayout>
  )
}

const MapStateToProps = (state) => {
  return {
    single : state.productReducer.productSingle.data
  }
}

export default connect( MapStateToProps, { fetchSingleProducts })(ProductCardSingle)
