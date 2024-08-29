import React from 'react'
import { Header } from './Header'

export const HomePage = () => {
  return (
    <div className='bg-white'>
      <div className='container'>
        <Header />
        <h1 className='font-bold text-center mt-10'>Welcome to the Home Page</h1>
      </div>
    </div>
  )
}
