import React from 'react'
import { GrDocumentPdf } from 'react-icons/gr'

const YellowButton = () => {
  return (
    <button className='md:w-[200px] group p-4 text-md bg-rol-yellow border-2 border-rol-yellow font-geistSemiBold text-black rounded-md transition-hover ease-in-out duration-300 hover:border-white hover:bg-transparent hover:text-rol-yellow flex items-center gap-3 justify-center md:justify-normal'>
      <GrDocumentPdf size={20} />
      Download CV</button>
  )
}

export default YellowButton