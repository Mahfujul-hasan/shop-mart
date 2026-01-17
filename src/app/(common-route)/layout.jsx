import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const CommonLayout = async({children}) => {
    const session =await getServerSession(authOptions);
    return (
        <div className=''>
            <Navbar session={session}/>
            {children}
            <Footer/>
        </div>
    );
};

export default CommonLayout;