import { NAV_TYPES } from './nav.types';

const INITIAL_STATE = {
	navClicked: false
};

export const navReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NAV_TYPES.CHANGE_NAV:
			return {
				...state,
				navClicked: !state.navClicked
			};
		default:
			return state;
	}
};
