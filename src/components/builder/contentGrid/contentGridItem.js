import './contentGridItem.css';
import { Div, H3, Paragraph } from '../../common/common';

const ContendGridItem = ({ title, description, image, isEditMode }) => {    
    return (
        <div className="content-grid-item">
            { image && <img src={image} alt={title} /> }
            <div className="content-grid-item__content">
                <H3 inner={title} isEditMode={isEditMode}/>
                <Paragraph inner={description} isEditMode={isEditMode}/>
            </div>
        </div>
    );
}

export const metadata = {
    "title": "Content Grid Item",
    "description": "A content grid item component with image, title and description",
    "child": true,
    "props": [
        {
            "name": "title",
            "type": "string",
            "description": "Title of the content grid item"
        },
        {
            "name": "description",
            "type": "string",
            "description": "Description of the content grid item"
        },
        {
            "name": "image",
            "type": "string",
            "description": "Image URL"
        }
    ],
}

export default ContendGridItem;