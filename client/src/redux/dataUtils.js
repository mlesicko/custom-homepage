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

export const addChannel = (data, categoryIndex, newChannel) => {
    const category = data.categories[categoryIndex];
    return updateCategory (data, categoryIndex,
        {
            ...category,
            channels: [
                ...category.channels,
                newChannel
            ]
        }
    );
};

export const updateChannel = (
    data,
    categoryIndex,
    channelIndex,
    updatedChannel
) => {
    const category = data.categories[categoryIndex];
    return updateCategory (data, categoryIndex,
        {
            ...category,
            channels: [
                ...category.channels.slice(0, channelIndex),
                updatedChannel,
                ...category.channels.slice(channelIndex + 1)
            ]
        }
    );

};

export const deleteChannel = (data, categoryIndex, channelIndex) => {
    const category = data.categories[categoryIndex];
    return updateCategory (data, categoryIndex,
        {
            ...category,
            channels: [
                ...category.channels.slice(0, channelIndex),
                ...category.channels.slice(channelIndex + 1)
            ]
        }
    );
};

export const moveChannel = (
    data,
    categoryIndex,
	newCategoryIndex,
    oldChannelIndex,
    newChannelIndex
) => {
	if (categoryIndex === newCategoryIndex) {
		const category = data.categories[categoryIndex];
		const channels = [...category.channels];
		channels.splice(newChannelIndex, 0, channels.splice(oldChannelIndex, 1)[0]);
		return updateCategory(data, categoryIndex, {...category, channels});
	} else {
		const oldCategory = data.categories[categoryIndex];
		const channels = [...oldCategory.channels];
		const [channel] = channels.splice(oldChannelIndex, 1);
		data = updateCategory(data, categoryIndex, {...oldCategory, channels});
		const newCategory = data.categories[newCategoryIndex];
		const newChannels = [...newCategory.channels];
		newChannels.splice(newChannelIndex, 0, channel);
		data = updateCategory(data, newCategoryIndex, {
			...newCategory,
			channels: newChannels
		});
		return data;
	}
}
