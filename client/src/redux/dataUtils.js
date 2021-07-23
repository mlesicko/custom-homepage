export const addCategory = (data, newCategory) => ({
    ...data,
    categories: [
        ...data.categories,
		{
        	...newCategory,
			id: Math.max(...data.categories.map(c => c.id)) + 1
		}
    ]
});

export const updateCategory = (data, categoryIndex, updatedCategory) => ({
	...data,
	categories: [
		...data.categories.slice(0, categoryIndex),
		updatedCategory,
		...data.categories.slice(categoryIndex + 1)
	]
});

export const deleteCategory = (data, categoryIndex) => ({
    ...data,
    categories: [
        ...data.categories.slice(0, categoryIndex),
        ...data.categories.slice(categoryIndex + 1)
    ]
});

export const moveCategory = (data, oldCategoryIndex, newCategoryIndex) => {
    const categories = [...data.categories];
    categories.splice(newCategoryIndex, 0, categories.splice(oldCategoryIndex, 1)[0]);
    return {...data, categories};
}

export const addSite = (data, categoryIndex, newSite) => {
    const category = data.categories[categoryIndex];
    return updateCategory (data, categoryIndex,
        {
            ...category,
            sites: [
                ...category.sites,
                newSite
            ]
        }
    );
};

export const updateSite = (
    data,
    categoryIndex,
    siteIndex,
    updatedSite
) => {
    const category = data.categories[categoryIndex];
    return updateCategory (data, categoryIndex,
        {
            ...category,
            sites: [
                ...category.sites.slice(0, siteIndex),
                updatedSite,
                ...category.sites.slice(siteIndex + 1)
            ]
        }
    );

};

export const deleteSite = (data, categoryIndex, siteIndex) => {
    const category = data.categories[categoryIndex];
    return updateCategory (data, categoryIndex,
        {
            ...category,
            sites: [
                ...category.sites.slice(0, siteIndex),
                ...category.sites.slice(siteIndex + 1)
            ]
        }
    );
};

export const moveSite = (
    data,
    categoryIndex,
	newCategoryIndex,
    oldSiteIndex,
    newSiteIndex
) => {
	if (categoryIndex === newCategoryIndex) {
		const category = data.categories[categoryIndex];
		const sites = [...category.sites];
		sites.splice(newSiteIndex, 0, sites.splice(oldSiteIndex, 1)[0]);
		return updateCategory(data, categoryIndex, {...category, sites});
	} else {
		const oldCategory = data.categories[categoryIndex];
		const sites = [...oldCategory.sites];
		const [site] = sites.splice(oldSiteIndex, 1);
		data = updateCategory(data, categoryIndex, {...oldCategory, sites});
		const newCategory = data.categories[newCategoryIndex];
		const newSites = [...newCategory.sites];
		newSites.splice(newSiteIndex, 0, site);
		data = updateCategory(data, newCategoryIndex, {
			...newCategory,
			sites: newSites
		});
		return data;
	}
}
