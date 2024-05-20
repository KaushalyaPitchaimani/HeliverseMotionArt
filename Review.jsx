import React from 'react';
import './Review.css';
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';
import stars from './assets/stars.png';

const Review = () => {
    return (
        <div className="review-container">
            <h2 className="review-text">Trusted by thousands of users around the world</h2>
            <div className="review-images">
                <div className="review-item">
                    <img src={c1} alt="Review 1" className="review-image" />
                    <div className="stars-container">
                        <img src={stars} alt="Stars" className="stars-image" />
                        <p className="review-score">4.5 Score, 9 Reviews</p>
                    </div>
                </div>
                <div className="review-item">
                    <img src={c2} alt="Review 2" className="review-image" />
                    <div className="stars-container">
                        <img src={stars} alt="Stars" className="stars-image" />
                        <p className="review-score">4.5 Score, 9 Reviews</p>
                    </div>
                </div>
                <div className="review-item">
                    <img src={c3} alt="Review 3" className="review-image" />
                    <div className="stars-container">
                        <img src={stars} alt="Stars" className="stars-image" />
                        <p className="review-score">4.5 Score, 9 Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
