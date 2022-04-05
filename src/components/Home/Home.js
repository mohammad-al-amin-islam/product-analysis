import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Img from '../../image/book.jpg'
import ReviewItem from '../ReviewItem/ReviewItem';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const someReviews = reviews.slice(0, 3);

    return (
        <div className='bg-slate-50'>
            <div className='md:flex justify-between mb-15 p-7 text-left'>
                <div className='flex justify-center flex-col'>
                    <h1 className='text-6xl font-bold text-blue-500'>Read The Best Book</h1>
                    <p className='font-bold text-slate-400 my-4'>Get relief from the hasitation of choosing books for reading.Get the list of books with the reviews and make decisions</p>
                    <button className="rounded-full bg-fuchsia-900 w-24 py-2 text-white font-bold"> Live Demo</button>
                </div>
                <div>
                    <img src={Img} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-4xl'>Book Reviews:{someReviews.length}</h1>
                {
                    someReviews.map(review => <ReviewItem
                        key={review.name}
                        item={review}></ReviewItem>)
                }
                <div className='my-10'>
                    <Link to='/reviews' className='bg-gray-600 p-4 my-10 rounded text-white'>See all reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;