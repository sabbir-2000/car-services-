import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()


    return (
        <footer className='text-center mt-5'>
            <p><small>CopyRight..&copy;{day}/{month}/{year}</small></p>

        </footer>
    );
};

export default Footer;