import React, {useState, useEffect } from 'react';
import ckeLogo from '/Core-Keeper-Electricity-Logo.png';
import navbar_bg from '/Contraptions_Screen.png';
import '../fonts.css';
import './navbar.css';

export default function NavBar({ chosenTab }) {
    const [activeTab, setActiveTab] = useState('Search');

    useEffect(() => {
        if (chosenTab) {
            setActiveTab(chosenTab);
        }
    }, [chosenTab]);

    const basicsClick = () => {

    }

    const contraptionsClick = () => {

    }

    const searchClick = () => {

    }

    const feedbackClick = () => {

    }

    return(
        <div className="navbar-container">
            <div className="img-container">
                <img src={ckeLogo} alt="chiken" className="img-logo"/>
            </div>
            <div className="top-tab-container">
                    <h1 
                        className={`basics-h1 tab-title ${activeTab === 'Basics' ? 'active' : ''}`}
                        onClick={basicsClick}
                        >
                        Basics
                    </h1>
                    <h1 
                        className={`contraptions-h1 tab-title ${activeTab === 'Contraptions' ? 'active' : ''}`}
                        onClick={contraptionsClick}
                        >
                        Contraptions
                    </h1>
                    <h1 className={`search-h1 tab-title ${activeTab === 'Search' ? 'active' : ''}`}
                        onClick={searchClick}
                        >
                        Search
                    </h1>
            </div>
            <div className="feedback-container">
                <h1 className='feedback-h1'
                    onClick={feedbackClick}
                    >
                    Feedback
                </h1>
            </div>
        </div>
    );
};
