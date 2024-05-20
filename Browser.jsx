import React from 'react';
import './Browser.css';
import browserIcon from './assets/browserIcon.png';
const BrowsersCard = () => {
    return (
        <div className="card-container">
            <div className="card browser text-center " style={{ width: '70rem', height: '20rem' }}>
                <div className="card-body" style={{ padding: '0px' }} >
                    <h5 className="card-title " style={{ textAlign: 'center' }}>Supported by All Popular Browsers</h5>
                    <p className="card-text align">Rest assured, Motion Art is designed to be compatible </p> <p className='card-text align'>with all major web browsers.</p>
                    <div className="browsers-icons">
                        <img src={browserIcon} alt="Browser" />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default BrowsersCard;
