import React, {useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ckeLogo from '/Core-Keeper-Electricity-Logo.png';
import navbar_bg from '/Contraptions_Screen.png';
import '../fonts.css';
import './navbar.css';

export default function NavBar({}) {
    const location = useLocation();
    const navigate = useNavigate();

    let activeTab = 'Search';
    if (location.pathname.startsWith('/basics'))
        activeTab = 'Basics';
    else if (location.pathname.startsWith('/contraptions'))
        activeTab = 'Contraptions';
    else if (location.pathname.startsWith('/feedback'))
        activeTab = 'Feedback'

    return(
        <div className="navbar-container">
            <div className="img-container">
                <img 
                    src={ckeLogo} 
                    alt="chiken" 
                    className="img-logo" 
                    onClick={() => navigate('/')}
                    style={{cursor: "pointer"}}
                />
            </div>
            <div className="top-tab-container">
                    <h1 
                        className={`basics-h1 tab-title ${activeTab === 'Basics' ? 'active' : ''}`}
                        onClick={() => navigate('/basics')}
                        >
                        Basics
                    </h1>
                    <h1 
                        className={`contraptions-h1 tab-title ${activeTab === 'Contraptions' ? 'active' : ''}`}
                        onClick={() => navigate('/contraptions')}
                        >
                        Contraptions
                    </h1>
                    <h1 className={`search-h1 tab-title ${activeTab === 'Search' ? 'active' : ''}`}
                        onClick={() => navigate('/search')}
                        >
                        Search
                    </h1>
            </div>
            <div className="feedback-container">
                <h1 className='feedback-h1'
                    onClick={() => navigate('/feedback')}
                    >
                    Feedback
                </h1>
            </div>
        </div>
    );
};
