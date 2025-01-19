import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Input } from '@mui/material'
import React from 'react'

function services() {
  return (
    <div className="h-[320px] bg-black text-white">
      <Header />
      <div className="w-full flex flex-col items-center mt-6">
        <h1 className="w-[600px] text-center text-white font-[Messina Sans] text-[32px] font-semibold">
          Enter the Name for Grave Site Inquiry
        </h1>
        <div className="mt-6">
          <Input
            placeholder="Enter name"
            sx={{
              width: '720px',
              height: '64px',
              borderRadius: '40px',
              backgroundColor: 'white',
              color: 'black',
              padding: '0 20px',
              '& .MuiInputBase-input': {
                borderRadius: '40px',
                textAlign: 'center',
              },
            }}
          />
        </div>
      </div>
      <Footer/>
    </div>
      
  )

}

export default services
