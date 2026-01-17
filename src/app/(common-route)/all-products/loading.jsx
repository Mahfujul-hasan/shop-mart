import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import React from 'react';

const AllProductLoading = () => {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {Array(4)
        .fill()
        .map((_,i) => <ProductCardSkeleton key={i}/>)}
        </div>
    );
};

export default AllProductLoading