import React from 'react';
import Link from 'next/link';
import footerItems from '@/app/enum/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebookSquare,
//   faInstagramSquare,
//   faTwitterSquare,
//   faDiscord
// } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className='bg-[#e7ecf4]'>
      <div className='flex flex-row justify-center md:flex-row  text-[#051d41]'>

        <div className='flex flex-wrap md:flex-row flex-col p-4 items-center text-center text-[14px] md:p-8'>
          {footerItems.map((item) => (
            <div className="p-1" key={item.id}>
              <Link className="font-medium p-8" href={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>

      </div>
     {/* <div className='flex justify-center pb-4 md:pb-6'>
        <FontAwesomeIcon className='px-6 md:px-10' icon={faFacebookSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-6 md:px-10' icon={faInstagramSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-6 md:px-10' icon={faTwitterSquare} size='2x' color='#F2E863' />
        <FontAwesomeIcon className='px-6 md:px-10' icon={faDiscord} size='2x' color='#F2E863' />
          </div> */}

{/*       <div className='flex justify-center font-thin text-[10px] md:text-[12px] italic text-black'>
        Copyright @ 2023 FESB. All rights reserved.
          </div>*/}
    </section>
  );
};

export default Footer;