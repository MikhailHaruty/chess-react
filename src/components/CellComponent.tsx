import React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void; 
}

const CellComponent: React.FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div
            className={["cell", cell.color, selected ? "selected" : '', cell.available && cell.figure ? "target" : '',].join(' ')}
            onClick={() => click(cell)}
        >
            {cell.available && !cell.figure && <div className="available"></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt='figure'/>}
        </div>
    )
};

export default CellComponent;