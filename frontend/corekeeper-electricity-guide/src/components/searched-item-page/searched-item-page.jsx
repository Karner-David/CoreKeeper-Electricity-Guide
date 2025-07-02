/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './searched-item-page.css';
import NavBar from '../navbar/navbar';
import SearchBar from '../searchbar/searchbar';
import ItemBg from '../item-bg';
import CraftingTable from '../crafting-table/craftingtable';
import GifBg from '../gif-bg';
import AsideTOC from '../aside-toc/aside-toc';

export default function SearchedItemPage() {
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
                                <div className="explore-more-container">
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

/*
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
            iContraptions: ["Electric_Clock", "Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },);
{
            iName: "Pressure Plate",
            iDesc: "A Pressure Plate, when stood on by a player, can generate electricity with a strength of 13 tiles.",
            iDescLonger: "A Pressure Plate, when stood on by a player, can generate electricity with a strength of 13 tiles. This item is good for machines that need to be activated by the player, such as the electrical door.",
            iHowToUse: "Place down the Pressure Plate directly next to a machine or electrical wire and then stand on it to activate.",
            iImg: "/item-thumbnails/pressure_plate.webp",
            iMaterials: ["2 Copper Bar", "2 Tin Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp", "/item-thumbnails/tin_bar.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Door", "Electrical_Wire", "Lamp"],
            iContraptions: null,
        },);
{
            iName: "Electrical Wire",
            iDesc: "An Electrical Wire conducts electricity from a powewr source to any machine touching it.",
            iDescLonger: "An Electrical Wire conducts electricity from a power source to any machine touching it. This item is essential for powering machines across a distance.",
            iHowToUse: "Place down the Electrical Wire directly next to a power source and connect it to a machine.",
            iImg: "/item-thumbnails/electrical_wire.webp",
            iMaterials: ["1 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock", "Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },);
{
            iName: "Logic Circuit",
            iDesc: "A Logic Circuit allows electricity to flow in a certain direction once it receives 2 out of 3 electrical inputs.",
            iDescLonger: "A Logic Circuit allows electricity to flow in a certain direction once it receives 2 out of 3 electrical inputs.",
            iHowToUse: "Place down the Logic Circuit directly in front of the power source or electrical wire and it will output in the direction of the arrow.",
            iImg: "/item-thumbnails/logic_circuit.webp",
            iMaterials: ["2 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToGif: "/how-tos/Logic_Circuit.gif",
            iExploreMore: ["Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock"],
        },);
{
            iName: "Delay Circuit",
            iDesc: "A Delay Circuit stores electrical input and output it after 1 second.",
            iDescLonger: "A Delay Circuit stores electrical input and output it after 1 second.",
            iHowToUse: "Place down the Delay Circuit directly in front of the power source or electrical wire and it will output in the direction of the 3 dots.",
            iImg: "/item-thumbnails/delay_circuit.webp",
            iMaterials: ["2 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToGif: "/how-tos/Delay_Circuit.gif",
            iExploreMore: ["Robot_Arm", "Crude_Drill", "Lamp"],
            iContraptions: ["Electric_Clock"],
        },);
{
            iName: "Cross Circuit",
            iDesc: "A Cross Circuit conducts electricity, but the electricity only goes straight from the side it came from.",
            iDescLonger: "A Cross Circuit conducts electricity, but the electricity only goes straight from the side it came from. This is useful for preventing wires from touching like separating a constant electricity vs. a clocked electricity.",
            iHowToUse: "Place down the Cross Circuit directly in front of the power source or electrical wire and it will only output straight from where it came from.",
            iImg: "/item-thumbnails/cross_circuit.webp",
            iMaterials: ["1 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToGif: "/how-tos/Cross_Circuit.gif",
            iExploreMore: ["Lamp", "Electrical_Wire", "Robot_Arm"],
            iContraptions: null,
        },);
{
            iName: "Electrical Door",
            iDesc: "An Electrical Door opens when powered and closes when unpowered.",
            iDescLonger: "An Electrical Door opens when powered and closes when unpowered.",
            iHowToUse: "Place down the Cross Circuit directly in front of the power source or electrical wire and it will only output straight from where it came from.",
            iImg: "/item-thumbnails/electrical_door.webp",
            iMaterials: ["5 Iron Bar", "1 Mechanical Part"],
            iMImgs: ["/item-thumbnails/iron_bar.webp", "/item-thumbnails/mechanical_part.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToGif: null,
            iExploreMore: ["Pressure_Plate", "Electrical_Wire"],
            iContraptions: null,
        },);
{
            iName: "Dynamite Pack",
            iDesc: "A Dynamite Pack is like a bomb that when powered, explodes.",
            iDescLonger: "A Dynamite Pack is like a bomb that when powered, explodes.",
            iHowToUse: "Place down the Dynamite Pack and then power it with a power source or electrical wire.",
            iImg: "/item-thumbnails/dynamite_pack.webp",
            iMaterials: ["2 Bomb Pepper", "2 Slime", "1 Tin Bar"],
            iMImgs: ["/item-thumbnails/bomb_pepper.webp", "/item-thumbnails/slime.webp", "/item-thumbnails/tin_bar.webp"],
            iStation: "Alchemy Table",
            iSImg: ["/item-thumbnails/alchemy_table.webp"],
            iHowToGif: null,
            iExploreMore: ["Pressure_Plate", "Electrical_Wire", "Electricity_Generator"],
            iContraptions: null,
        },);
{
            iName: "Lamp",
            iDesc: "A Lamp, when powered, emits light when powered.",
            iDescLonger: "A Lamp, when powered, emits light when powered.",
            iHowToUse: "Simply place down the Lamp and then power it with a power source or electrical wire.",
            iImg: "/item-thumbnails/lamp.webp",
            iMaterials: ["2 Copper Bar", "2 Glass Piece"],
            iMImgs: ["/item-thumbnails/copper_bar.webp", "/item-thumbnails/glass_piece.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToGif: null,
            iExploreMore: ["Electrical_Wire", "Electricity_Generator"],
            iContraptions: null,
        },);
{
            iName: "Materializer",
            iDesc: "A Materializer, when powered and a valid figurine is placed inside, spawns clones of the figurine. This is obtained in Alien Challenge Arena.",
            iDescLonger: "A Materializer, when powered and a valid figurine is placed inside, spawns clones of the figurine. This is obtained in Alien Challenge Arena. The mobs that spawn will then fight any enemy mob near it.",
            iHowToUse: "Simply place down the Materializer, powwer it, and fill it with a figurine.",
            iImg: "/item-thumbnails/materializer.webp",
            iMaterials: null,
            iMImgs: null,
            iStation: null,
            iSImg: null,
            iHowToGif: null,
            iExploreMore: ["Electrical_Wire", "Electricity_Generator"],
            iContraptions: null,
        },);
{
            iName: "Crude Drill",
            iDesc: "A Crude Drill, when powered, drills the object in front of it and is slower than the Drill.",
            iDescLonger: "A Crude Drill, when powered, drills the object in front of it and is slower than the Drill. Most objects in front of the drill will be mined/broken, but you can clock the drill to prevent it from breaking the object in front.",
            iHowToUse: "Simply place down the Crude Drill and then power it with a power source or electrical wire.",
            iImg: "/item-thumbnails/crude_drill.webp",
            iMaterials: ["8 Tin Bar"],
            iMImgs: ["/item-thumbnails/tin_bar.webp"],
            iStation: "Automation Table",
            iSImg: ["/item-thumbnails/automation_table.webp"],
            iHowToGif: null,
            iExploreMore: ["Drill", "Electrical_Wire", "Electricity_Generator"],
            iContraptions: ["Electric_Clock", "Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },); 
{
            iName: "Drill",
            iDesc: "A Drill, when powered, hastily drills the object in front of it and is faster than the Crude Drill.",
            iDescLonger: "A Drill, when powered, hastily drills the object in front of it and is faster than the Crude Drill. Most objects in front of the drill will be mined/broken, but you can clock the drill to prevent it from breaking the object in front.",
            iHowToUse: "Simply place down the Drill and then power it with a power source or electrical wire.",
            iImg: "/item-thumbnails/drill.webp",
            iMaterials: ["10 Iron Bar", "10 Scarlet Bar"],
            iMImgs: ["/item-thumbnails/iron_bar.webp", "/item-thumbnails/scarlet_bar.webp"],
            iStation: "Automation Table",
            iSImg: ["/item-thumbnails/automation_table.webp"],
            iHowToGif: null,
            iExploreMore: ["Crude_Drill", "Electrical_Wire", "Electricity_Generator"],
            iContraptions: ["Electric_Clock", "Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },); 
{
            iName: "Robot Arm",
            iDesc: "A Robot Arm, when powered, picks up an item stack underneath its hand and puts it down on the opposite side.",
            iDescLonger: "A Robot Arm, when powered, picks up an item stack underneath its hand and puts it down on the opposite side. This is useful for sorting items or moving items from one place to another.",
            iHowToUse: "Simply place down the Robot Arm and then power it with a power source or electrical wire.",
            iImg: "/item-thumbnails/robot_arm.webp",
            iMaterials: ["5 Iron Bar", "5 Scarlet Bar"],
            iMImgs: ["/item-thumbnails/iron_bar.webp", "/item-thumbnails/scarlet_bar.webp"],
            iStation: "Automation Table",
            iSImg: ["/item-thumbnails/automation_table.webp"],
            iHowToGif: "/how-tos/Robot_From_And_To_Chest.gif",
            iExploreMore: ["Lever", "Electrical_Wire", "Electricity_Generator"],
            iContraptions: ["Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },); 
{
            iName: "Conveyor Belt",
            iDesc: "A Conveyor Belt moves items on it towards the direction it is going and doesn’t require electricity.",
            iDescLonger: "A Conveyor Belt moves items on it towards the direction it is going and doesn’t require electricity. This is useful for moving items from one place to another without the need for electricity.",
            iHowToUse: "Simply place down the Conveyor Belt and then place items on it.",
            iImg: "/item-thumbnails/conveyor_belt.webp",
            iMaterials: ["2 Tin Bar"],
            iMImgs: ["/item-thumbnails/tin_bar.webp"],
            iStation: "Automation Table",
            iSImg: ["/item-thumbnails/automation_table.webp"],
            iHowToGif: null,
            iExploreMore: ["Drill", "Crude_Drill", "Robot_Arm"],
            iContraptions: ["Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },); 
*/