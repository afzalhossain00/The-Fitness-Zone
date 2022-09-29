import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const { name, picture, age, time } = props.workout
    console.log(props.workout);
    return (
        <div className='workout'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Workout;