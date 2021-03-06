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
  const [products, setProducts] = useState()
  const [product, setProduct] = useState()
  const openState = useSelector(state => state.productReducer.showProduct)

  useEffect(() => {
    setTimeout(() => {
      props.fetchProducts()
      setProducts(props.products)
      return
    }, 1000);
    if(props.productId) {
      GetSingleProduct()
      setProduct(props.product)
    }
    return
  },[])

  const GetSingleProduct = () => {
    props.fetchSingleProducts(props.productId)
  }

  return (
    <MainLayout>
      { 
        openState 
        && 
        product && <ProductSingle data={product} />
      }
      {
        props.loading ? 
        <div>Loading</div> : 
        (
          !openState && 
            <>
              <div className="mt-10">
                {
                  products && <ProductSlider data={products} />
                }
              </div>
              {/* <div className="mt-10">
                <ProductSlider data={products} />
              </div> */}
            </>
        )
      }
    </MainLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.productList,
    product: state.productReducer.productSingle,
    productId: state.productReducer.productId,
    loading: state.productReducer.loading
  }
}

export default connect(mapStateToProps, { fetchProducts, fetchSingleProducts })(Home)
