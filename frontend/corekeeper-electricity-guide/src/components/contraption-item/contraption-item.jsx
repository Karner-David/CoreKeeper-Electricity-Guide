import React, { useState, useEffect } from 'react';
import './contraption-item.css';

export default function ContraptionItem({item}) {
    const [active, setActive] = useState(false);
    const [itemStuff, setItemStuff] = useState({
        item: item,
        numP: 4,
        materials: "1 Generator, 5 Chests, 3 Robot Arms, 6 Electrical Wire",
        p1: "The Sorting System in the game is pretty simple, because of how the Robot Arm works. If the Robot Arm tries putting an item in a chest that is not already inside, and that chest has no more free space, then it just drops the item on top of the chest.",
        gif1: "/how-tos/generatorWOWire.gif",
        p2: "So, for a Sorting System, you just keep repeating that same pattern above and just need an input chest, and an overflow chest at the end to catch unsorted items!",
        gif2: "/how-tos/generatorWOWire.gif",
        p3: "Then you want to put the drill system like below and turn it on. It's no problem if you don't have enough seeds as the farm will constantly break growing wood and get seeds every now and then.",
        gif3: "/how-tos/generatorWOWire.gif",
        p4: "Then you want to put the drill system like below and turn it on. It's no problem if you don't     have enough seeds as the farm will constantly break growing wood and get seeds every now and then.",
        gif4: "/how-tos/generatorWOWire.gif"
    })

    const contraptionStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        border: "1px solid grey",
        borderRadius: "15px",
        padding: "1vh",
    }

    return(
        <div id={itemStuff.item} style={contraptionStyle}>
            <div className='contraption-name-arrow-container'>
                <h3>{itemStuff.item}</h3>
                <div className="down-arrow-container">
                    <img src="/chevron_down.png" 
                        alt="down arrow" 
                        className={`down-arrow${active ? ' active' : ''}`}
                        onClick={() => setActive(!active)}
                    />
                </div>
            </div>
            {active && (
                <div className='contraption-content-container'>
                    <div id='ci-center'>
                        <p>Necessary Materials: {itemStuff.materials}</p>
                    </div>
                    <p>{itemStuff.p1}</p>
                    <div id="ci-center">
                        <img id='cii-center' src={itemStuff.gif1} alt="" />
                    </div>
                    <p>{itemStuff.p2}</p>
                    <div id="ci-center">
                        <img id='cii-center' src={itemStuff.gif2} alt="" />
                    </div>
                    {itemStuff.numP >= 3 && (
                        <>
                            <p>{itemStuff.p3}</p>
                            <div id="ci-center">
                                <img id='cii-center' src={itemStuff.gif3} alt="" />
                            </div>
                            {itemStuff.numP === 4 && (
                                <>
                                    <p>{itemStuff.p4}</p>
                                    <div id="ci-center">
                                        <img id='cii-center' src={itemStuff.gif1} alt="" />
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

// the plan for this is that it either loads the container bar, or it loads the full content.
// each contraptionitem should have a useState of active or not

{/* <h3>Auto-Smelter</h3>
<h4>Necessary Materials: 3 Furnaces, 3 Kilns, 3 Fury Forges, 10 Robot Arms, 9 Conveyor Belts, 
    16 Electrical Wire
</h4>
<p>The Auto-Smelter is similar to the Sorting System, but this time, a Robot Arm just drops
    the item on top of the furnace/kiln if the ore it's holding doesn't match the ore that
    is currently being smelted in the furnace/kiln.
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p>Thus, we can repeat this pattern, and have 3 furnaces for Copper, Tin, and Iron,
    3 kilns for Gold, Scarlet, and Octarine.
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p>Then, for the Galaxite, Solarite, and Pandorium ores that require the Fury Forge, the Robot 
    Arm can put the ore inside the Fury Forge, but can't pull out smelted ore. So, instead you 
    use the clock-drill mechanic. This will pull the smelted ore to behind the drill, and then 
    some conveyor belts can be used to connect it to the next Robot Arm.
</p> */}

/*
<h3>Auto-Wood Farm</h3>
<h4>Necessary Items: </h4>
<p> This farm works for any type of wood you want to grow like normal Wood, Coral Wood, or Gleam
    Wood. You first want to copy the layout shown below which is a 21x7 space outlined with tiles
    with 6 spaces of 2x6. And on the 4th 2x6, at the top left corner, replace the tile with your 
    wood seed.
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p> Then, the general rule goes that for the top 4 tiles of the 2x6s, you can replace them with
    seeds once there is 1 wood that is grown beside it, and then for the bottom 2 tiles, you can
    replace them once there are 2 direct sides with grown wood.
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p> Then you want to put the drill system like below and turn it on. It's no problem if you don't
    have enough seeds as the farm will constantly break growing wood and get seeds every now and then.
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p>Lastly, once you have the whole tree farm plot filled with wood and replaced all the 2x6s with seeds,
    at the last few seeds like below and you're all done with a really efficient automatic tree farm!
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
*/

/*
<h3>Stack Splitter</h3>
<h4>Necessary Items: </h4>
<p>The Stack Splitter takes in a stack of an item, and splits it into 4 different groups. This is
    really only important when you want to have multiple, same systems running at the same time to increase
    speed. This is something used in the advanced auto smelter to run 4 auto smelting systems at the same
    time to speed up smelted ore production! The layout is pretty simple! And can be easily followed by first
    putting down a table with 4 Robot Arms around it, powered by a Generator like below.
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p>Then, we use a double chest which serves as the chest you put your item stack in. There will also be a
    Robot Arm over the chest to pick the stack up and put it into the table, and a 2nd Robot Arm ready to
    put the remaining stack from the table back into the chest. This 2nd Robot Arm will hover over the drill
    that pulls out the remaining stack from the table, and the drill behind it ensures the items are reachable
    by the Robot Arm.
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p>Lastly, you want to circuit everything like below, and you have just built yourself a stack splitter!</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
*/

/*
<h3>Advanced Auto Smelter</h3>
<h4>Necessary Materials: </h4>
<p>The Advanced Auto Smelter is just a system of 4 Auto Smelters and each of these get a portion of an ore
    stack by using the Stack Splitter. Here you want to built 4 separate Auto Smelter systems like below:
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p>Then, you build a stack splitter with conveyor belts leading ore from a each Robot Arm to each Auto Smelter
    system. 
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
<p>Then, you can have a final conveyor belt that takes all the smelted ore and puts it into a chest. Pretty simple
    once you've learned the Auto Smelter and the Stack Splitter!
</p>
<img src="/how-tos/generatorWOWire.gif" alt="" />
*/