import React from 'react';
import './craftingtable.css';

export default function CraftingTable({ iName, iImg, iMaterials, iMImgs, iStation, iSImg}) {
  return (
        <div className="crafting-table table-responsive">
            <table 
                className="table table-dark table-bordered table-sm text-center align-middle w-auto"
            >
                <thead className="table-primary">
                    <tr>
                        <th className='col-title'>Result</th>
                        <th className='col-title'>Materials</th>
                        <th className='col-title'>Crafting Station</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <img src={iImg} alt={iImg} className="item-image" />
                                <span>{iName}</span>
                            </div>
                        </td>
                        <td>
                            <div className="materials-list">
                                {iMaterials.map((material, idx) => (
                                <div className="material-entry" key={idx}>
                                    <img src={iMImgs[idx]} alt={material} className="item-image" />
                                    <span>{material}</span>
                                </div>
                                ))}
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <img src={iSImg} alt="Electrical Table" className="item-image" />
                                <span>{iStation}</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}