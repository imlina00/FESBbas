"use client"
import styles from './studiji.module.css';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import heroItems from '@/app/enum/HeroSection'
import studiji from '@/app/enum/studiji';

export default function Studiji() {

    const [search, setSearch] = React.useState("");
    const filtered = studiji.filter((studij) => studij.name.toLowerCase().includes(search.toLowerCase()));
    const [selectedItem, setSelectedItem] = React.useState(null);

    return (
            <div className={`${styles.loginBox}`}>
                <p className='text-[36px] md:text-[48px] font-semibold text-[#e7ecf4]'>
                    <span className='text-[#e09721]'>STUDIJI</span>
                    </p>
                    <Link href="/" className='text-[14px] md:text-[16px] text-[#c7861e] uppercase'>Povratak na naslovnicu</Link>
                    <div className='font-bold mt-3 pb-4 text-[19px] md:text-[22px] flex-shrink-0 text-left flex-wrap text-[#051d41]'>
                        <p>Pronađi svoj studij i klikom na ime odaberi željeni semestar iz padajućeg izbornika.</p>
                    </div>
            <div className='flex md:flex-row flex-col'>
                {heroItems.map((item) => (
                <div key={item.id} 
                className=' w-full mx-12 md:mx-12'
                >
                            <div className='pt-7'>
                                        <div className={styles.centeredImage}>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={item.img} alt="Icon" width={130} height={130} />
                                            </a>
                                        </div>
                                <p
                                onClick={() => setSelectedItem(selectedItem === item.name ? null : item.name)}    
                                className={`font-bold mb-2 mt-7 md:text-[20px] text-[18px] text-[#e09721] md:text-center text-center uppercase cursor-pointer ${selectedItem === item.name ? styles.selectedItem : ''}`}
                                >
                                {item.name}
                                </p>             
                                {selectedItem === item.name && (
                                <div>
                                    {item.semester?.map((i) => (
                                    <a
                                    className='block text-[16px] md:text-[18px] mx-3 p-2 pt-0 md:pt-0 md:p-2 text-[#e09721] flex-shrink-0 flex-basis-50% md:text-center text-center'
                                    href={i.link}
                                    key={i.id}>
                                    {i.name}
                                    <br />
                                    </a>
                                    ))}
                                </div>
                                )}                                    
                            </div>
                    </div>
                    ))}
                </div>
            </div>
    );
}