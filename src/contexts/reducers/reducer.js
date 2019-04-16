import * as types from '../types';

const Reducer = (state, action) => {
  switch (action.type) {
    case types.PICKED_WINE_COLOR:
      return Object.assign(
        {}, state, {
          page: 2,
          colour: action.payload,
          varietal: state.varietal,
          descriptors: state.descriptors,
        },
      );
    case types.PICKED_VARIETAL:
      return Object.assign(
        {}, state, {
          page: 3,
          colour: state.colour,
          varietal: action.payload,
          descriptors: state.descriptors,
        },
      );
    case types.PREVIOUS_VIEW:
      return Object.assign(
        {}, state, {
          page: state.page - 1,
        },
      );
    case types.INITIALISE_FORM:
      return Object.assign(
        {}, state, {
          page: 1,
        },
      );
    case types.SUBMIT_DATA:

      return Object.assign(
        {}, state, {
          descriptors: action.payload,
        },
      );
    default:
      return state;
  }
};

export default Reducer;
