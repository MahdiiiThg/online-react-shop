import React from 'react'

// components
import MainLayout from '../components/layout/MainLayout'
import Title from '../components/public/Title'

// antd
import { Row, Col } from 'antd'

// icons
import { AiFillCloseCircle } from 'react-icons/ai'
// image
import image from '../assets/images/pink.jpg'

export default function ShoppingBasket() {
  return (
    <MainLayout title="Shopping Basket">
      <Row>
        <Col span={24}>
          <div className="flex p-5 my-5 shadow-md relative bg-white">
            <div className="
              text-6xl
              absolute 
              top-0
              right-0">
              <AiFillCloseCircle />
            </div>
            <div style={{height: '120px', width:'90px'}}>
              <img className="object-cover w-full h-full" src={image} alt=""/>
            </div>
            <div className="grid content-between pl-10">
              <div>
                <Title upperCase size="text-3xl" title="paper bag"/>
                <Title padding={'pt-3'} upperCase size="text-3xl" title="pink skert"/>
              </div>
              <div className="py-4 text-gray-400">
                <span>id: 472956</span> / <span> red </span> / <span> S </span>
              </div>
              <span className="text-gray-700 text-3xl font-bold block pb-5">$234</span>
            </div>
          </div>
        </Col>

        <Col span={24}>
          <div className="flex p-5 my-5 shadow-md relative bg-white">
            <div className="
              text-6xl
              absolute 
              top-0
              right-0">
              <AiFillCloseCircle />
            </div>
            <div style={{height: '120px', width:'90px'}}>
              <img className="object-cover w-full h-full" src={image} alt=""/>
            </div>
            <div className="grid content-between pl-10">
              <div>
                <Title upperCase size="text-3xl" title="paper bag"/>
                <Title padding={'pt-3'} upperCase size="text-3xl" title="pink skert"/>
              </div>
              <div className="py-4 text-gray-400">
                <span>id: 472956</span> / <span> red </span> / <span> S </span>
              </div>
              <span className="text-gray-700 text-3xl font-bold block pb-5">$234</span>
            </div>
          </div>
        </Col>
      </Row>
    </MainLayout>
  )
}
