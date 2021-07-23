import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';
import {
	ADD_SITE,
	EDIT_SITE,
	DELETE_SITE,
	ADD_CATEGORY,
	EDIT_CATEGORY,
	DELETE_CATEGORY
} from '../modal/modalTypes';

export const openAddSiteModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: ADD_SITE,
		category: category,
		site: -1,
	}
})

export const openEditSiteModal = (category, site) => ({
	type: OPEN_MODAL,
	payload: {
		type: EDIT_SITE,
		category: category,
		site: site,
	}
})

export const openDeleteSiteModal = (category, site) => ({
	type: OPEN_MODAL,
	payload: {
		type: DELETE_SITE,
		category: category,
		site: site,
	}
})

export const openAddCategoryModal = () => ({
	type: OPEN_MODAL,
	payload: {
		type: ADD_CATEGORY,
		category: -1,
		site: -1,
	}
})

export const openEditCategoryModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: EDIT_CATEGORY,
		category: category,
		site: -1,
	}
})

export const openDeleteCategoryModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: DELETE_CATEGORY,
		category: category,
		site: -1,
	}
})

export const closeModal = () => ({
	type: CLOSE_MODAL
})
