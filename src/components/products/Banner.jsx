import React from 'react'
// compoenets
import Title from '../public/Title'

export default function Banner({data}) {
  
  return (
    <div className="w-full m-20 shadow-sm">
      <Title title={data.name} />
    </div>
  )
}
