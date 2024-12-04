import React from 'react';
import DroppableArea from '../editor/droppableArea';
import './builderComponent.css';

const BuilderComponent = ( WrappedComponent, isEditMode ) => {

    return (props) => {

        const { pageIndex, componentIndex, addComponent, isEditMode } = props;
        
        const handleDrop = (item) => {
            addComponent(pageIndex, componentIndex, item.builderComponent);
        }

        return (
            <div>
            <div className={`.builder__component ${isEditMode ? "builder__component--edit" : ""}`}>
                <WrappedComponent {...props} />
            </div>
            <DroppableArea onDrop={handleDrop} />
            </div>
        );
    }
    
};

export default BuilderComponent;