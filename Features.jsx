import React from 'react';
import './Features.css';
import weight from './assets/weight.png';
import responsive from './assets/responsive.png';
import ui from './assets/interface.png';

const Features = () => {
    return (
        <section className="plugin-section" style={{ paddingTop: '30px' }}>

            <div className="section-content">
                <h2>An All-Round Plugin With </h2>
                <h2>Powerful Features</h2>
                <p className="text" style={{ textAlign: 'center', width: '60%', margin: '0 auto', paddingTop: '5px' }}>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>

                <div className="card-container">
                    <div className="card" style={{ width: '28rem' }}>
                        <div className="card-body">
                            <img src={weight} alt="Image for Apply On Section" className="card-img" />
                            <h5 className="card-title">Light Weight</h5>
                            <p className="card-text">
                                Motion Art for Elementor is designed to be lightweight.
                            </p>

                        </div>
                    </div>



                    <div className="card" style={{ width: '28rem' }}>
                        <div className="card-body">
                            <img src={responsive} alt="Image for Apply On Section" className="card-img" />
                            <h5 className="card-title">100% Responsive</h5>
                            <p className="card-text">
                                Create a consistent visual experience across all devices.
                            </p>

                        </div>
                    </div>

                    <div className="card" style={{ width: '28rem' }}>
                        <div className="card-body">
                            <img src={ui} alt="Image for Apply On Section" className="card-img" />
                            <h5 className="card-title">Light Weight</h5>
                            <p className="card-text">
                                Motion Art for Elementor is designed to be lightweight.
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </section >
    );
};

export default Features;
