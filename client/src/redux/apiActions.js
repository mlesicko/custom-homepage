import { LOADING_DATA, UPDATE_DATA, DATA_LOAD_FAILED } from './actionTypes';
import * as dataUtils from "./dataUtils";

export const getData = () => {
	return (dispatch) => {
		dispatch(loadData())
		fetch("/api/data")
			.then((res) => res.json())
			.then((data) =>
				dispatch(updateData(data))
			).catch((e) => {
				dispatch(dataLoadFailed(e))
			});
	}
};

export const addSiteCategory = (data, newCategory) =>
	pushData(dataUtils.addSiteCategory(data, newCategory));

export const updateSiteCategory = (data, categoryIdx, updatedCategory) => 
	pushData(dataUtils.updateSiteCategory(data, categoryIdx, updatedCategory));

export const deleteSiteCategory = (data, categoryIdx) =>
	pushData(dataUtils.deleteSiteCategory(data, categoryIdx));

export const moveSiteCategory = (data, oldCategoryIdx, newCategoryIdx) => 
	pushData(dataUtils.moveSiteCategory(data, oldCategoryIdx, newCategoryIdx));

export const addSite = (data, categoryIdx, newSite) => 
	pushData(dataUtils.addSite(data, categoryIdx, newSite));

export const deleteSite = (data, categoryIdx, siteIdx) =>
	pushData(dataUtils.deleteSite(data, categoryIdx, siteIdx));

export const updateSite = (
	data,
	categoryIdx,
	newCategoryIdx,
	oldSiteIdx,
	newSiteIdx,
	site,
) => pushData(
	dataUtils.moveSite(
		dataUtils.updateSite(data, categoryIdx, oldSiteIdx, site),
		categoryIdx,
		newCategoryIdx,
		oldSiteIdx,
		newSiteIdx
	)
);

export const addTaskCategory = (data, newCategory) =>
	pushData(dataUtils.addTaskCategory(data, newCategory));

export const updateTaskCategory = (data, categoryIdx, updatedCategory) => 
	pushData(dataUtils.updateTaskCategory(data, categoryIdx, updatedCategory));

export const deleteTaskCategory = (data, categoryIdx) =>
	pushData(dataUtils.deleteTaskCategory(data, categoryIdx));

export const moveTaskCategory = (data, oldCategoryIdx, newCategoryIdx) => 
	pushData(dataUtils.moveTaskCategory(data, oldCategoryIdx, newCategoryIdx));

export const addTask = (data, categoryIdx, newTask) => 
	pushData(dataUtils.addTask(data, categoryIdx, newTask));

export const deleteTask = (data, categoryIdx, taskIdx) =>
	pushData(dataUtils.deleteTask(data, categoryIdx, taskIdx));

export const updateTask = (
	data,
	categoryIdx,
	newCategoryIdx,
	oldTaskIdx,
	newTaskIdx,
	task,
) => pushData(
	dataUtils.moveTask(
		dataUtils.updateTask(data, categoryIdx, oldTaskIdx, task),
		categoryIdx,
		newCategoryIdx,
		oldTaskIdx,
		newTaskIdx
	)
);

export const updateTitle = (
	data,
	newTitle
) => pushData({
	...data,
	title: newTitle
});

const pushData = (data) => {
	return (dispatch) => {
		fetch("/api/updateData", {
			method: "POST",
			headers: {
   			   'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((res) => res.json())
			.then((data) =>
				dispatch(updateData(data))
			).catch((e) => {
				dispatch(dataLoadFailed(e))
			});
	};	
};

const loadData = () => ({
	type: LOADING_DATA
});

const updateData = (data) => ({
	type: UPDATE_DATA,
	payload: data
});

const dataLoadFailed = (error) => ({
	type: DATA_LOAD_FAILED,
	payload: error
});
