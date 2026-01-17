import React from 'react';
import bannerImg from '@/assets/banner.png'
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='mt-5 h-[70vh] relative'>
            <Image src={bannerImg} alt='Shop Mart Banner' fill className='object-cover' priority/>
            <div className='absolute inset-0 z-10 bg-linear-to-r from-black/50 to-transparent flex justify-start items-center h-full overflow-auto'>
            <div className='text-foreground px-4 md:px-10 w-[70%] md:w-[50%] space-y-5'>
                <h3 className='text-3xl md:text-5xl font-bold'>Experience the Joy of <br className='hidden md:flex' /><span className='text-secondary'>Smart Shopping</span></h3>
                <p className='text-muted-foreground text-sm md:text-xl font-medium'>Handpicked products, guaranteed quality, and seamless delivery for a better shopping experience.</p>
                <Link href={"/all-products"}><Button variant='secondary' className={"font-medium h-12 text-xl px-5"}>Shop Now</Button></Link>
            </div>

            </div>
            
            
        </div>
    );
};

export default Banner;