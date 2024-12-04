import './featureList.css';
import { H3, Paragraph } from '../../common/common';

const FeatureList = ({ features, isEditMode }) => {
    return (
        <div className="feature-list">
            {features.map((feature, index) => (
                <div key={index} className="feature-list__item">
                    <H3 inner={feature.title} isEditMode={isEditMode}/> 
                    <Paragraph inner={feature.description} isEditMode={isEditMode}/>
                </div>
            ))}
        </div>
    );
}

export const metadata = {
    "title": "Feature List",
    "description": "A list of features or benefits",
    "props": [
        { "name": "features", "type": "array", "description": "Array of features", "props": [
            { "name": "title", "type": "string", "description": "Title of the feature" },
            { "name": "description", "type": "string", "description": "Description of the feature" }
        ]}
    ],
    "child": false
}

export const template = {
    "type": "featureList/featureList",
    "features": [
        { "title": "Feature 1", "description": "Description of feature 1" },
        { "title": "Feature 2", "description": "Description of feature 2" },
        { "title": "Feature 3", "description": "Description of feature 3" }
    ]
}

export default FeatureList;