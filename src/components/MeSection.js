import React from 'react';
import { Button } from './Button';
import './MeSection.css';
import '../App.css';

function MeSection() {
    return (
    <div className='me-container'>
        <video src="../videos/Albeniz.mp4" autoPlay loop muted />
        <h1>Music</h1>
        <p>Welcome to my page!</p>
        <div className="me-btns">
            <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
            Watch
            </Button>
        </div>
    </div>
    );
}

export default MeSection;