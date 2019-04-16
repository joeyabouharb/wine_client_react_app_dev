import React, {
  createContext,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import Reducer from './reducers/reducer';

const formContext = createContext();

const initialState = {
  page: '',
  colour: '',
  varietal: '',
  descriptors: {},
};

export const ViewProvider = ({ children }) => {
  const viewValue = useReducer(Reducer, initialState);
  return (
    <formContext.Provider value={viewValue}>
      {children}
    </formContext.Provider>
  );
};
ViewProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default formContext;
