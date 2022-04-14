import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img className='w-100' src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>id :{id}</p>
            <p>describe: <small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>{name}</button>

        </div>
    );
};

export default Service;