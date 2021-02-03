import React, { useState } from 'react'

// react-transition
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// style
import './App.scss'

// react-spring
import {useSpring, animated} from 'react-spring'

// react-redux
import { connect, useSelector  } from 'react-redux'

// components
import MainLayout from './components/layout/MainLayout'

// container
import Home from './container/Home'
import ShoppingBasket from './container/ShoppingBasket'

// temp images
import pinkone from './assets/images/pink.jpg'
import pinktwo from './assets/images/pinktwo.png'

// react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const openState = useSelector(state => state.productReducer.showProduct)
  
  // animation
  const props = useSpring({opacity: 1, from: {opacity: 0}})

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
    < >
      
    </>
  )
}

export default connect(null)(App)