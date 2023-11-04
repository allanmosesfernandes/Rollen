import React from 'react'
import Header from '../components/Header'
import FirstFold from '../components/FirstFold'
import Landing from '../components/Landing'
import Skills from '../components/Skills'

const index = () => {
  return (
    <div className='container mx-auto'>
      <Header />
      <Landing />
      <FirstFold />
      <Skills />
    </div>
  )
}

export default index