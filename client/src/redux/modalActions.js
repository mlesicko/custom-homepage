import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';
import {
	ADD_CHANNEL,
	EDIT_CHANNEL,
	DELETE_CHANNEL,
	ADD_CATEGORY,
	EDIT_CATEGORY,
	DELETE_CATEGORY
} from '../modal/modalTypes';

export const openAddChannelModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: ADD_CHANNEL,
		category: category,
		channel: -1,
	}
})

export const openEditChannelModal = (category, channel) => ({
	type: OPEN_MODAL,
	payload: {
		type: EDIT_CHANNEL,
		category: category,
		channel: channel,
	}
})

export const openDeleteChannelModal = (category, channel) => ({
	type: OPEN_MODAL,
	payload: {
		type: DELETE_CHANNEL,
		category: category,
		channel: channel,
	}
})

export const openAddCategoryModal = () => ({
	type: OPEN_MODAL,
	payload: {
		type: ADD_CATEGORY,
		category: -1,
		channel: -1,
	}
})

export const openEditCategoryModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: EDIT_CATEGORY,
		category: category,
		channel: -1,
	}
})

export const openDeleteCategoryModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: DELETE_CATEGORY,
		category: category,
		channel: -1,
	}
})

export const closeModal = () => ({
	type: CLOSE_MODAL
})
