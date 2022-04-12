import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description } = service
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>id :{id}</p>
            <p>describe: <small>{description}</small></p>
            <button>Book: {name}</button>

        </div>
    );
};

export default Service;