import React from 'react';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';

const Dashboard = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-3xl text-center font-bold text-blue-500 mb-6'>Month Wise Sell</h1>
                <SimpleLineChart></SimpleLineChart>
            </div>
            <div className='w-1/2 mt-10'>
                <h1 className='text-3xl text-center font-bold text-blue-500 mb-6'>Invesment Vs Revenue</h1>
                <SimpleAreaChart></SimpleAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;