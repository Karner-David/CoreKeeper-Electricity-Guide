import React, { useState, useEffect} from 'react';
import MagnifyingGlass from '/magnifying_glass.png';
import './searchbar.css';

export default function SearchBar({ value, onChange, onSearch, onItemPage, suggestions = [], onSelect}) {
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
        border: "2px solid black",
        borderRadius: "30px",
        backgroundColor: "white",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 1001,
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
        backgroundColor: "white",
        padding: "0",
        paddingRight: "5px",          
        outline: "none",
    }

    const dropdownStyle = {
        position: "absolute",
        width: "37vw",
        top: "17.99%",
        margin: "0 auto",
        left: 0,
        right: 0,
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderTop: "none",
        zIndex: 1000,
        maxHeight: "200px",
        overflowY: "auto",
    };

    const dropdownItemStyle = {
        padding: "8px",
        cursor: "pointer",
        borderBottom: "1px solid #eee",
    };

    return(
        <>
            <div className={`search-bar-container`} style={searchBarStyle}>
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

            {onItemPage && value && suggestions.length > 0 && (
                <div className="dropdown" style={dropdownStyle}>
                     {suggestions.map((item) => (
                            <div
                                key={item.id}
                                style={dropdownItemStyle}
                                className='dropdown-item'
                                onClick={() => onSelect(item)}
                            >
                            <img
                            src={
                                item.name === "Electricity Generator"
                                ? "/item-thumbnails/generator.png"
                                : `/item-thumbnails/${item.name.replace(/ /g, "_").toLowerCase()}.webp`
                            }
                            alt="cant see"
                            style={{ height: "20px", width: "20px", marginRight: "8px" }}
                            />
                                {item.name}
                            </div>
                        ))}
                </div>
            )}
        </>
    );
}