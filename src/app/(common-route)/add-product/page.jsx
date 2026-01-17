import ProductForm from '@/components/ProductForm';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const page = async() => {
    const session = await getServerSession(authOptions);
    return (
        <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg my-10">
            <h1 className="text-3xl font-bold mb-10 text-center text-secondary">Add New Product</h1>

            <ProductForm session={session}/>
            
        </div>
    );
};

export default page;