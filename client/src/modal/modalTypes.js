export const ADD_SITE = "ADD_SITE";
export const EDIT_SITE = "EDIT_SITE";
export const DELETE_SITE = "DELETE_SITE";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const EDIT_CATEGORY = "EDIT_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const EDIT_TITLE = "EDIT_TITLE";

export const CATEGORY_TYPES = [
	ADD_SITE,
	EDIT_SITE,
	DELETE_SITE,
	ADD_CATEGORY,
	EDIT_CATEGORY,
	DELETE_CATEGORY
];

export const isCategoryModalType = (type) => CATEGORY_TYPES.includes(type);
