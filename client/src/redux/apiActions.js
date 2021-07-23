import { UPDATE_DATA } from './actionTypes';
import * as dataUtils from "./dataUtils";
	

export const getData = () => {
	return (dispatch) => {
		fetch("/api/data")
			.then((res) => res.json())
			.then((data) =>
				dispatch({
					type: UPDATE_DATA,
					payload: data
				})
			);
	}
};

export const addCategory = (data, newCategory) =>
	pushData(dataUtils.addCategory(data, newCategory));

export const updateCategory = (data, categoryIdx, updatedCategory) => 
	pushData(dataUtils.updateCategory(data, categoryIdx, updatedCategory));

export const deleteCategory = (data, categoryIdx) =>
	pushData(dataUtils.deleteCategory(data, categoryIdx));

export const moveCategory = (data, oldCategoryIdx, newCategoryIdx) => 
	pushData(dataUtils.moveCategory(data, oldCategoryIdx, newCategoryIdx));

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
				dispatch({
					type: UPDATE_DATA,
					payload: data
				})
			)
	};	
};
