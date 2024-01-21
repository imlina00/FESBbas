"use-client"
import React from 'react';
import pages from '@/app/enum/pages';

export const Feed = () => {
  
  const sortedPages = pages.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <section className='bg-[#062757]'>
      <div className='p-4 md:p-20 md:pb-0 relative pb-0' id="korisne-stranice">
        <div className='flex flex-col md:flex-col justify-between pb-8 md:pb-8'>
          <div className='md:w-1/2'>
            <p className='text-[36px] md:text-[48px] font-semibold max-sm:text-[36px] text-[#e7ecf4]'>
              <span className='text-[#e09721]'>Korisne stranice</span>
            </p>
          </div>
          <div className='flex flex-row md:w-1/2'>
            <p className='font-semibold pt-6 pl-0 text-[#e7ecf4] text-[20px] md:text-[22px]'>
              Pronašli smo nekoliko web stranica koje će ti biti korisne u radu i učenju. Preporučujemo ti da ih posjetiš!
            </p>
          </div>
        </div>

        <div className='relative width-128px flex flex-wrap justify-center md:justify-start pb-16'>
          {pages.map((item, index) => (
            <a
              key={index}
              className='  bg-[#041733] m-3 rounded-t-lg rounded-b-lg font-semibold text-[20px] md:text-[30px] py-2 px-3 md:py-2 md:px-4 text-[#e7ecf4] flex-shrink-0 flex-basis-50% hover:bg-[#c7861e] hover:text-[#e7ecf4]'
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};