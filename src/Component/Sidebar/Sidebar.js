import React from 'react';
import { useState } from 'react';
import './Sidebar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ sidebar }) => {
    const breakTime = localStorage.getItem('breakTime');
    const [getValue, setGetValue] = useState(breakTime)

    let total = 0;
    for (const workout of sidebar) {
        total = total + workout.time;
    }

    const notify = () => toast("You have done your daily workout!");

    const btnValue = (e) => {
        setGetValue(e.target.value);
        localStorage.setItem("breakTime", e.target.value);
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
                <button onClick={btnValue} value="10" className='btn'>10s</button>
                <button onClick={btnValue} value="20" className='btn'>20s</button>
                <button onClick={btnValue} value="30" className='btn'>30s</button>
                <button onClick={btnValue} value="40" className='btn'>40s</button>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <p>Exercise Time: </p>
                    <p>{total} Seconds</p>
                </div>
                <div className='break-time'>
                    <p>Break Time: </p>
                    <p>{getValue} Seconds</p>
                </div>
            </div>
            <div>
                <button onClick={notify} className='btn-activity'>
                    <p>Activity Completed</p>
                    <ToastContainer />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;