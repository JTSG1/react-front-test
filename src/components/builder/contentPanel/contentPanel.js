import './contentPanel.css';
import { H2, Paragraph } from '../../common/common';

const ContentPanel = ({ isReverse, title, content, image, isEditMode }) => {
    
    return (
        <div className="container">
            <div className={`content-panel ${isReverse ? "content-panel--reverse" : ""}`}>
                {
                    image && <img src={ image } alt="Description" className={`content-panel__image ${isReverse ? "content-panel__image--reverse" : ""}`} />
                }
                <div className="content-panel__content">
                    <H2 inner={title} isEditMode={isEditMode} />
                    <Paragraph inner={content} isEditMode={isEditMode} />
                </div>
            </div>
        </div>
    );
}

export const metadata = {
    "title": "Content Panel",
    "description": "A content panel component with image and text",
    "child": false,
    "props": [
        {
            "name": "isReverse",
            "type": "boolean",
            "description": "Reverse the order of image and text"
        },
        {
            "name": "title",
            "type": "string",
            "description": "Title of the content panel"
        },
        {
            "name": "content",
            "type": "string",
            "description": "Content of the content panel"
        },
        {
            "name": "image",
            "type": "string",
            "description": "Image URL"
        }
    ],
}

export const template = {
    "type": "contentPanel/contentPanel",
    "isReverse": false,
    "title": "About Us",
    "content": "<p>Our company was founded in 2021 with the goal of providing quality services to our customers. We specialize in web development, design and digital marketing.</p>",
    "image": "https://via.placeholder.com/300"
}

export default ContentPanel;