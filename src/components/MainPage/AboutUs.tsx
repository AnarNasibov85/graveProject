import Image from 'next/image'
import React from 'react'
import { FaSquareFull } from 'react-icons/fa'

function AboutUs() {
  return (
    <>
    <div className='flex items-center gap-2 bg-white w-28 px-2 rounded-md'><FaSquareFull color='red' size={8} /> ABOUT US</div>
    <div className='flex items-center justify-between '>
        <h1 className=' text-5xl'>Honoring Tradition,<br/> Preserving Memories</h1>
        <p>We provide respectful and professional Jewish cemetery care, including <br/> grave maintenance, restoration, and tribute services.<br/>
        Our mission is to honor traditions while preserving the dignity and peace<br/> of sacred spaces.</p>
    </div>
    <div className='flex justify-between'>
        <Image src='/about1.png' alt='about1' width={200} height={200} className='w-[660px] h-[280px] rounded-md'/>
        <Image src='/about2.png' alt='about2' width={200} height={200} className='w-[660px] h-[280px] rounded-md'/>
    </div>
    </>
  )
}

export default AboutUs