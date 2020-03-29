import { combineReducers } from 'redux';

import { navReducer } from './nav/nav.reducer';
import { projectsReducer } from './projects/projects.reducer';

export default combineReducers({
	nav: navReducer,
	projects: projectsReducer
});
