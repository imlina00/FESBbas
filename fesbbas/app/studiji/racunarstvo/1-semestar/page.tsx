"use client"
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './racunarstvo1sem.module.css'
import racunarstvo from '@/app/enum/studiji/racunarstvo/skripte';

import { useEffect, useState } from 'react'; 
import { GetStaticProps } from 'next';
import { createClient } from 'contentful'

export type SearchParams = {
    searchParams: Record<string, string | string[] | undefined>;
  };

export default function Racunarstvo( {  } ) {

    const [scripts, setScripts] = useState<any[]>([]);
    const client = createClient({ accessToken: '1MqPo2Q3F6idTenEKwxJDdFLbube_KwUAvL2kpk8_Jg', space: 'jz01qyepm1rn' });
  
    useEffect(() => {
      const getAllEntries = async () => {
        try {
          const entries = await client.getEntries();
          setScripts(entries.items);
          console.log(entries)
        } catch (error) {
          console.error("Error fetching scripts:", error);
        }
      };
  
      getAllEntries();
    }, []);

    const [search, setSearch] = React.useState("");
    // const filtered = scripts.filter((scripts)=>scripts.fields.naslov.toLowerCase().includes(search.toLowerCase()))

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredScripts = scripts.filter((script) => (
        script.fields.naslov.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory ? script.fields.kategorija === selectedCategory : true)
      ));
    
      const uniqueCategories = Array.from(new Set(scripts.map((script) => script.fields.kategorija)));
    
      const sortedScripts = filteredScripts.slice().sort((a, b) => {
        const titleA = a.fields.naslov.toLowerCase();
        const titleB = b.fields.naslov.toLowerCase();
      
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });


    return (

        <div>

        
        <div className={styles.container}>
            <div className={styles.loginBox}>
            <div className='flex flex-row'>
            <p className='text-[36px] md:text-[48px] font-semibold text-[#e7ecf4]'>
            {/* mr-[74%]  */}
                    <span className='text-[#e09721]'>RAČUNARSTVO 1. SEMESTAR</span>
                </p>
                
                    
                    {/* <form className='flex-shrink-0'>
                        <input type="text" id="searchInput" placeholder="Traži predmete" autoFocus value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    </form> */}
                    </div>
                    
                    <div className='font-bold mt-3 text-[20px] md:text-[22px] flex-shrink-0 text-left text-[#051d41]'>
                        <p>Ovdje se nalaze dostupne skripte za odabrani studij i semestar.</p>

                        
                    </div>    
     
                    <div className='text-[18px] md:text-[20px] text-[#c7861e] pt-5'>
                    {uniqueCategories.map((category, index) => (
                        <React.Fragment key={category}>
                        <button
                            onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                        >
                            {category.toUpperCase()}
                        </button>
                        {index < uniqueCategories.length - 1 && <span className="mx-2">|</span>}
                        </React.Fragment>
                    ))}
                    {uniqueCategories.length > 0 && <span className="mx-2">|</span>} {/* Razmak između kategorija i "Poništi odabir" */}
                    <button onClick={() => setSelectedCategory(null)}>
                        PONIŠTI ODABIR
                    </button>
                    </div>

                <div className={styles.rectangle}>
                    {sortedScripts.map((item, index) => (
                        <a
                            key={item.sys.id}
                            className='block font-semibold text-[20px] md:text-[30px] mx-3 p-5 md:p-8 text-[#e7ecf4] flex-shrink-0 flex-basis-50%'
                            href={item.fields.link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                        {item.fields.naslov}
                        {/* <p>, </p> */}
                        {item.fields.kategorija}
                        {/* <div>
                        {item.fields.opis}
                        </div> */}
                        </a>
                    ))}
                </div>

                {/* )} */}

                <Link href="/studiji" className='text-[14px] md:text-[16px] text-[#c7861e] uppercase'>Povratak na studije</Link>
            </div>
        </div>
        </div>
    );
}
