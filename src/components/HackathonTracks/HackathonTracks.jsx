import React from 'react';
import './HackathonTracks.css';
import coding from '../../assets/coding.png';
import secure from '../../assets/secure.png';
import cyberSecurity from '../../assets/cyber-security.png';
import iot from '../../assets/iot.png';
import thinkOutOfTheBox from '../../assets/think-out-of-the-box.png';
import Template from "../../assets/HaccVerse'25_IdeaSubmission_Template.pptx";

const HackathonTracks = () => {
    return (
        <div className="tracks-container" id="tracks">
            <h1>Tracks</h1>
            <a href={Template} download>
            <p>PPT Template</p>    
            </a>
            <div className="tracks">
                <div className="track">
                    <img src={coding} alt="AI & ML" />
                    <p>AI & ML</p>
                </div>
                <div className="track">
                    <img src={secure} alt="Web3 & Blockchain" />
                    <p>Web3 & Blockchain</p>
                </div>
                <div className="track">
                    <img src={cyberSecurity} alt="Cybersecurity" />
                    <p>Cybersecurity</p>
                </div>
                <div className="track">
                    <img src={iot} alt="Internet of Things" />
                    <p>Internet of Things</p>
                </div>
                <div className="track">
                    <img src={thinkOutOfTheBox} alt="Open Innovation" />
                    <p>Open Innovation</p>
                </div>
            </div>
        </div>
    );
};

export default HackathonTracks;