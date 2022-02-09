const addCategory = (type) => (data, newCategory) => ({
    ...data,
    [type]: [
        ...data[type],
		{
        	...newCategory,
			id: Math.max(...data[type].map(c => c.id)) + 1
		}
    ]
});

const updateCategory = (type) => (data, categoryIndex, updatedCategory) => ({
	...data,
	[type]: [
		...data[type].slice(0, categoryIndex),
		updatedCategory,
		...data[type].slice(categoryIndex + 1)
	]
});

const deleteCategory = (type) => (data, categoryIndex) => ({
    ...data,
    [type]: [
        ...data[type].slice(0, categoryIndex),
        ...data[type].slice(categoryIndex + 1)
    ]
});

const moveCategory = (type) => (data, oldCategoryIndex, newCategoryIndex) => {
    const categories = [...data[type]];
    categories.splice(newCategoryIndex, 0, categories.splice(oldCategoryIndex, 1)[0]);
    return {
		...data, 
		[type]: categories
	};
}

const addElement = (type) => (
	data,
	categoryIndex,
	newElement
) => {
    const category = data[type][categoryIndex];
    return updateCategory(type)(data, categoryIndex,
        {
            ...category,
            elements: [
                ...category.elements,
                newElement
            ]
        }
    );
};

const updateElement = (type) => (
    data,
    categoryIndex,
    elementIndex,
    updatedElement
) => {
    const category = data[type][categoryIndex];
    return updateCategory(type)(data, categoryIndex,
        {
            ...category,
            elements: [
                ...category.elements.slice(0, elementIndex),
                updatedElement,
                ...category.elements.slice(elementIndex + 1)
            ]
        }
    );

};

const deleteElement = (type) => (
	data,
	categoryIndex,
	elementIndex
) => {
    const category = data[type][categoryIndex];
    return updateCategory(type)(data, categoryIndex,
        {
            ...category,
            elements: [
                ...category.elements.slice(0, elementIndex),
                ...category.elements.slice(elementIndex + 1)
            ]
        }
    );
};

const moveElement = (type) => (
    data,
    categoryIndex,
	newCategoryIndex,
    oldElementIndex,
    newElementIndex
) => {
	if (categoryIndex === newCategoryIndex) {
		const category = data[type][categoryIndex];
		const elements = [...category.elements];
		elements.splice(newElementIndex, 0, elements.splice(oldElementIndex, 1)[0]);
		return updateCategory(type)(data, categoryIndex, {
			...category,
			elements
		});
	} else {
		const oldCategory = data[type][categoryIndex];
		const elements = [...oldCategory.elements];
		const [element] = elements.splice(oldElementIndex, 1);
		console.log(elements);
		data = updateCategory(type)(data, categoryIndex, {
			...oldCategory,
			elements
		});
		console.log(data[type][categoryIndex]);
		const newCategory = data[type][newCategoryIndex];
		const newElements = [...newCategory.elements];
		newElements.splice(newElementIndex, 0, element);
		data = updateCategory(type)(data, newCategoryIndex, {
			...newCategory,
			elements: newElements
		});
		return data;
	}
}

export const addSiteCategory = addCategory("siteCategories");
export const updateSiteCategory = updateCategory("siteCategories");
export const deleteSiteCategory = deleteCategory("siteCategories");
export const moveSiteCategory = moveCategory("siteCategories");
export const addSite = addElement("siteCategories");
export const updateSite = updateElement("siteCategories");
export const deleteSite = deleteElement("siteCategories");
export const moveSite = moveElement("siteCategories");

export const addTaskCategory = addCategory("taskCategories");
export const updateTaskCategory = updateCategory("taskCategories");
export const deleteTaskCategory = deleteCategory("taskCategories");
export const moveTaskCategory = moveCategory("taskCategories");
export const addTask = addElement("taskCategories");
export const updateTask = updateElement("taskCategories");
export const deleteTask = deleteElement("taskCategories");
export const moveTask = moveElement("taskCategories");

