import * as types from "./dataActionTypes";

export const addSiteCategory = (newCategory) => ({
	type: types.ADD_SITE_CATEGORY,
	payload: {
		newCategory
	}
});

export const updateSiteCategory = (categoryIdx, updatedCategory) => ({
	type: types.UPDATE_SITE_CATEGORY,
	payload: { categoryIdx, updatedCategory }
});

export const deleteSiteCategory = (categoryIdx) => ({
	type: types.DELETE_SITE_CATEGORY,
	payload: { categoryIdx }
});

export const moveSiteCategory = (oldCategoryIdx, newCategoryIdx) => ({
	type: types.MOVE_SITE_CATEGORY,
	payload: { oldCategoryIdx, newCategoryIdx }
});

export const addSite = (categoryIdx, newSite) => ({
	type: types.ADD_SITE,
	payload: { categoryIdx, newSite }
});

export const deleteSite = (categoryIdx, siteIdx) => ({
	type: types.DELETE_SITE,
	payload: { categoryIdx, siteIdx }
});

export const updateSite = (
	oldCategoryIdx,
	newCategoryIdx,
	oldSiteIdx,
	newSiteIdx,
	site,
) => ({
	type: types.UPDATE_SITE,
	payload: { oldCategoryIdx, newCategoryIdx, oldSiteIdx, newSiteIdx, site }
});

export const addTaskCategory = (newCategory) => ({
	type: types.ADD_TASK_CATEGORY,
	payload: { newCategory }
});

export const updateTaskCategory = (categoryIdx, updatedCategory) => ({
	type: types.UPDATE_TASK_CATEGORY,
	payload: { categoryIdx, updatedCategory }
});

export const deleteTaskCategory = (categoryIdx) => ({
	type: types.DELETE_TASK_CATEGORY,
	payload: { categoryIdx }
});

export const moveTaskCategory = (oldCategoryIdx, newCategoryIdx) => ({
	type: types.MOVE_TASK_CATEGORY,
	payload: { oldCategoryIdx, newCategoryIdx }
});

export const addTask = (categoryIdx, newTask) => ({
	type: types.ADD_TASK,
	payload: { categoryIdx, newTask }
});

export const deleteTask = (categoryIdx, taskIdx) => ({
	type: types.DELETE_TASK,
	payload: { categoryIdx, taskIdx }
});

export const updateTask = (
	oldCategoryIdx,
	newCategoryIdx,
	oldTaskIdx,
	newTaskIdx,
	task,
) => ({
	type: types.UPDATE_TASK,
	payload: { oldCategoryIdx, newCategoryIdx, oldTaskIdx, newTaskIdx, task }
});

export const updateTitle = (
	title
) => ({
	type: types.UPDATE_TITLE,
	payload: { title }
});

export const loadingData = () => ({
	type: types.LOADING_DATA
});

export const dataLoaded = (data) => ({
	type: types.DATA_LOADED,
	payload: data
});

export const dataLoadFailed = (error) => ({
	type: types.DATA_LOAD_FAILED,
	payload: error
});
