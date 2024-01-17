"use client"
import React from 'react';

const MyComponent = () => {

  const handleButtonClick = () => {
    window.location.href = '/profil';
  };

  return (
    <div className='pt-6 pb-0 md:pt-6'>
      <button
        className='my-4 md:my-10 pl-6 md:pl-8 pr-6 md:pr-8 py-2 md:py-4 bg-[#e09721] rounded-lg text-[#062757] text-[20px] md:text-[22px] 
        hover:bg-[#c7861e] hover:text-[#e7ecf4] font-bold'
        onClick={handleButtonClick}
      >
        Moj profil
      </button>
    </div>
  );
};

export default MyComponent;
