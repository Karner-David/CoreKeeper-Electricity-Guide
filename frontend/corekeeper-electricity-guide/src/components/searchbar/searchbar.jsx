import React, { useState, useEffect} from 'react';
import MagnifyingGlass from '/magnifying_glass.png';
import './searchbar.css';

export default function SearchBar({ onSearch }) {
    const [inputVal, setInputVal] = useState('');

    const handleInputChange = (event) => {
        setInputVal(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSearch(inputVal);
            setInputVal('');
        }
    }

    const imgClickedOn = () => {
        onSearch(inputVal);
        setInputVal('');
    }

    const searchBarStyle = {
        display: "flex",
        height: "4vh",
        width: "40vw",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "30px",
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        overflow: "hidden",
    }

    const imgStyle = {
        height: "30px",
        width: "30px",
        cursor: "pointer",
    }

    const inputStyle = {
        flex: 1,                    // fills remaining space
        border: "none",
        backgroundColor: "#D9D9D9",
        padding: "0",
        paddingRight: "5px",          // left+right padding
        outline: "none",
    }

    return(
        <>
            <div className="search-bar-container" style={searchBarStyle}>
                <div className="img-container" style={imgStyle}>
                    <img src={MagnifyingGlass} 
                         alt="magnifying glass"
                         onClick={imgClickedOn} 
                        
                    />
                </div>
                <input type="text" 
                       placeholder="Search Here"
                       value={inputVal}
                       onChange={handleInputChange}
                       onKeyDown={handleKeyDown}
                       style={inputStyle}
                />
            </div>
        </>
    );
}