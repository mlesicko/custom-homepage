import AddSiteModal from "./sites/AddSiteModal";
import EditSiteModal from "./sites/EditSiteModal";
import DeleteSiteModal from "./sites/DeleteSiteModal";
import AddSiteCategoryModal from "./sites/AddCategoryModal";
import EditSiteCategoryModal from "./sites/EditCategoryModal";
import DeleteSiteCategoryModal from "./sites/DeleteCategoryModal";

import AddTaskModal from "./tasks/AddTaskModal";
import TaskModal from "./tasks/TaskModal";
import AddTaskCategoryModal from "./tasks/AddCategoryModal";
import EditTaskCategoryModal from "./tasks/EditCategoryModal";
import DeleteTaskCategoryModal from "./tasks/DeleteCategoryModal";

import EditTitleModal from "./EditTitleModal";

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

export const modalFromType = (type) => ({
	ADD_SITE: AddSiteModal,
	EDIT_SITE: EditSiteModal,
	DELETE_SITE: DeleteSiteModal,
	ADD_SITE_CATEGORY: AddSiteCategoryModal,
	EDIT_SITE_CATEGORY: EditSiteCategoryModal,
	DELETE_SITE_CATEGORY: DeleteSiteCategoryModal,
	ADD_TASK: AddTaskModal,
	TASK: TaskModal,
	ADD_TASK_CATEGORY: AddTaskCategoryModal,
	EDIT_TASK_CATEGORY: EditTaskCategoryModal,
	DELETE_TASK_CATEGORY: DeleteTaskCategoryModal,
	EDIT_TITLE: EditTitleModal,
}[type]);

