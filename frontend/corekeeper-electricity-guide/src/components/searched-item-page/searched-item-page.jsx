import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './searched-item-page.css';
import NavBar from '../navbar/navbar';
import SearchBar from '../searchbar/searchbar';
import ItemBg from '../item-bg';
import CraftingTable from '../crafting-table/craftingtable';
import GifBg from '../gif-bg';
import AsideTOC from '../aside-toc/aside-toc';

export default function SearchedItemPage({item}) {
    const { itemName } = useParams();
    const [curItem, setCurItem] = useState(
        {
            iName: "Electricity Generator",
            iDesc: "An Electricity Generator can generate electricity with a strength of 23 tiles.",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["10 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },);

    const headings = [curItem.iName, "Crafting", "How To Use", "Explore More"];

    return(
        <div className='whole-page'>
            <div className="aside-w-searched-container">
                <SearchBar></SearchBar>
                <div className="searched-item-container">
                    {/* <AsideTOC headings={headings}></AsideTOC> */}
                    <div className="item-article-container">
                        <div className="name-desc-img-container">
                            <div className="name-desc-container">
                                <h2>{curItem.iName}</h2>
                                <p>{curItem.iDescLonger}</p>
                            </div>
                            <ItemBg itemImg={curItem.iImg} width="30%" height="100%"></ItemBg>
                        </div>
                        <div className="crafting-container">
                            <h2>Crafting</h2>
                            <div className="searced-item-table-container">
                                <CraftingTable 
                                    iName={curItem.iName} 
                                    iImg={curItem.iImg}
                                    iMaterials={curItem.iMaterials}
                                    iMImgs={curItem.iMImgs}
                                    iStation={curItem.iStation}
                                    iSImg={curItem.iSImg}
                                />
                            </div>
                        </div>
                        <div className="how-to-use-container">
                            <div className="how-to-desc-container">
                                <h2>How To Use</h2>
                                <p>{curItem.iHowToUse}</p>
                            </div>
                            <GifBg gif={curItem.iHowToGif}/>
                        </div>
                        <div className="explore-more-container">
                            <h2>Explore More</h2>
                            <div className="explore-options-container">
                                <div className="other-items-container">
                                    <h3>Other Items</h3>
                                    <ul>
                                        {curItem.iExploreMore.map((item, index) => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="contraptions-container">
                                    <h3>Contraptions</h3>
                                    <ul>
                                        {curItem.iContraptions.map((item, index) => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};