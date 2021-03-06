import { OPEN_MODAL, CLOSE_MODAL } from '../modalActions';

const initialState = {
	type: null,
	category: -1,
	element: -1
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case OPEN_MODAL: {
			return {
				type: action.payload.type,
				category: action.payload.category,
				element: action.payload.element
			};
		}
		case CLOSE_MODAL: {
			return initialState;
		}
		default: {
			return state;
		}
	}
}

export default reducer;
