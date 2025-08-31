import React from 'react';

export default function CreditsFooter() {

    return(
        <div className="credits-container" style={{ textAlign: "center", padding: "1vh", marginTop: "2vh", borderTop: "1px solid grey" }}>
            <div className="text" style={{ fontFamily: "DayDream", color: "#d1d1d1ff", fontSize: "1rem" }}>
                <p>Credits to the <a href="https://core-keeper.fandom.com/wiki/Core_Keeper_Wiki" target="_blank" rel="noopener noreferrer">CoreKeeper Wiki</a> for the information and thumbnails for each and every item. Keep on electrifying!</p>
            </div>
        </div>
    )
}