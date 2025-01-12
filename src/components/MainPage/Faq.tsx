import { Button } from '@mui/material'
import React from 'react'
import { FaSquareFull } from 'react-icons/fa'

function Faq() {
  return (
    <>
    <div className='flex items-center gap-2 bg-white w-16 px-2 rounded-md'><FaSquareFull color='red' size={8} /> FAQ</div>
    <div>
        <div>
            <h1 className='text-4xl font-bold'>You Asked.<br/>
            We Answered</h1>
            <p className='text-gray'>But if we didn't, just reach out to us and we'll be happy to answer <br/> your questions.</p>
          <Button  variant="contained" className='normal-case font-sans bg-mainColor py-3 px-7 w-32'>Call Us</Button>

        </div>
        <div></div>
    </div>
    
    </>
  )
}

export default Faq