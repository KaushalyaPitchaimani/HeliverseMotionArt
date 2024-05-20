import React from 'react';
import './MagicWand.css';
import MagicWandImg from './assets/MagicWand.png';

const MagicWand = () => {
    return (
        <div className="magic-wand-container">
            <div className="left-content">
                <h2>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
                <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                <button className="btn-style">Purchase From Envato &rarr;</button>
            </div>
            <div className="right-content">
                <img src={MagicWandImg} alt="Magic Wand" className="magic-wand-image" />
            </div>
        </div>
    );
}

export default MagicWand;
