import React, { useState, useEffect} from 'react';
import MagnifyingGlass from '/magnifying_glass.png';
import './searchbar.css';

export default function SearchBar({ value, onChange, onSearch }) {
    const [inputVal, setInputVal] = useState('');

    const imgClickedOn = () => {
        onSearch(inputVal);
        setInputVal('');
    }

    const searchBarStyle = {
        display: "flex",
        height: "4vh",
        width: "40vw",
        margin: "auto",
        // marginLeft: "31.30vw",
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
        marginLeft: "5px",
    }

    const inputStyle = {
        flex: 1,                    
        border: "none",
        backgroundColor: "#D9D9D9",
        padding: "0",
        paddingRight: "5px",          
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
                       value={value}
                       onChange={(e) => onChange(e.target.value)}
                       style={inputStyle}
                />
            </div>
        </>
    );
}