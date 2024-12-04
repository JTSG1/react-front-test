import './jumbotron.css';
import { H1, Paragraph } from '../../common/common';

const Jumbotron = ( { heading, content, addComponent, isEditMode }) => {
    console.log("ISEDITMODE", isEditMode);
    return (
    <div className="container jumbotron">
        <H1 className="jumbotron__heading" inner={heading} isEditMode={isEditMode}></H1>
        <Paragraph className="jumbotron__text" inner={content} isEditMode={isEditMode}>
        </Paragraph>
        <a className="jumbotron__button" href="#">Read more</a>
    </div>
    )
};

export const metadata = {
    "title": "Jumbotron",
    "description": "A jumbotron component with heading, text and button",
    "child": false,
    "props": [
        {
            "name": "heading",
            "type": "string",
            "description": "Heading of the jumbotron"
        },
        {
            "name": "content",
            "type": "string",
            "description": "Content of the jumbotron"
        }
    ],
}

export const template = {
    "type": "jumbotron/jumbotron",
    "heading": "Welcome to our website",
    "content": "<p>This is a sample website built using React. It uses a custom builder to create pages and components.</p>"
}

export default Jumbotron;