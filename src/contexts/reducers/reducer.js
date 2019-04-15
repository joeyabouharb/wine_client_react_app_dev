import * as types from '../types';

const Reducer = (state, action) => {
  switch (action.type) {
    case types.PICKED_WINE_COLOR:
      return Object.assign(
        {}, state, {
          page: action.payload.layout,
          data: {
            colour: action.payload.colour,
          },
        },
      );
    case types.PICKED_VARIETAL:
      return Object.assign(
        {}, state, {
          page: action.payload.layout,
          data: {
            colour: state.data.colour,
            varietal: action.payload,
          },
        },
      );
    case types.PREVIOUS_VIEW:
      return Object.assign(
        {}, state, {
          page: action.payload.layout,
        },
      );
    default:
      return state;
  }
};

export default Reducer;
