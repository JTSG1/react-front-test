import './editPane.css';
import { useDrag } from 'react-dnd';

const EditPaneComponentItem = ({ index, builderComponent }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'COMPONENT',
        item: { index, builderComponent },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const propsSize = builderComponent.metadata.props ? builderComponent.metadata.props.length : 0;
    return (
        <div ref={drag} className="editPane-component__container">
            <h4>{builderComponent.metadata.title}</h4>
            <p>{builderComponent.metadata.description}</p>
            <div>
                Configurable Elements: { propsSize }
            </div>
        </div>
    );
}

export default EditPaneComponentItem;