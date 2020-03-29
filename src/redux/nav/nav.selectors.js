import { createSelector } from 'reselect';

const selectNav = (state) => state.nav;

export const selectNavClicked = createSelector([ selectNav ], (nav) => nav.navClicked);
