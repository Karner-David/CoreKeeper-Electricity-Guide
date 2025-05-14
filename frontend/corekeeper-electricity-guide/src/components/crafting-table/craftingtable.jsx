import React from 'react';
import './craftingtable.css';

export default function CraftingTable() {
  return (
    <div className="crafting-table table-responsive">
        <table 
            className="table table-dark table-bordered table-sm text-center align-middle w-auto"
        >
                <thead className="table-primary">
                    <tr>
                        <th>Result</th>
                        <th>Materials</th>
                        <th>Crafting Station</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <img src="/item-thumbnails/generator.png" alt="Electricity Generator" className="item-image" />
                                <span>Electricity Generator</span>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <img src="/item-thumbnails/generator.png" alt="Copper Bar" className="item-image" />
                                <span>Copper Bar × 3</span>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <img src="/item-thumbnails/generator.png" alt="Electrical Table" className="item-image" />
                                <span>Electrical Table</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}