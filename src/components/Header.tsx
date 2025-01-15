import Image from 'next/image'
import React, { useState } from 'react'
import { Button, Menu, MenuItem, Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaUser } from 'react-icons/fa';
import clsx from 'clsx';
import { useRouter } from 'next/router';

type Text ={
  // textColor?:string;
  className?:string
}

const Header: React.FC<Text> = ({className }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const route = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    console.log("Log Out clicked");
    handleClose();
  };

  const handleBasket = () => {
    console.log("Basket clicked");
    handleClose();
  };
  return (
    <>
       <div className='mx-10 flex items-center  justify-between gap-96'>
        <Image src='/logo.svg' alt='logo' width={150} height={100}/>
        <ul className='flex gap-10 items-center'>
        
          <li onClick={()=>route.push('/services')} className={clsx(className, 'font-semibold text-base cursor-pointer')}>Services</li>
          <li onClick={()=>route.push('/aboutUs')} className={clsx(className, 'font-semibold text-base cursor-pointer')}>About Us</li>
          <li onClick={()=>route.push('/contact')} className={clsx(className, 'font-semibold text-base cursor-pointer')}>Contact</li>
          <li onClick={()=>route.push('/faq')} className={clsx(className, 'font-semibold text-base cursor-pointer')}>FAQ</li>
          {/* <li>
          <Button
          className='text-black border-black rounded-full py-3 px-6'
        onClick={handleClick}
        variant="outlined"
        startIcon={<FaUser />}
        endIcon={<ArrowDropDownIcon />}
      >
        David Rosenberg
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleBasket}>Basket</MenuItem>
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      </Menu>
          </li> */}
          <li>
          <Button onClick={()=> route.push('/login')} variant="contained" className='normal-case font-sans bg-mainColor py-3 px-7 w-32'>Sign In</Button>

          </li>
        </ul>
       </div>
    </>
  )
}

export default Header