/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from 'react';
import NavBar from '../navbar/navbar';
import SearchBar from '../searchbar/searchbar';
import SearchFeedItem from '../search-feed-item/searchfeeditem';
import CreateNewItem from '../../TEST';
import './searchfeedpage.css';
import '../fonts.css';


import { generateClient } from "aws-amplify/api";
import { listItems } from '../../../../../backend/src/graphql/queries';
import { fetchItems } from '../../graphql/items';
const client = generateClient();

export default function SearchFeedPage({}) {
    const [feedItems, setFeedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchItems().then(setFeedItems);
    });

    const filteredItems = feedItems.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return(
        <div>
            <div className="search-page-container">
                <SearchBar value={searchTerm} onChange={setSearchTerm}></SearchBar>
                <div className="feed-container">
                    {filteredItems.length === 0 ? (
                        <div id="no-items">
                            <p id="no-items-text">No items found matching your search.</p>
                            <img id="no-items-img" src="/caveling_sleeping.webp" alt="" />
                        </div>
                    ) : (filteredItems.map((item, index) => (
                        <SearchFeedItem 
                            key={item.id}
                            iName={item.name}
                            iDesc={item.desc}
                            iImg={item.img}
                            iMaterials={item.materials}
                            iMImgs={item.materialImg}
                            iStation={item.station}
                            iSImg={item.stationImg}
                        />
                    )
                    ))}
                </div>
                {/* <CreateNewItem></CreateNewItem> */}
            </div>
        </div>
    )
}

/*
{
            iName: "Electricity Generator",
            iDesc: "An Electricity Generator can generate electricity with a strength of 23 tiles.",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["10 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: ["/item-thumbnails/electronics_table.webp"],
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Lever",
            iDesc: "A Lever, when turned on, it can generate electricity with a strength of 13 tiles.",
            iImg: "/item-thumbnails/lever.webp",
            iMaterials: ["2 Copper Bar", "3 Wood"],
            iMImgs: ["/item-thumbnails/copper_bar.webp", "/item-thumbnails/wood.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "A Lever can generate electricity with a strength of 13 tiles. They're good for turning on or off a machine and a cheaper alternative to a generator.",
            iHowToUse: "Place down the Lever and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Electrical Door", "Pressure Plate"],
            iContraptions: ["Stack_Splitter"],
        },
        {
            iName: "Pressure Plate",
            iDesc: "A Pressure Plate, when stood on by a player, can generate electricity with a strength of 13 tiles.",
            iImg: "/item-thumbnails/pressure_plate.webp",
            iMaterials: ["2 Copper Bar", "2 Tin Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp", "/item-thumbnails/tin_bar.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "A Pressure Plate activates when a player steps on it and can generate electricity with a strength of 13 tiles. These are great for entering electrical doors.",
            iHowToUse: "Place down the pressure plate next and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Door", "Electrical_Wire" ],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Electricity Stick",
            iDesc: "An Electricity Stick generates electricity with a strength of 1 tile.",
            iImg: "/item-thumbnails/electricity_stick.webp",
            iMaterials: ["2 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Electrical Wire",
            iDesc: "An Electrical Wire conducts electricity from a power source to any object touching it.",
            iImg: "/item-thumbnails/electrical_wire.webp",
            iMaterials: ["1 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Logic Circuit",
            iDesc: "A Logic Circuit allows electricity to flow in a certain direction once it receives 2 out of 3 electrical inputs.",
            iImg: "/item-thumbnails/logic_circuit.webp",
            iMaterials: ["2 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Delay Circuit",
            iDesc: "A Delay Circuit stores electrical input and output it after 1 second.",
            iImg: "/item-thumbnails/delay_circuit.webp",
            iMaterials: ["2 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Cross Circuit",
            iDesc: "A Cross Circuit conducts electricity, but the electricity only goes straight from the side it came from.",
            iImg: "/item-thumbnails/cross_circuit.webp",
            iMaterials: ["1 Copper Bar"],
            iMImgs: ["/item-thumbnails/copper_bar.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Electrical Door",
            iDesc: "An Electrical Door opens when powered and closes when unpowered.",
            iImg: "/item-thumbnails/electrical_door.webp",
            iMaterials: ["5 Iron Bar", "1 Mechanical Part"],
            iMImgs: ["/item-thumbnails/iron_bar.webp", "/item-thumbnails/mechanical_part.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Dynamite Pack",
            iDesc: "A Dynamite Pack, when powered, explodes.",
            iImg: "/item-thumbnails/dynamite_pack.webp",
            iMaterials: ["2 Bomb Pepper","2 Slime", "1 Tin Bar"],
            iMImgs: ["/item-thumbnails/bomb_pepper.webp", "/item-thumbnails/slime.webp", "/item-thumbnails/tin_bar.webp"],
            iStation: "Alchemy Table",
            iSImg: "/item-thumbnails/alchemy_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Lamp",
            iDesc: "A Lamp, when powered, emits light when powered.",
            iImg: "/item-thumbnails/lamp.webp",
            iMaterials: ["2 Copper Bar", "4 Glass Piece"],
            iMImgs: ["/item-thumbnails/copper_bar.webp", "/item-thumbnails/glass_piece.webp"],
            iStation: "Electronics Table",
            iSImg: "/item-thumbnails/electronics_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Materializer",
            iDesc: "A Materializer, when powered and a valid figurine is placed inside, spawns clones of the figurine. This is obtained in Alien Challenge Arena.",
            iImg: "/item-thumbnails/materializer.webp",
            iMaterials: "None",
            iMImgs: ["None"],
            iStation: "None",
            iSImg: "None",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Crude Drill",
            iDesc: "A Crude Drill, when powered, drills the object in front of it and is slower than the Drill.",
            iImg: "/item-thumbnails/crude_drill.webp",
            iMaterials: ["8 Tin Bar"],
            iMImgs: ["/item-thumbnails/tin_bar.webp"],
            iStation: "Automation Table",
            iSImg: "/item-thumbnails/automation_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Drill",
            iDesc: "A Drill, when powered, hastily drills the object in front of it and is faster than the Crude Drill.",
            iImg: "/item-thumbnails/drill.webp",
            iMaterials: ["10 Iron Bar", "10 Scarlet Bar"],
            iMImgs: ["/item-thumbnails/iron_bar.webp", "/item-thumbnails/scarlet_bar.webp"],
            iStation: "Automation Table",
            iSImg: "/item-thumbnails/automation_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Robot Arm",
            iDesc: "A Robot Arm, when powered, picks up an item stack underneath its hand and puts it down on the opposite side.",
            iImg: "/item-thumbnails/robot_arm.webp",
            iMaterials: ["5 Iron Bar", "5 Scarlet Bar"],
            iMImgs: ["/item-thumbnails/iron_bar.webp", "/item-thumbnails/scarlet_bar.webp"],
            iStation: "Automation Table",
            iSImg: "/item-thumbnails/automation_table.webp",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
        },
        {
            iName: "Conveyor Belt",
            iDesc: "A Conveyor Belt moves items on it towards the direction it is going and doesn’t require electricity.",
            iDescLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go to power source when the player wants to leave a machine constantly running.",
            iHowToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
            iHowToGif: "/how-tos/generatorWOWire.gif",
            iExploreMore: ["Electrical_Wire", "Lamp", "Robot_Arm", "Crude_Drill", "Drill"],
            iContraptions: ["Electric_Clock, Sorting_System", "Auto_Smelting", "Auto_Wood_Farm"],
            iImg: "/item-thumbnails/conveyor_belt.webp",
            iMaterials: ["2 Tin Bar"],
            iMImgs: ["/item-thumbnails/tin_bar.webp"],
            iStation: "Automation Table",
            iSImg: "/item-thumbnails/automation_table.webp"
        },
*/