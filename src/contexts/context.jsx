import React, {
  createContext,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import Reducer from './reducers/reducer';
import ColourControl from '../components/ColourControl';

const viewContext = createContext();

const initialState = {
  formView: <ColourControl />,
  data: {},
};

export const viewProvider = ({ children }) => {
  const viewValue = useReducer(Reducer, initialState);
  return (
    <viewContext.Provider value={viewValue}>
      {children}
    </viewContext.Provider>
  );
};
viewProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default viewContext;
