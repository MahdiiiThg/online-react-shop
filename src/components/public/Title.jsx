import React from 'react'

export default function Title(props) {
  return (
    <h4 className={`
      ${props.size ? props.size : 'text-3xl'}
      ${props.padding ? props.padding : 'p-0'}
      ${props.weight ? props.weight : 'font-bold'}
      ${props.upperCase ? 'uppercase' : 'capitalize'}
      `}>
      {props.title}
    </h4>
  )
}
