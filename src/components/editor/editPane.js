import './editPane.css';
import EditPaneComponentItem from './editPaneComponentItem';

const EditPane = ({ builderComponents }) => {
    return (
        <div className="editPane">
            <h2 className="editPane__title">Widgets Library</h2>
            <p>Drag and drop a widget to add it to your page</p>
            <div className="editPane__container">
                {
                    Object.keys(builderComponents).map((key, index) => {
                        return (
                            <EditPaneComponentItem key={index} index={index} builderComponent={builderComponents[key]} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default EditPane;