import React from 'react';
import './Sidebar.css'

const Sidebar = ({ sidebar }) => {

    let total = 0;
    for (const workout of sidebar) {
        total = total + workout.time;
    }

    return (
        <div className='sidebar'>
            <div className='profile'>
                <h2>Afzal Hossain</h2>
                <p>Web Developer</p>
            </div>
            <div >
                <h3>Add A Break</h3>
            </div>
            <div className='btn-container'>
                <button className='btn'>10s</button>
                <button className='btn'>20s</button>
                <button className='btn'>30s</button>
                <button className='btn'>40s</button>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <p>Exercise Time: </p>
                    <p>{total} Seconds</p>
                </div>
                <div className='break-time'>
                    <p>Break Time: </p>
                    <p>{ } Seconds</p>
                </div>
            </div>
            <div>
                <button className='btn-activity'>
                    <p>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;