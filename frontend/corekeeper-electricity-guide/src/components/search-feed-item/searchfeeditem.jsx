import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './searchfeeditem.css';
import CraftingTable from '../crafting-table/craftingtable';
import ItemBg from '../item-bg';

export default function SearchFeedItem({ iName, iDesc, iImg, iMaterials, iMImgs, iStation, iSImg}) {



    return (
        <>
        <div className="feed-item-container">
            <h2><Link to={`/item/${iName}`}>{iName}</Link></h2>
            <p>{iDesc}</p>
            {iMaterials !== "None" ? (
                <CraftingTable
                    // key={key}
                    iName={iName}
                    iDesc={iDesc}
                    iImg={iImg} 
                    iMaterials={iMaterials} 
                    iMImgs={iMImgs} 
                    iStation={iStation}
                    iSImg={iSImg}
                />
            ) : (
                <ItemBg itemImg={iImg} width="38%" height="42%"></ItemBg>
            )}
        </div>
        </>
    );
}