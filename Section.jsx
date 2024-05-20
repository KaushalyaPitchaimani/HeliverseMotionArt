import React from 'react';
import './Section.css';
import section1 from './assets/section1.png';
import page1 from './assets/page1.png';
const Section = () => {
    return (
        <section className="plugin-section">
            <div className="section-content">
                <h2>Apply On Any Section Or Enable</h2>
                <h2> For Whole Page</h2>
                <div className="card-container">
                    <div className="card section" style={{ width: '38rem', height: '33rem' }}>
                        <div className="card-body" style={{ padding: '0px' }}>
                            <h5 className="card-title">Apply On Section</h5>
                            <p className="card-text">
                                Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
                            </p>
                            <img src={section1} alt="Image for Apply On Section" className="card-img" style={{
                                width: 'calc(100% - 10px)',
                                height: 'calc(60% - 10px)',
                                padding: '5px',
                                boxSizing: 'border-box',
                                alignItems: 'center'
                            }} />
                        </div>
                    </div>
                    <div className="card section" style={{ width: '38rem', height: '33rem' }}>
                        <div className="card-body" style={{ padding: '0px' }}>
                            <h5 className="card-title">Apply On Page</h5>
                            <p className="card-text">
                                Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
                            </p>
                            <img src={page1} alt="Image for Apply On Page" className="card-img" style={{
                                width: 'calc(100% - 10px)',
                                height: 'calc(60% - 10px)',
                                padding: '5px',
                                boxSizing: 'border-box',
                                alignItems: 'center'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
