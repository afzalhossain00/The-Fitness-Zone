import React from 'react';
import './Sidebar.css'

const Sidebar = ({ sidebar }) => {
    return (
        <div className='sidebar'>
            <div className='profile'>
                <h3>Afzal Hossain</h3>
                <h5 className='profile-position'>Web Developer</h5>
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
                    <h4>Exercise Time: </h4>
                    <h4>{ }Seconds</h4>
                </div>
                <div className='break-time'>
                    <h4>Break Time: </h4>
                    <h4>{ } Seconds</h4>
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