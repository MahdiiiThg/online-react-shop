import React, { useEffect, useState } from 'react';

// react-spring
import {useSpring, animated} from 'react-spring'

// react-redux
import { connect, useSelector  } from 'react-redux'

function Drawer(props) {
  // get state
  const openState = useSelector(state => state.productReducer.showProduct)
  
  // animation
  const expand = useSpring({
    config: { friction: 10 },
    height: props.openOption ? '380px' : '265px'
  });

  return (
    <div
        style={{transition: 'height 500ms eas-out',height: props.openOption ? `380px` : '265px' , boxShadow: '0px 0px 7px -2px black'}} 
        className="
          drawer
          z-10
          w-screen
          bg-gray-100
          min-w-full
          rounded-t-3xl
          fixed
          left-0
          bottom-0 
          transition-all
          ">
        <animated.div className="relative p-5">
          {props.children}
        </animated.div>
      </div>
  );
};

export default connect(null)(Drawer)