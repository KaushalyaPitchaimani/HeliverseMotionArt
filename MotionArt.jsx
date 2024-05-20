import React from 'react';
import motionArtEffect from './assets/MotionArtEffect-logo.png'; // Adjust the path if necessary
import './MotionArt.css';

const MotionArt = () => {
    return (
        <div className="page-container">
            <div className="image-container">
                <img src={motionArtEffect} alt="Motion Art Effect" className="motion-art-image" />
            </div>
            <div className="button-container">
                <button className="purchase-button">Purchase Now</button>
            </div>
        </div>
    );
}

export default MotionArt;
