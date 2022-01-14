import { LOADING_DATA, UPDATE_DATA, DATA_LOAD_FAILED } from '../actionTypes';

const initialState = {
	content: null,
	loading: false,
	error: null
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case LOADING_DATA: {
			return {
				...initialState,
				loading: true
			}
		}
		case UPDATE_DATA: {
			return {
				...state,
				content: action.payload,
				loading: false
			};
		}
		case DATA_LOAD_FAILED: {
			return {
				...initialState,
				loading: false,
				error: action.payload
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;
