import React, { useState, useEffect } from 'react'

// react-redux
import { connect, useSelector  } from 'react-redux'
import { fetchProducts, fetchSingleProducts } from '../redux/actions/productActions'
// components
import ProductSingle from '../components/products/ProductSingle'
import ProductSlider from '../components/swipers/product-slider'
import MainLayout from '../components/layout/MainLayout'

// temp images
import pinkone from '../assets/images/pink.jpg'
import pinktwo from '../assets/images/pinktwo.png'

function Home(props) {
  console.log('props', props);

  const openState = useSelector(state => state.productReducer.showProduct)

  useEffect(() => {

    setTimeout(() => {
      return props.fetchProducts()
    }, 1000);

    // setTimeout(() => {
    //   return props.fetchProducts()
    // }, 1000);

  },[fetchProducts])

  const [products, setProducts] = useState([
    { id: 324, src: pinkone, productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 },
    { id: 325, src: pinktwo, productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 },
    { id: 322, src: pinkone, productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 },
    { id: 321, src: pinktwo, productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 }
  ])

  const [productSingle, setProductSingle] = useState(
    { id: 324 ,src: [ pinkone, pinktwo ], productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 },
  )

  return (
    <MainLayout>
      { 
        openState && 
          <ProductSingle data={productSingle} />
        }
        { !openState && 
          <>
            <div className="mt-10">
              <ProductSlider data={products} />
            </div>
            <div className="mt-10">
              <ProductSlider data={products} />
            </div>
          </>
        }
    </MainLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer
  }
}

export default connect(mapStateToProps, { fetchProducts })(Home)
