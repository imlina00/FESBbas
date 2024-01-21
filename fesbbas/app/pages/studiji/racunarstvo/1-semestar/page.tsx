"use client"
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './racunarstvo1sem.module.css'
import racunarstvo from '@/app/enum/studiji/racunarstvo/skripte';

import { GetStaticProps } from 'next';

import { createClient } from 'contentful'

// export async function getStaticProps() {

//     const client = createClient({
//         space: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// })
// const res = await client.getEntries({ content_type: 'skripta' })
// return { props: { skripta: res.items } };

// }

export default function Racunarstvo( {  } ) {

    const [search, setSearch] = React.useState("");
    const filtered = racunarstvo.filter((racunarstvo)=>racunarstvo.name.toLowerCase().includes(search.toLowerCase()))

    // dodati filtriranje po kolokviju/ispitu

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
            <div className='flex flex-row'>
            <p className='text-[36px] md:text-[48px] mr-[74%] font-semibold text-[#e7ecf4]'>
                    <span className='text-[#e09721]'>RAČUNARSTVO 1. SEMESTAR</span>
                </p>
                
                    
                    <form className='flex-shrink-0'>
                        <input type="text" placeholder="Traži" autoFocus value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    </form>
                    </div>
                    <div className='font-bold mt-3 mr-[44%] text-[20px] md:text-[22px] flex-shrink-0 text-left flex-wrap text-[#051d41]'>
                        <p>Ovdje se nalaze dostupne skripte za odabrani studij i semestar.</p>
                    </div>

                <div className={styles.rectangle}>
                    {filtered.map((item, index) => (
                        <a
                            key={index}
                            className='block font-semibold text-[20px] md:text-[30px] mx-3 p-5 md:p-8 text-[#e7ecf4] flex-shrink-0 flex-basis-50%'
                            href={item.link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <Link href="/studiji" className='text-[14px] md:text-[16px] text-[#c7861e] uppercase'>Povratak na studije</Link>
            </div>
        </div>
    );
}
