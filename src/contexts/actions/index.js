import * as types from '../types';

export const submitColour = payload => (
  { type: types.PICKED_WINE_COLOR, payload }
);

export const submitVarietal = payload => (
  { type: types.PICKED_VARIETAL, payload }
);

export const previousLayout = payload => (
  { type: types.PREVIOUS_VIEW, payload }
);

export const submitAllData = payload => (
  { type: types.SUBMIT_DATA, payload }
);
