import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-between items-center shadow font-bold text-3xl '>
            <div className='hidden md:block ml-5 uppercase'>
                <Link to='/'>Love Readings</Link>
            </div>

            <nav className='md:flex justify-between p-8 uppercase'>

                <CustomLink className='mr-6 text-lg font-bold' to='/home'>Home</CustomLink>
                <CustomLink className='mr-6 text-lg font-bold' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='mr-6 text-lg font-bold' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='mr-6 text-lg font-bold' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='mr-6 text-lg font-bold' to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;