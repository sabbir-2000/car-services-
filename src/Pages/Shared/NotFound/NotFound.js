import React from 'react';
import error from '../../../images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center'>Sorry Page's not found</h2>
            <img className='w-30%' src={error} alt="" />
        </div>
    );
};

export default NotFound;