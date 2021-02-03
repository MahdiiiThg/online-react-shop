import React, { useState } from 'react'

// react-redux
import { connect, useSelector  } from 'react-redux'

// components
import ProductSingle from '../components/products/ProductSingle'
import ProductSlider from '../components/swipers/product-slider'
import MainLayout from '../components/layout/MainLayout'

// temp images
import pinkone from '../assets/images/pink.jpg'
import pinktwo from '../assets/images/pinktwo.png'

function Home() {
  const openState = useSelector(state => state.productReducer.showProduct)

  const [products, setProducts] = useState([
    { src: pinkone, productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 },
    { src: pinktwo, productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 },
    { src: pinkone, productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 },
    { src: pinktwo, productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 }
  ])

  const [productSingle, setProductSingle] = useState(
    { src: [ pinkone, pinktwo ], productsName: ['Paper Bag', 'Bermuda Shorts'], price: 22.8 },
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

export default connect(null)(Home)
