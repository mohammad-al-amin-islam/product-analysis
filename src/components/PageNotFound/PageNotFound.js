import React from 'react';
import ErrorImg from '../../image/error-404.jpg'
const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center my-20'>
            <img className='h-96 w-2/4' src={ErrorImg} alt="" />
        </div>
    );
};

export default PageNotFound;