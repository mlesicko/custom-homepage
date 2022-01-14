import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';
import {
	ADD_SITE,
	EDIT_SITE,
	DELETE_SITE,
	ADD_SITE_CATEGORY,
	EDIT_SITE_CATEGORY,
	DELETE_SITE_CATEGORY,
	ADD_TASK,
	TASK,
	ADD_TASK_CATEGORY,
	EDIT_TASK_CATEGORY,
	DELETE_TASK_CATEGORY,
	EDIT_TITLE
} from '../modal/modalTypes';

export const openAddSiteModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: ADD_SITE,
		category: category,
		element: -1,
	}
})

export const openEditSiteModal = (category, site) => ({
	type: OPEN_MODAL,
	payload: {
		type: EDIT_SITE,
		category: category,
		element: site,
	}
})

export const openDeleteSiteModal = (category, site) => ({
	type: OPEN_MODAL,
	payload: {
		type: DELETE_SITE,
		category: category,
		element: site,
	}
})

export const openAddSiteCategoryModal = () => ({
	type: OPEN_MODAL,
	payload: {
		type: ADD_SITE_CATEGORY,
		category: -1,
		element: -1,
	}
})

export const openEditSiteCategoryModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: EDIT_SITE_CATEGORY,
		category: category,
		element: -1,
	}
})

export const openDeleteSiteCategoryModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: DELETE_SITE_CATEGORY,
		category: category,
		element: -1,
	}
})

export const openAddTaskModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: ADD_TASK,
		category: category,
		element: -1,
	}
})

export const openTaskModal = (category, task) => ({
	type: OPEN_MODAL,
	payload: {
		type: TASK,
		category: category,
		element: task,
	}
})

export const openAddTaskCategoryModal = () => ({
	type: OPEN_MODAL,
	payload: {
		type: ADD_TASK_CATEGORY,
		category: -1,
		element: -1,
	}
})

export const openEditTaskCategoryModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: EDIT_TASK_CATEGORY,
		category: category,
		element: -1,
	}
})

export const openDeleteTaskCategoryModal = (category) => ({
	type: OPEN_MODAL,
	payload: {
		type: DELETE_TASK_CATEGORY,
		category: category,
		element: -1,
	}
})

export const openEditTitleModal = () => ({
	type: OPEN_MODAL,
	payload: {
		type: EDIT_TITLE,
	}
})

export const closeModal = () => ({
	type: CLOSE_MODAL
})
