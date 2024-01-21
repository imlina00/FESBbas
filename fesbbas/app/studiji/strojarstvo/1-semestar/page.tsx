"use client"
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './racunarstvo1sem.module.css'

export default function Racunarstvo() {
    const [search, setSearch] = React.useState("");

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className='flex flex-row'>
                    <p className='text-[36px] md:text-[48px] font-semibold text-[#e7ecf4]'>
                        <span className='text-[#e09721]'>STROJARSTVO 1. SEMESTAR</span>
                    </p>
                    {/* <form className='flex-shrink-0'>
                        <input type="text" placeholder="Traži" autoFocus value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    </form> */}
                </div>
                    <div className='font-bold mt-3 text-[20px] md:text-[22px] flex-shrink-0 text-left flex-wrap text-[#051d41]'>
                        <p>Ovdje se nalaze dostupne skripte za odabrani studij i semestar.</p>
                    </div>
                    

                    <div className='my-3 mr-[44%] text-[14px] md:text-[16px] flex-shrink-0 text-left flex-wrap text-[#051d41]'>
                        <p>Trenutno nisu dostupne skripte za odabrani studij i semestar. 😢</p>
                    </div>

                <Link href="/studiji" className='text-[14px] md:text-[16px] text-[#c7861e] uppercase'>Povratak na studije</Link>
            </div>
        </div>
    );
}
