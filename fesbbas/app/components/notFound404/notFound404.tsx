import styles from './notFound404.module.css';
import Link from "next/link";
import Image from 'next/image';

const NotFound404 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.textContainer}>
                <div className={styles.headerContainer}>
                    <h1 className='text-[36px] md:text-[48px] font-semibold text-[#051d41]'>Ova stranica još uvijek nije u funkciji. 😭</h1>
                </div>
                <p className='text-[18px] md:text-[22px] font-bold text-[#062757]'>Obećavamo da će uskoro biti, radimo na tome! 😊</p>
                <Link href="/" className='text-[14px] md:text-[16px] text-[#c7861e] uppercase'>Povratak na naslovnicu</Link>
            </div>
        </div>
    )
    
}

export default NotFound404;