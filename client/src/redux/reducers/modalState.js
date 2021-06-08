import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes';

const initialState = {
	type: null,
	category: -1,
	channel: -1
}

const reducer = (state=initialState, action) => {
	switch(action.type) {
		case OPEN_MODAL: {
			return {
				type: action.payload.type,
				category: action.payload.category,
				channel: action.payload.channel
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
