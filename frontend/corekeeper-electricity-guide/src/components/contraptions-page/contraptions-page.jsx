import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './contraptions-page.css';
import AsideTOC from '../aside-toc/aside-toc';
import ContraptionItem from '../contraption-item/contraption-item';

export default function ContraptionsPage() {
    const location = useLocation();
    const { alrActive } = location.state || {};
    const [active, setActive] = useState(alrActive || [])

    const toggleActives = (id) => {
        console.log("Toggle");
        setActive((prevState) => 
            prevState.includes(id) 
            ? prevState.filter(item => item !== id) 
            : [...prevState, id]
        );
    }

    const headings = ["Sorting System", "Auto-Smelter", "Auto-Wood Farm",
                      "Stack Splitter", "Advanced Auto Smelter"]

    return(
        <div className="contraptions-container">
            <h1>Contraptions</h1>
            <div className="contraptions-aside">
                <AsideTOC page="contraptions" headings={headings} activeItems={active}></AsideTOC> 
            </div>
            <div className="border-contraptions-container">
                <div className="contraptions-article-container">
                    <div id="Introduction" className="contraptions-intro-container">
                        <h3>Introduction</h3>
                        <p>Here are a couple of helpful contraptions that you can add to your own base!</p>
                    </div>
                    {headings.map((heading, index) => (
                        <ContraptionItem
                            key={heading}
                            item={heading}
                            active={active.includes(heading)}
                            onToggle={() => toggleActives(heading)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}