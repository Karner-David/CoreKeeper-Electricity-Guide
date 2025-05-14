import React, { useState, useEffect } from 'react';
import './searchfeeditem.css';
import CraftingTable from '../crafting-table/craftingtable';

export default function SearchFeedItem({iName, iDesc, iImg, iMaterials}) {



    return (
        <>
        <div className="feed-item-container">
            <h2>{iName}</h2>
            <p>{iDesc}</p>
            <CraftingTable></CraftingTable>
        </div>
        </>
    );
}