import React from 'react';
import './QuestionAndAnswer.css'

const QuestionAndAnswer = () => {
    return (
        <div className='question-and-answer'>
            <h3>Question And Answer:</h3>
            <div className='answer'>
                <h4>1. How does React work?</h4>
                <p>React just maintains a tree for you and it will do efficient diff computations on the nodes. It allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.
                </p>

            </div>
            <div className='answer'>
                <h4>2. What is the differences between Props vs State?  </h4>
                <p>Props are used to pass data from one component to another. State is the local state of the component which cannot be accessed and modified outside of the component.The state property is used to update the state values in the component.
                </p>

            </div>
            <div className='answer'>
                <h4>3. What does useEffect do without load API through fetch?</h4>
                <p>The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting. useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
                </p>

            </div>
        </div>
    );
};

export default QuestionAndAnswer;