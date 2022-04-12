import React from 'react';
import './Experts.css'
import expert1 from '../../../../images/expert-1.jpg'
import expert2 from '../../../../images/expert-2.jpg'
import expert3 from '../../../../images/expert-3.jpg'
import expert4 from '../../../../images/expert-4.jpg'
import expert5 from '../../../../images/expert-5.jpg'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'will smith', img: expert1 },
    { id: 1, name: 'kuru smith', img: expert2 },
    { id: 1, name: 'messi smith', img: expert3 },
    { id: 1, name: 'demaria smith', img: expert4 },
    { id: 1, name: 'haland smith', img: expert5 }
]
const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center'>Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert} ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;