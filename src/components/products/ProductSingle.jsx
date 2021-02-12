import React, { useState } from 'react'

// ant
import { Row, Col, Button, Radio, Space, Input } from 'antd';

// react-spring
import {useSpring, animated} from 'react-spring'

// react-redux
import { connect, useSelector  } from 'react-redux'
import { deActiveSIngleProduct } from '../../redux/actions/productActions'

// icons
import { AiOutlineClose } from 'react-icons/ai'

// components
import Drawer from '../public/Drawer'
import SliderVertical from '../swipers/vertical-slider'
import Title from '../public/Title'
import RadioGroup from '../public/RadioGroup'

function ProductSingle({data,dispatch}) {
  // get state
  const openState = useSelector(state => state.productReducer.showProduct)

  // animation
  const fadein = useSpring({opacity: 1, from: {opacity: 0}, config: { duration: 700 } })

  const [openOption, setOpenOption] = useState(false)

  // deActive single Product
  const onOpen = () => {
    if(openState) {
      return dispatch(deActiveSIngleProduct())
    }
  }

  // drawer
  const onClose = () => {
    return setOpenOption(!openOption)
  }

  let images = [data.api_featured_image, data.image_link]

  return (
    <Row className="relative dialog relative" >
      <AiOutlineClose 
          onClick={onOpen} 
          className="
            absolute 
            top-10 
            right-10 
            z-50 
            text-red-700 
            font-bold 
            bg-white 
            w-16 
            h-16 
            rounded-full 
            cursor-pointer"
            />
      <animated.div style={fadein}>
      <Col span={24} className="flex justify-center">
       <SliderVertical>
         {  
           data &&
           images.map((image, index) =>{
            
             return (
              <img src={image} key={index} alt=""/>
             )
           })
         }
        </SliderVertical>
      </Col>
      </animated.div>
      <Col span={24}>
        <Drawer openOption={openOption}>
          <div className="relative flex justify-between p-5 w-full">
            <div 
              onClick={onClose} 
              style={{top: '-3px'}} 
              className="
                text-left
                opacity-30
                h-5
                absolute 
                left-0 
                right-0
                px-32
                w-32
                mx-auto
                rounded-3xl
                bg-black
                ">
            </div>
            <div >
              <Title 
                padding="py-3" 
                size="text-4xl" 
                title={data.name} 
                />
              <Title 
                padding="py-3" 
                size="text-4xl" 
                title={data.brand}
                />
              <span className="text-gray-700 pt-4 block">${data.price}</span>
              <Title 
                weight="font-light" 
                padding="py-3" 
                size="text-3xl" 
                title={'Your size'}
                />
            </div>
            <div className=" max-h-96 overflow-y-scroll">
              {
                data.product_colors.map(color => {
                  return <div style={{background: color.hex_value}} className={`h-20 w-20 rounded-full my-2`}></div>
                })
              }
            </div>
          </div>
          <div className="mt-10 w-full text-center">
            <button className="bg-black px-20 py-5 rounded-3xl text-white mx-auto text-4xl" >Add to basket</button>
          </div>
        </Drawer>
      </Col>
      
    </Row>
  )
}

export default connect(null)(ProductSingle)