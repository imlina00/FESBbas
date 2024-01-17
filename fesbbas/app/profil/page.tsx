"use-client"
import styles from './signin.module.css';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import logoImage from '/assets/icons/logo.png';
import Image from 'next/image';
import profileImage from '@/public/assets/icons/logo.png'

export default function MojProfil() {
    return (
        <div className={styles.container}>
                <div className={styles.loginBox}>
                    <div className={styles.centeredImage}  id="moj-profil">
                        <Image src={profileImage} alt="Icon" width={90} height={90} />
                    </div>
                    
                    <p className='text-[34px] md:text-[44px] font-semibold'>
                    <span className='text-[#e09721]'>MOJ PROFIL</span>
                    </p>
                    <div className='font-semibold mt-3 mb-6 text-[18px] md:text-[20px] flex-shrink-0 text-center text-[#062757]'>
                        <p>Prijavi se i pristupi svojim spremljenim skriptama.</p>
                    </div>
                    <form>
                        <input type="text" placeholder="Email" autoFocus  />
                        <input type="password" placeholder="Zaporka" />
                        <div className={styles.buttonContainer}>
                            <Link
                                href={{
                                    pathname: "/moj-profil",
                                }}
                                className={clsx(
                                    "rounded-3xl border bg-[#051d41] px-12 py-2  text-[#e7ecf4] hover:bg-[#e09721] hover:text-[#e7ecf4] text-xl text-center uppercase",
                                )}>
                                Prijavi se
                            </Link>
                        </div>

                        <div className={styles.signupContainer}>
                            <span>Nemaš profil?</span>
                            <Link href={'/registracija'}>
                                <p className={styles.signup}>Registriraj se</p>
                            </Link>
                        </div>
                        <div className='my-2'>
                        <Link href="/" className={styles.signup}>Povratak na naslovnicu</Link>
                        </div>  
                    </form>
                </div>
        </div>
    );
}