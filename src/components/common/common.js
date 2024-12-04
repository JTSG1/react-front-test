const isEditable = false;

export const H1 = ({ inner, isEditMode }) => {

    return (
        <h1 contentEditable={isEditMode} dangerouslySetInnerHTML={{ __html: inner}}/>
    );
}

export const H2 = ({ inner, isEditMode }) => {
    return (
        <h2 contentEditable={isEditMode} dangerouslySetInnerHTML={{ __html: inner}}/>
    );
}

export const H3 = ({ inner, isEditMode }) => {
    return (
        <h3 contentEditable={isEditMode} dangerouslySetInnerHTML={{ __html: inner}}/>
    );
}

export const Paragraph = ({ inner, isEditMode }) => {
    return (
        <p contentEditable={isEditMode} dangerouslySetInnerHTML={{ __html: inner}}/>
    );
}