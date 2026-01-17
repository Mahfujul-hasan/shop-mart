import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href={"/"}>
        <Image 
        src={logo} 
        alt='web logo' 
        width={200} 
        height={100}
        className='w-45'
        loading='eager'/>
            
        </Link>
    );
};

export default Logo;