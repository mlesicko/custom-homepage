export const ADD_SITE = "ADD_SITE";
export const EDIT_SITE = "EDIT_SITE";
export const DELETE_SITE = "DELETE_SITE";
export const ADD_SITE_CATEGORY = "ADD_SITE_CATEGORY";
export const EDIT_SITE_CATEGORY = "EDIT_SITE_CATEGORY";
export const DELETE_SITE_CATEGORY = "DELETE_SITE_CATEGORY";

export const ADD_TASK = "ADD_TASK";
export const TASK = "TASK";
export const ADD_TASK_CATEGORY = "ADD_TASK_CATEGORY";
export const EDIT_TASK_CATEGORY = "EDIT_TASK_CATEGORY";
export const DELETE_TASK_CATEGORY = "DELETE_TASK_CATEGORY";

export const EDIT_TITLE = "EDIT_TITLE";

export const SITE_TYPES = [
	ADD_SITE,
	EDIT_SITE,
	DELETE_SITE,
	ADD_SITE_CATEGORY,
	EDIT_SITE_CATEGORY,
	DELETE_SITE_CATEGORY
];


export const TASK_TYPES = [
	ADD_TASK,
	TASK,
	ADD_TASK_CATEGORY,
	EDIT_TASK_CATEGORY,
	DELETE_TASK_CATEGORY
];

export const isSitesModalType = (type) => SITE_TYPES.includes(type);

export const isTaskModalType = (type) => TASK_TYPES.includes(type);
