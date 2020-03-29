import { createSelector } from 'reselect';

const selectProjects = (state) => state.projects;

export const selectLists = createSelector([ selectProjects ], (projects) => projects.lists);
