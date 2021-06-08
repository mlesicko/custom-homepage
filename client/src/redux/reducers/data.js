import { UPDATE_DATA } from '../actionTypes';

const initialState = {
	categories: []
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case UPDATE_DATA: {
			return {
				...state,
				categories: action.payload.categories
			};
		}
		default: {
			return state;
		}
	}
}

export default reducer;
