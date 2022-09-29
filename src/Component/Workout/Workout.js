import React from 'react';
import './Workout.css'

const Workout = (props) => {
    const { name, picture, age, time } = props.workout
    console.log(props.workout);
    return (
        <div className='workout'>
            <img src={picture} alt="" />
            <div className='workout-info'>
                <p className='workout-name'>{name}</p>
                <p>For Age: {age}</p>
                <p>Time Required: {time}s</p>
            </div>
            <button className='btn-add'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Workout;