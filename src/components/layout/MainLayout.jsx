import React from 'react'

// components
import Header from '../public/Header'
import NavBar from '../public/NavBar'

export default function MainLayout(props) {
  return (
    <div className="text-4xl bg-gray-200 min-h-screen">
      <Header title={props.title} />
      <main className="p-5 mb-20 md:mb-32 sm:p-10">
        {props.children}
      </main>
      <NavBar />
    </div>
  )
}
