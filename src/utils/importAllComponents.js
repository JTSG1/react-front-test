const importAllComponents = (requireContext) => {

    const components = {};
    requireContext.keys().forEach((key) => {

        const componentModule = requireContext(key);
        const componentName = key.replace('./', '').replace('.js', '');

        if(componentModule.metadata && !componentModule.metadata.child) {
            components[componentName] = {
                component: componentModule.default,
                metadata: componentModule.metadata,
                template: componentModule.template,
                spawner: componentModule.spawner? componentModule.spawner : () => {
                    console.warn(`Component ${componentName} does not have a spawner, will not be available in the builder`)
                    return componentModule.template
                }
            };
        } else {
            console.warn(`Component ${componentName} is missing metadata, will not be available in the builder`);
        }

      });
    return components;

}

export default importAllComponents;