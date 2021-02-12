import React, { useEffect, useState } from 'react'

// components
import MainLayout from '../components/layout/MainLayout'
import ProductCardRow from '../components/products/ProductCardRow'

// antd
import { Select, Col, Row } from 'antd';

// redux
import { connect } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions'
const { Option } = Select;

const brands = ['almay','alva','anna sui','annabelle','benefit','boosh',"burt's bees",'butter london',"c'est moi",'cargo cosmetics','china glaze','clinique','coastal classic creation','colourpop','covergirl','dalish','deciem','dior','dr. hauschka','e.l.f.','essie','fenty','glossier','green people','iman',"l'oreal",'lotus cosmetics usa',"maia's mineral galaxy",'marcelle','marienatie','maybelline','milani','mineral fusion','misa','mistura','moov','nudus','nyx','orly','pacifica','penny lane organics','physicians formula','piggy paint','pure anada','rejuva minerals','revlon',"sally b's skin yummies",'salon perfect','sante','sinful colours','smashbox','stila','suncoat','w3llpeople','wet n wild','zorah','zorah biocosmetiques'];

const catgeories =["Powder", "Cream", "Pencil", "Liquid", "Gel", "Palette", "Concealer",
  "Contour", "Bb cc", "Mineral", "Highlighter", "Lipstick", "Lip gloss", "Lip stain"]

function Search(props) {
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchProducts()
  },[brand, category])
  
  const fetchProducts = () => {
    props.fetchProducts(brand,category)
  }
  return (
    <MainLayout>
      <Row>
        <h1>search your favorite brand</h1>
        <Col span={24}>
          <div className="flex text-3xl">
            <Select defaultValue={brands[0]} onChange={value => setBrand(value)}>
              {brands.map(brand => (
                <Option key={brand}>{brand}</Option>
              ))}
            </Select>
            <Select defaultValue={catgeories[0]} onChange={value => setCategory(value)}>
              {catgeories.map(catgeory => (
                <Option key={catgeory}>{catgeory}</Option>
              ))}
            </Select>
          </div>
        </Col>
        <Col span={24} className="mt-10 ">
          <Row >
            {
              props.search &&
              props.search.map((item, index) => {
                return <ProductCardRow key={index} data={item} />
              })
            }
          </Row>
        </Col>
      </Row>
    </MainLayout>
  )
}

const MapStateToProps = (state) => {
  return {
    search : state.productReducer.productList.data
  }
}

export default connect( MapStateToProps, { fetchProducts })(Search)

