import React, { useState, useEffect } from 'react';
import './contraptions-page.css';
import AsideTOC from '../aside-toc/aside-toc';
import ContraptionItem from '../contraption-item/contraption-item';

export default function ContraptionsPage() {
    const [active, setActive] = useState({
        So : "F",
        Sm : "F",
        Wo : "F",
        Sp : "F",
        AdSm : "F",
    })

    const handleActives = (key, newValue) => {
        setActive(prevState => ({
            ...prevState,
            [key]: newValue
        }));
    }

    const headings = ["Sorting System", "Auto-Smelter", "Auto-Wood Farm",
                      "Stack Splitter", "Advanced Auto Smelter"]

    return(
        <div className="contraptions-container">
            <h1>Contraptions</h1>
            <div className="contraptions-aside">
                <AsideTOC page="contraptions" headings={headings}></AsideTOC> 
            </div>
            <div className="border-contraptions-container">
                <div className="contraptions-article-container">
                    <div id="Introduction" className="contraptions-intro-container">
                        <h3>Introduction</h3>
                        <p>Here are a couple of helpful contraptions that you can add to your own base!</p>
                    </div>
                    <ContraptionItem item={"Sorting System"}></ContraptionItem>
                    <ContraptionItem item={"Auto-Smelter"}></ContraptionItem>
                    <ContraptionItem item={"Auto-Wood Farm"}></ContraptionItem>
                    <ContraptionItem item={"Stack Splitter"}></ContraptionItem>
                    <ContraptionItem item={"Advanced Auto Smelter"}></ContraptionItem>
                    {/* <div id='Mob Farm'>
                        <h3>Mob Farm</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}