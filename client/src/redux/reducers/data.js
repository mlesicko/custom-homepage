import { UPDATE_DATA } from '../actionTypes';

const initialState = {
	categories: [],
	title: null
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case UPDATE_DATA: {
			return {
				...state,
				categories: action.payload.categories,
				title: action.payload.title
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;
