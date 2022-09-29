import React from 'react';
import './Activity.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Workout from '../Workout/Workout';
import Sidebar from '../Sidebar/Sidebar';
import '../QuestionAndAnswer/QuestionAndAnswer.css'

const Activity = () => {
    const [workouts, setWorkouts] = useState([]);
    const [sidebar, setSidebar] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    const handleAddToList = (workout) => {
        console.log(workout);
        const newSidebar = [...sidebar, workout];
        setSidebar(newSidebar)
    }

    return (
        <div className='activity-container'>
            <div className="workout-container">
                {
                    workouts.map(workout => <Workout
                        key={workout.id}
                        workout={workout}
                        handleAddToList={handleAddToList}
                    ></Workout>)
                }
            </div>
            <div className="sidebar-container">
                <Sidebar sidebar={sidebar}></Sidebar>
            </div>
        </div>
    );
};

export default Activity;