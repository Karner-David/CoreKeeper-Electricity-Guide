import React from 'react';

export default function GifBg({gif}) {

    const gifContainerStyle = {
        width: "50%",
        height: "auto",
        borderBottom: "4px solid #8D5D2B",
        borderRight: "4px solid #8D5D2B",
        borderTop: "4px solid #634223",
        borderLeft: "4px solid #634223",
        backgroundColor: "#32210D",
        padding: "13px",
        margin: "5px 0px"
    }

    const gifStyle = {
        
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