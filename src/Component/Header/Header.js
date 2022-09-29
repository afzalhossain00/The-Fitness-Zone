import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='title'>
                    <FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon>
                    <h1>The Fitness Zone</h1>
                </div>
            </nav>
        </div>
    );
};

export default Header;