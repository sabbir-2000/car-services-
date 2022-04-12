import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description } = service
    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>id :{id}</p>
            <p>describe: <small>{description}</small></p>
            <button className='btn btn-primary'>{name}</button>

        </div>
    );
};

export default Service;