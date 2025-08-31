import React, { useState } from 'react';
import './feedback-popup.css';
// import 

export default function FeedbackPopup( {onClose} ) {

    const containerStyle = {
        position: "absolute",
        top: "50%",
        left: "25%",
        width: "50vw",
        height: "56vh",
        backgroundColor: "#1A1919",
        border: "3px solid #f3f3f3",
        borderRadius: "10px",
        margin: "auto",
        zIndex: 2,
    }

    const backdropStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
    }

    const topStyle = {
        display: 'flex',
        flexDirection: 'column',
    }

    const headingStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '0',
        fontFamily: 'DayDream',
        color: '#4FB9F0',
    }

    const xTopStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        // textAlign: 'end',
        // cursor: 'pointer',
        lineHeight: '.5rem',

    }

    const xStyle = {
        cursor: 'pointer',
        width: '24px',
        height: '24px',
    }

    const buttonsContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        height: '2.3rem',
        marginTop: '0.4rem',
        // margin: '10px 0',
    }

    

    return (
        <>
            <div className="fb-backdrop" style={backdropStyle} onClick={onClose}></div>
            <div className="fb-container" style={containerStyle}>
                <form className="fb-form" style={formStyle}>

                    <div className="top-fb" style={topStyle}>
                        <div className="fb-x-container" style={xTopStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fb-x-svg' fill="none" viewBox="0 0 24 24" stroke-width="3"  style={xStyle} onClick={onClose}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h2 className="fb-heading" style={headingStyle}>Feedback</h2>
                    </div>

                    <div className="field">
                        <label for="fb-name">Name <span class="hint">(optional)</span></label>
                        <input id="fb-name" name="name" type="text" placeholder="Type your name here" />
                    </div>

                    <div className="field">
                        <label for="fb-email">Email <span class="hint">(optional)</span></label>
                        <input id="fb-email" name="email" type="email" placeholder="you@example.com" />
                    </div>

                    <div className="field">
                        <label for="fb-message">Message<span class="req">*</span></label>
                        <textarea id="fb-message" name="message" rows={8} required
                                placeholder="Type your message here…"></textarea>
                    </div>

                    <div className="actions" style={buttonsContainerStyle}>
                        <button className='fb-submit' type="submit" >Send</button>
                        <button className='fb-cancel' type="button" onClick={onClose}>Cancel</button>
                    </div>

                </form>
            </div>
        </>
    )
}