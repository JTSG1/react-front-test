import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Footer from './components/builder/footer/footer';
import './App.css';
// import initialSiteStructure from './data/sample_data_2.json';
import initialSiteStructure from './data/sample_data_3.json';
import BuilderComponent from './components/builder/builderComponent';
import Navbar from './components/builder/navbar/navbar';
import importAllComponents from './utils/importAllComponents';
import EditPane from './components/editor/editPane';
import Floater from './components/editor/floater';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const builderComponents = importAllComponents(require.context('./components/builder', true, /\.js$/));

function App() {

  const [siteStructure, setSiteStructure] = useState(initialSiteStructure);
  const [isEditMode, setIsEditMode] = useState(true);
  const rightPaneRef = useRef(null);

  useEffect(() => {
    const loadStylesheet = (theme) => {
      const existingLink = document.getElementById('theme');
      if (existingLink) {
        existingLink.href = `themes/${theme}.css`;
      } else {
        const link = document.createElement('link');
        link.id = 'theme';
        link.rel = 'stylesheet';
        link.href = `themes/${theme}.css`; // Assuming the CSS files are in the public folder
        document.head.appendChild(link);
      }
      console.log(siteStructure);
    };

    loadStylesheet(siteStructure.theme);
  }, [siteStructure]); 

  useEffect(() => {
    document.title = siteStructure.name; // Set the document title correctly
  }, [siteStructure.name]);

  const navLinks = siteStructure.pages.map(page => ({
    name: page.name,
    url: page.url
  }));  

  let componentMap;
  // If we are in edit mode, we need to wrap the components in BuilderComponent
  if (isEditMode) {
    componentMap = Object.keys(builderComponents).reduce((acc, key) => {
      acc[key] = BuilderComponent(builderComponents[key].component);
      return acc;
    }, {});
  } else {
    componentMap = Object.keys(builderComponents).reduce((acc, key) => {
      acc[key] = builderComponents[key].component;
      return acc;
    }, {});
  }

  const addComponent = (pageIndex, componentIndex, droppedComponent) => {

    setSiteStructure(prevState => {

      const updatedPages = [...prevState.pages];

      const modifiedTemplate = droppedComponent.spawner();

      const updatedContent = [...updatedPages[pageIndex].content];
      updatedContent.splice(componentIndex + 1, 0, modifiedTemplate);

      updatedPages[pageIndex] = {
          ...updatedPages[pageIndex],
          content: updatedContent
      };


      return {
          ...prevState,
          pages: updatedPages
      };
    });
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="App">
          {/* {isEditMode && <EditPane builderComponents={builderComponents}/>} */}
          
          {
            isEditMode &&
            <div className="app_content__left_pane">
              <Floater />
              <EditPane builderComponents={builderComponents} />
            </div>
          }
          <div className={`app__content__site ${isEditMode ? "app_content__site_editMode" : ""}`}>
          <Routes>
          {siteStructure.pages.map((page, pageIndex) => (
          <Route key={pageIndex} exact path={page.url} element={
            <React.Fragment>
            <Navbar pages={ navLinks } siteName={ siteStructure.name } logo={ siteStructure.logo }/>
              {page.content.map((content, componentIndex) => {
                const Component = componentMap[content.type];
                if (Component) {
                  return <Component key={componentIndex} {...content} pageIndex={pageIndex} componentIndex={componentIndex} addComponent={addComponent} fqName={content.type} isEditMode={isEditMode}/>;
                } else {
                  console.error(`Component type "${content.type}" not found in componentMap.`);
                  return null;
                }
              })}
            <Footer footerData={siteStructure.footer} />
            </React.Fragment>
          } />
          ))}
          </Routes>
          </div>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
