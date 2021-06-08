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

export const addChannel = (data, categoryIdx, newChannel) => 
	pushData(dataUtils.addChannel(data, categoryIdx, newChannel));

export const deleteChannel = (data, categoryIdx, channelIdx) =>
	pushData(dataUtils.deleteChannel(data, categoryIdx, channelIdx));

export const updateChannel = (
	data,
	categoryIdx,
	oldChannelIdx,
	newChannelIdx,
	channel,
) => pushData(
	dataUtils.moveChannel(
		dataUtils.updateChannel(data, categoryIdx, oldChannelIdx, channel),
		categoryIdx,
		oldChannelIdx,
		newChannelIdx
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
