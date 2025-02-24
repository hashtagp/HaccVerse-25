import React from 'react';
import './HackathonTracks.css';

const HackathonTracks = () => {
    return (
        <div className="tracks-container" id="tracks">
            <h1>Tracks</h1>
            <div className="tracks">
                <div className="track">
                    <img src="../../src/assets/coding.png" alt="AI & Machine Learning" />
                    <p>AI & ML</p>
                </div>
                <div className="track">
                    <img src="../../src/assets/secure.png" alt="Web Development" />
                    <p>Web3 & Blockchain</p>
                </div>
                <div className="track">
                    <img src="../../src/assets/cyber-security.png" alt="Cybersecurity" />
                    <p>Cybersecurity</p>
                </div>
                <div className="track">
                    <img src="../../src/assets/iot.png" alt="Internet of Things" />
                    <p>Internet of Things</p>
                </div>
                <div className="track">
                    <img src="../../src/assets/think-out-of-the-box.png" alt="Open Innovation" />
                    <p>Open Innovation</p>
                </div>
            </div>
        </div>
    );
};

export default HackathonTracks;