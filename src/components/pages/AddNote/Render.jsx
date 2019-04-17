import React, { useContext, useEffect } from 'react';
import { initForm, previousLayout } from '../../../contexts/actions';
import formContext from '../../../contexts/formContext';
import ColourControl from './views/ColourControl';
import DescriptorSelectors from './views/DescriptorSelectors';
import VarietalControl from './views/VarietalControl';

const useFormContext = () => {
  const context = useContext(formContext);
  return context;
};

const Render = () => {
  const [formData, dispatch] = useFormContext();

  useEffect(() => {
    dispatch(initForm());
  }, []);

  const FormSwitch = () => {
    switch (formData.page) {
      case 1:
        return (
          <ColourControl dispatch={dispatch} />
        );
      case 2:
        return (
          <>
            <VarietalControl
              dispatch={dispatch}
              colour={formData.colour}
            />
            <input
              type="button"
              onClick={() => dispatch(previousLayout())}
              value="previous"
              className="btn btn-danger m-2"
            />
          </>
        );
      case 3:
        return (
          <>
            <DescriptorSelectors
              dispatch={dispatch}
              varietal={formData.varietal}
            />
            <input
              type="button"
              onClick={() => dispatch(previousLayout())}
              value="previous"
              className="btn btn-danger m-2"
            />
          </>
        );
      default:
        return (
          <ColourControl dispatch={dispatch} />
        );
    }
  };

  return (
    <div className="container">
      <FormSwitch />
    </div>
  );
};

export default Render;
