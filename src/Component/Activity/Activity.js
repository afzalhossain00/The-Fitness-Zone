import React from 'react';
import './Activity.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Workout from '../Workout/Workout';

const Activity = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])


    return (
        <div className='activity-container'>
            <div className="workout-container">
                {
                    workouts.map(workout => <Workout
                        key={workout.id}
                        workout={workout}
                    ></Workout>)
                }
            </div>

            <div className="activity-log">
                <h2>Afzal Hossain</h2>
            </div>
        </div>
    );
};

export default Activity;