import React from 'react';
import Card from './Card';

const cardData = [
  {
    cardName: "Weed Removal",
    mainText: "Clearing gravesites of weeds and debris for a tidy appearance",
    bgImage: "card1.png",
    className: "w-[360px] h-[480px] bg-black"
  },
  {
    cardName: "Grave Location",
    mainText: "Assisting in finding and identifying loved ones' resting places",
    bgImage: "card2.png",
    className: "w-[360px] h-[360px] bg-black"
  },
  {
    cardName: "Stone Recoloring",
    mainText: "Restoring and enhancing gravestones with expert care",
    bgImage: "card3.png",
    className: "w-[360px] h-[480px] bg-black"
  },
  {
    cardName: "Rose Placement",
    mainText: "Placing fresh roses on graves to honor loved ones",
    bgImage: "card4.png",
    className: "w-[360px] h-[360px] bg-black"
  },
  {
    cardName: "Prayer Services",
    mainText: "Reciting prayers to honor and remember the departed",
    bgImage: "card5.png",
    className: "w-[360px] h-[480px] bg-black relative bottom-[100px]"
  },
  {
    cardName: "Stone Placement",
    mainText: "Placing stones on gravestones to honor the memory of loved ones",
    bgImage: "card6.png",
    className: "w-[360px] h-[360px]"
  }
];

function Services() {
  return (
    <div className='mt-32 mx-32'>
      <div className='text-center mb-10'>
        <h2 className='text-4xl'>Our services</h2>
        <p className='text-gray'>
          Preserving the Dignity and Beauty of Sacred Spaces with Expert Care
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 justify-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            cardName={card.cardName}
            mainText={card.mainText}
            bgImage={card.bgImage}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
