import React, { useState, useEffect } from 'react';
import './basics-page.css';
import AsideTOC from '../aside-toc/aside-toc';

export default function BasicsPage() {

    const headings = ["Powering Machines", "Special Must Knows", "Next Steps"]

    return(
        <div className="basics-container">
            <h1>Basics</h1>
            <div className="basics-aside">
                <AsideTOC className="basics-aside" headings={headings}></AsideTOC> 
            </div>
            <div className="border-article-container">
                <div className="basics-article-container">
                    <div id='Powering Machines' className="power-container">
                        <h3 >Powering Machines</h3>
                        <div className="regular-power-container">
                            <p>To power machines, you simply connect them to a power source (e.g. Electricity Generator,
                                Lever, Pressure Plate) by placing the machine right next to it or connecting them via
                                electrical wires. In most cases, this is what all you need to get your machine up and running!
                            </p>
                            <div className="gif-container">
                                <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                            </div>
                            <p>There are also other options than just electrical wire. </p>
                            <ol>
                                <li>Logic Circuit: allows electricity to flow once it receives 2 out of 3 inputs.</li>
                                <li>Delay Circuit: has a 1 second delay between receiving input and emitting output.</li>
                                <li>Cross Circuit: electricity can only flow straight from the side it came from.</li>
                            </ol>
                            <div className="gif-container">
                                <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif-triple' />
                                <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif-triple' />
                                <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif-triple' />
                            </div>
                        </div>
                        <div className="clock-power-container">
                            <p>You can also make what's called a clock which is where you pulse the electricity 
                            like it is repeatedly turning off and on. This power source is useful for drills 
                            which you'll see why in the (Special Mechanics) section or for making flashing 
                            lights for whatever reason...
                            </p>
                            <div className="gif-container">
                                <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                            </div>
                        </div>
                    </div>
                    <div id='Special Must Knows'>
                        <h3>Special Must Knows!</h3>
                        <div className="powering-machines">
                            <div className="clock-drill-container">
                                <h4>Drills</h4>
                                <p>The Drill has a special mechanic where it will pull items from the drill tip to 
                                behind it. Literally, an item floats through the drill like it's on a conveyor belt.
                                </p>
                                <div className="gif-container">
                                    <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                                </div>
                                <p> Then, when there is a chest placed in front of it, it can pull items out of the chest. 
                                    But, after some time, the drill will eventually break the chest. How can this be solved? 
                                    You can actually connect the drill to a clock instead of a constant power source, and 
                                    the drill will continuously pull from the chest without ever breaking it! (This also works
                                    for other containers like the Fury Forge.)
                                </p>
                                <div className="gif-container">
                                    <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                                </div>
                                <p> Drills can also pull items through walls, gaps, or objects, as long as the items on the
                                    otherside are being pushed by a conveyor belt. 
                                </p>
                                <div className="gif-container">
                                    <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                                </div>
                            </div>
                            <div className="robot-arm-container">
                                <h4>Robot Arm</h4>
                                <p>The Robot Arm is useful for its ability to pick up items under its hand and place the item
                                    behind it. 
                                </p>
                                <div className="gif-container">
                                    <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                                </div>
                                <p> If there is a chest behind it, it can put the item directly into the chest. The
                                    Robot Arm can also do the opposite and pick up an item from a chest and put it behind it. 
                                </p>
                                <div className="gif-container">
                                    <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                                </div>
                                <p> It doesn't have to always be a chest with some other options being a table, furnace, smelter
                                    kiln, but not a fury forge (which would need a clocked drill to pull smelted ore out).
                                </p>
                                <div className="gif-container">
                                    <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="next-steps-container">
                        <h3 id='Next Steps'>Next Steps</h3>
                        <p>Now that you have run through the basics, check out Contraptions to find some systems that you could add to your base!</p>
                        <ul>
                            <li>Sorting System</li>
                            <li>Auto-Smelter</li>
                            <li>Auto-Crop Farm</li>
                            <li>Auto-Wood Farm</li>
                            <li>Stack Splitter</li>
                            <li>Advanced Auto-Smelter System</li>
                            <li>Mob Farm</li>
                            <div className="gif-container">
                                    <img src="/how-tos/generatorWOWire.gif" alt="" id='basics-gif' />
                                </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Things that I have to include in here. Clock, clock -> drill
// Powering Machines: simple powering, clock
// Special Mechanics: robot arm (can pick up stuff from floor, ore finished from smelting, table)
// clock -> drill: can pull from 1 block walls, chests, drills behind one another

// For drill specific page