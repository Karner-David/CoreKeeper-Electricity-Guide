import React from 'react';

export default function ItemBg({itemImg, width, height}) {

    const containerStyle = {
        width: width,
        height: height,
        display: "flex",
        borderBottom: "4px solid #8D5D2B",
        borderRight: "4px solid #8D5D2B",
        borderTop: "4px solid #634223",
        borderLeft: "4px solid #634223",
        backgroundColor: "#32210D",
        margin: "auto",
        marginTop: "2px",
        marginBottom: "2px",
    }

    const imgStyle = {
        width: "78%",
        height: "78%",
        margin: "auto",
    }

    return(
        <div className='item-no-craft-container' style={containerStyle}>
            <img 
                src={itemImg}
                className='item-no-craft'
                style={imgStyle}
            />
        </div>
    )
}