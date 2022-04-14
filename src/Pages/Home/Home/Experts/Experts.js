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
    { id: 2, name: 'kuru smith', img: expert2 },
    { id: 3, name: 'messi smith', img: expert3 },
    { id: 4, name: 'demaria smith', img: expert4 },
    { id: 5, name: 'haland smith', img: expert5 }
]
const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center mt-5'>Experts</h2>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert} ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;