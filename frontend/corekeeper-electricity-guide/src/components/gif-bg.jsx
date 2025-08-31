import React from 'react';

export default function GifBg({gif}) {

    const gifContainerStyle = {
        width: "370px",
        maxWidth: "370px",
        height: "215px",
        display: "flex",
        borderBottom: "4px solid #8D5D2B",
        borderRight: "4px solid #8D5D2B",
        borderTop: "4px solid #634223",
        borderLeft: "4px solid #634223",
        backgroundColor: "#32210D",
        margin: "2px 0px"
    }

    const gifStyle = {
        margin: "2px",
    }

    return(
        <div className="searched-gif-container"
             style={gifContainerStyle}    
        >
            <img 
                src={gif} 
                alt="" 
                style={gifStyle}/>
        </div>
    )
}