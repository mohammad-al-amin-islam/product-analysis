import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-center my-10 uppercase'>
                <CustomLink className='mr-6 text-xl font-bold' to='/home'>Home</CustomLink>
                <CustomLink className='mr-6 text-xl font-bold' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='mr-6 text-xl font-bold' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='mr-6 text-xl font-bold' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='mr-6 text-xl font-bold' to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;