import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewItem from '../ReviewItem/ReviewItem';
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='text-3xl mt-3'>All Reviews: {reviews.length}</h1>
            {
                reviews.map(review => <ReviewItem
                    key={review.id}
                    item={review}
                ></ReviewItem>)
            }
        </div>
    );
};

export default Reviews;