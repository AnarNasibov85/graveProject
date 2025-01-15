import Image from 'next/image'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoTimeOutline } from 'react-icons/io5'

function Footer() {
  return (
    <>
    <div className='bg-black mt-12'>
        <div className='flex items-center justify-between px-10'>
        <div>
        <Image src='/footlogo.svg' alt='logo' width={200} height={200}/>
        <p className='text-2xl font-normal text-white'>Professional Jewish Cemetery <br/> Cleaning Services</p>
        </div>
        <div className='flex gap-40'>
            <ul className='flex flex-col gap-3'>
                <li className='text-gray'>Company</li>
                <li className='text-white'>Services</li>
                <li className='text-white'>About Us</li>
                <li className='text-white'>FAQ</li>
            </ul>
            <ul className='flex flex-col gap-3'>
                <li className='text-gray'>Contact</li>
                <li className='text-white'>kladbishe.info@gmail.com</li>
                <li className='text-white'>+994 99 777 44 33</li>
            </ul>
            <ul className='flex flex-col gap-3'>
                <li className='text-gray'>Adress</li>
                <li className='text-white'><CiLocationOn /> 124 Avenue, Moscow, 1005</li>
                <li className='text-white'><IoTimeOutline />  08:00-17:00</li>
            </ul>
        </div>
        </div>
        
        <hr className='text-gray mt-10'/>
        <div className='text-gray flex items-center justify-between px-10 pt-6 pb-10'>
        <p >ALL RIGHTS RESERVED</p>
        <p>© 2024 KLADBISHE</p>

        </div>
    </div>
    </>
  )
}

export default Footer