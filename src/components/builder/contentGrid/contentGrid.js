import ContendGridItem from "./contentGridItem";
import "./contentGrid.css";

const ContentGrid = ( {items, addComponent, isEditMode} ) => {

  return <div className="container content-grid">
    
    {
      items.map((item, index) => (
          <ContendGridItem key={index} title={item.title} description={item.description} image={item.image} isEditMode={isEditMode} />
        )
      )
    }

  </div>;

}

export const metadata = {
  "title": "Content Grid",
  "description": "A content grid component with multiple content grid items",
  "child": false,
  "validChildren": ["contentGrid/contentGridItem"],
  "props": [
    {
      "name": "items",
      "type": "array",
      "description": "Array of items to display in the content grid",
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
          "description": "Image URL of the content grid item"
        }
      ]
    }]
};

export const template = {
  "type": "contentGrid/contentGrid",
  "items": [
    {
      "title": "Item 1",
      "description": "Description 1",
      "image": "https://via.placeholder.com/300"
    },
    {
      "title": "Item 2",
      "description": "Description 2",
      "image": "https://via.placeholder.com/300"
    },
    {
      "title": "Item 3",
      "description": "Description 3",
      "image": "https://via.placeholder.com/300"
    }
  ]
};

export default ContentGrid;