import React from 'react'
import Header from '../components/Header'
import FirstFold from '../components/FirstFold'
import Landing from '../components/Landing'

const index = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <Landing />
      <FirstFold />
    </div>
  )
}

export default index