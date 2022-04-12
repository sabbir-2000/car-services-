import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert
    return (
        <div>
            <img src={img} alt="" />
            <h3>Expert</h3>

        </div>
    );
};

export default Expert;