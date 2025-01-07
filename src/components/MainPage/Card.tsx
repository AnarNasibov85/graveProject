import { Button } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

type CardProps = {
  cardName: string;
  mainText: string;
  bgImage: string;
  className: string;
};

const Card: React.FC<CardProps> = ({ cardName, mainText, bgImage, className }) => {
  return (
    <div
      className={clsx(className, 'relative flex flex-col justify-between')}
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', borderRadius: '10px', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 rounded-[10px] bg-black opacity-60"></div>

      <div className="relative p-6 text-white flex flex-col justify-between h-full">
        <div>
          <p>{cardName}</p>
          <h2>{mainText}</h2>
        </div>

        <div className="mt-auto">
          <Button variant="text" className="normal-case font-sans text-white text-base">
            <IoIosArrowDroprightCircle size={40} className='mr-3' />
            Organize service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
