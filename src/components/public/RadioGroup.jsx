import React from 'react'

// components
import Title from '../public/Title'

import { Radio } from 'antd'

export default function RadioGroup(props) {

  // radioStyle
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  
  return (
    <div className="w-32">
      <Title weight="font-light" title="Colors" />
      <Radio.Group onChange={props.onChange} value={props.value}>
        <div className="flex items-center py-2">
          <Radio style={radioStyle} value={'red'} />
          <div className=" ml-4 w-14 h-14 rounded-full bg-red-500"></div>
        </div>
        <div className="flex items-center py-2">
          <Radio style={radioStyle} value={'green'} />
          <div className=" ml-4 w-14 h-14 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center py-2">
          <Radio style={radioStyle} value={'purple'} />
          <div className=" ml-4 w-14 h-14 rounded-full bg-purple-500"></div>
        </div>
      </Radio.Group>
    </div>
  )
}
