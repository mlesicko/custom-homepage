import * as types from '../dataActionTypes';
import * as dataUtils from "./dataUtils";

const initialState = {
	content: null,
	loading: false,
	error: null
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case types.LOADING_DATA: {
			return {
				...initialState,
				loading: true
			};
		}
		case types.DATA_LOADED: {
			return {
				...state,
				content: action.payload,
				loading: false
			};
		}
		case types.DATA_LOAD_FAILED: {
			return {
				...initialState,
				loading: false,
				error: action.payload
			};
		}
		case types.ADD_SITE_CATEGORY: {
			return {
				...state,		
				content: dataUtils.addSiteCategory(
					state.content,
					action.payload.newCategory
				)
			};
		}
		case types.UPDATE_SITE_CATEGORY: {
			return {
				...state,		
				content: dataUtils.updateSiteCategory(
					state.content,
					action.payload.categoryIdx,
					action.payload.updatedCategory
				)
			};
		}
		case types.DELETE_SITE_CATEGORY: {
			return {
				...state,		
				content: dataUtils.deleteSiteCategory(
					state.content,
					action.payload.categoryIdx
				)
			};
		}
		case types.MOVE_SITE_CATEGORY: {
			return {
				...state,		
				content: dataUtils.moveSiteCategory(
					state.content,
					action.payload.oldCategoryIdx,
					action.payload.newCategoryIdx
				)
			};
		}
		case types.ADD_SITE: {
			return {
				...state,		
				content: dataUtils.addSite(
					state.content,
					action.payload.categoryIdx,
					action.payload.newSite
				)
			};
		}
		case types.DELETE_SITE: {
			return {
				...state,		
				content: dataUtils.deleteSite(
					state.content,
					action.payload.categoryIdx,
					action.payload.siteIdx
				)
			};
		}
		case types.UPDATE_SITE: {
			return {
				...state,		
				content: dataUtils.moveSite(
					dataUtils.updateSite(
						state.content,
						action.payload.oldCategoryIdx,
						action.payload.oldSiteIdx,
						action.payload.site,
					),
					action.payload.oldCategoryIdx,
					action.payload.newCategoryIdx,
					action.payload.oldSiteIdx,
					action.payload.newSiteIdx
				)
			};
		}
		case types.ADD_TASK_CATEGORY: {
			return {
				...state,		
				content: dataUtils.addTaskCategory(
					state.content,
					action.payload.newCategory
				)
			};
		}
		case types.UPDATE_TASK_CATEGORY: {
			return {
				...state,		
				content: dataUtils.updateTaskCategory(
					state.content,
					action.payload.categoryIdx,
					action.payload.updatedCategory
				)
			};
		}
		case types.DELETE_TASK_CATEGORY: {
			return {
				...state,		
				content: dataUtils.deleteTaskCategory(
					state.content,
					action.payload.categoryIdx
				)
			};
		}
		case types.MOVE_TASK_CATEGORY: {
			return {
				...state,		
				content: dataUtils.moveTaskCategory(
					state.content,
					action.payload.oldCategoryIdx,
					action.payload.newCategoryIdx
				)
			};
		}
		case types.ADD_TASK: {
			return {
				...state,		
				content: dataUtils.addTask(
					state.content,
					action.payload.categoryIdx,
					action.payload.newTask
				)
			};
		}
		case types.DELETE_TASK: {
			return {
				...state,		
				content: dataUtils.deleteTask(
					state.content,
					action.payload.categoryIdx,
					action.payload.taskIdx
				)
			};
		}
		case types.UPDATE_TASK: {
			return {
				...state,		
				content: dataUtils.moveTask(
					dataUtils.updateTask(
						state.content,
						action.payload.oldCategoryIdx,
						action.payload.oldTaskIdx,
						action.payload.task,
					),
					action.payload.oldCategoryIdx,
					action.payload.newCategoryIdx,
					action.payload.oldTaskIdx,
					action.payload.newTaskIdx
				)
			};
		}
		case types.UPDATE_TITLE: {
			return {
				...state,
				content: {
					...state.content,
					title: action.payload.title
				}
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;
