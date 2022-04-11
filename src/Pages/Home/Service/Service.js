import React from 'react';

const Service = ({ service }) => {
    const { id, name, img, description } = service
    return (
        <div>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>id :{id}</p>
            <p>describe: {description}</p>

        </div>
    );
};

export default Service;