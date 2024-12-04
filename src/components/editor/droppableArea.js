import React from 'react';
import { useDrop } from 'react-dnd';
import './droppableArea.css';

const DroppableArea = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'COMPONENT',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className={`droppable-area ${isOver ? 'droppable-area--over' : ''}`}
        >
            Drop components here
        </div>
    );
};

export default DroppableArea;