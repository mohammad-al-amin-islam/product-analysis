import React from 'react';

const ReviewItem = ({ item }) => {
    const { name, img, givenReview, review } = item;
    return (
        <div className='w-3/4 m-7 mx-auto rounded h-full bg-slate-100 p-3 shadow-md'>
            <div className='flex items-center'>
                <div className='w-14 h-14 mr-3'>
                    <img src={img} alt="" />
                </div>
                <div className='text-left'>
                    <h1 className='text-2xl te'>{name}</h1>
                    <p className='font-bold'>Given Ratings: {review}</p>
                </div>
            </div>
            <p className='text-left mt-1'>{givenReview}</p>
        </div>
    );
};

export default ReviewItem;