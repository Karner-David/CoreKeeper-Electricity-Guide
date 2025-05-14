import React, { useState, useEffect} from 'react';
import NavBar from '../navbar/navbar';
import SearchBar from '../searchbar/searchbar';
import SearchFeedItem from '../search-feed-item/searchfeeditem';
import './searchfeedpage.css';
import '../fonts.css';

export default function SearchFeedPage({}) {
    const [feedItems, setFeedItems] = useState([
        {
            iName: "Electricity Generator",
            iDesc: "An Electricity Generator can generate electricity with a strength of 23 tiles.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["10 Copper Bar"],
        },
        {
            iName: "Lever",
            iDesc: "A Lever, when turned on, it can generate electricity with a strength of 13 tiles.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["3 Wood", "2 Copper Bar"],
        },
        {
            iName: "Pressure Plate",
            iDesc: "A Pressure Plate, when stood on by a player, can generate electricity with a strength of 13 tiles",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["2 Copper Bar", "2 Tin Bar"],
        },
        {
            iName: "Electricity Stick",
            iDesc: "An Electricity Stick generates electricity with a strength of 1 tile.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["2 Copper Bar"],
        },
        {
            iName: "Electrical Wire",
            iDesc: "An Electrical Wire conducts electricity from a power source to any object touching it.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["1 Copper Bar"],
        },
        {
            iName: "Logic Circuit",
            iDesc: "A Logic Circuit allows electricity to flow in a certain direction once it receives 2 out of 3 electrical inputs.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["2 Copper Bar"],
        },
        {
            iName: "Delay Circuit",
            iDesc: "A Delay Circuit stores electrical input and output it after 1 second.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["2 Copper Bar"],
        },
        {
            iName: "Cross Circuit",
            iDesc: "A Cross Circuit conducts electricity, but the electricity only goes straight from the side it came from.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["1 Copper Bar"],
        },
        {
            iName: "Electrical Door",
            iDesc: "An Electrical Door opens when powered and closes when unpowered.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["5 Iron Bar", "1 Mechanical Part"],
        },
        {
            iName: "Dynamite Pack",
            iDesc: "A Dynamite Pack, when powered, explodes.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["2 Bomb Pepper","2 Slime", "1 Tin Bar"],
        },
        {
            iName: "Lamp",
            iDesc: "A Lamp, when powered, emits light when powered.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["2 Copper Bar", "4 Glass Piece"],
        },
        {
            iName: "Materializer",
            iDesc: "A Materializer, when powered and a valid figurine is placed inside, spawns clones of the figurine.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["Earned in Alien Challenge Arena"],
        },
        {
            iName: "Crude Drill",
            iDesc: "A Crude Drill, when powered, drills the object in front of it and is slower than the Drill.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["8 Tin Bar"],
        },
        {
            iName: "Drill",
            iDesc: "A Drill, when powered, hastily drills the object in front of it and is faster than the Crude Drill.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["10 Iron Bar", "10 Scarlet Bar"],
        },
        {
            iName: "Robot Arm",
            iDesc: "A Robot Arm, when powered, picks up an item stack underneath its hand and puts it down on the opposite side.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["5 Iron Bar", "5 Scarlet Bar"],
        },
        {
            iName: "Conveyor Belt",
            iDesc: "A Conveyor Belt moves items on it towards the direction it is going and doesn’t require electricity.",
            iImg: "/item-thumbnails/generator.png",
            iMaterials: ["2 Tin Bar"],
        },
    ]);


    return(
        <div>
            <NavBar/>
            <div className="search-page-container">
                <SearchBar></SearchBar>
                <div className="feed-container">
                    {feedItems.map((item, index) => (
                        <SearchFeedItem 
                            iName={item.iName}
                            iDesc={item.iDesc}
                            iImg={item.iImg}
                            iMaterials={item.iMaterials}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}