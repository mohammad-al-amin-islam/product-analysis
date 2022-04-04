import React from 'react';
import Img from '../../image/book.jpg'

const Home = () => {
    return (
        <div className='flex justify-between p-7 text-left'>
            <div className='flex justify-center flex-col'>
                <h1 className='text-6xl font-bold text-blue-500'>Read The Best Book</h1>
                <p className='font-bold text-slate-400 my-4'>Get relief from the hasition of choicing books.Get list of books of people choices</p>
                <button class="rounded-full bg-fuchsia-900 w-24 py-2 text-white font-bold"> Live Demo</button>
            </div>
            <div>
                <img src={Img} alt="" />
            </div>
        </div>
    );
};

export default Home;