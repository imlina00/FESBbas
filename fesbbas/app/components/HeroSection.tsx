import React from 'react'
import heroItems from '@/app/enum/HeroSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { Header } from '../components/Header'
import Link from 'next/link'
import styles from './help.module.css'
import MyComponent from './gumb/MyComponent';


const Hero = () => {
  return (
    <>
      <div style={{ backgroundImage: 'url(../assets/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>   
          <Header />
          <div className='p-4 md:p-20 text-[#e7ecf4]'>
            <div className='text-[36px] md:text-[48px] font-semibold max-sm:text-[36px] text-[#e09721]'>
                <p>Dobro došli!</p>
            </div>
            <div className='font-semibold mt-3 text-[20px] md:text-[22px] text-left'>
                <p>Zapeo si s učenjem? Propustio predavanja i sad ne znaš kako dalje? 
                Ova stranica je prava za tebe! Dobro došli na mjesto gdje ćete pronaći 
                sve materijale koji su potrebni za uspješno studiranje na Fakultetu elektrotehnike,
                strojarstva i brodogradnje. Spremni za izazov? Ova stranica je vodič prema uspjehu.
                </p>
                
            </div>

            <div>
              <MyComponent />
            </div>

          </div>
      </div>
      <div className='bg-[#e7ecf4]'>
        <div className='p-4 md:p-20 text-[#062757]'>
          <div className='flex flex-col md:flex-row justify-between pb-4 md:pb-6'>
            <div className='md:w-1/2'>
              <p className='text-[36px] md:text-[48px] font-semibold max-sm:text-[36px]'>
                Odaberi svoj<br />
                <Link href="/studiji" className='text-[#e09721]'>STUDIJ</Link>
                {/* <span className='text-[#e09721]'>STUDIJ</span> */}
              </p>

            <p className='font-bold mt-3 text-[20px] md:text-[22px]'>Potrudili smo se postaviti materijale za sve! Pronađi predmete
            koji ti trebaju grupirane po studiju i semestru. 😊</p>

            </div>
          </div>
          <div className='flex '>
            {heroItems.map(item => (
              <div key={item.id} className='px-2 w-full md:w-1/2 lg:w-1/3'>
                <div className='flex py-2'></div>
                <div>
                  <div className='py-2'>
                    <div className='flex items-center'>
                      <div className={styles.icon}>
                        <div className={styles.centeredImage}>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <Image src={item.img} alt="Icon" width={130} height={130} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero