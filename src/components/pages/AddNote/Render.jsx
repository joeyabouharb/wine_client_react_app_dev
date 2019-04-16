import React, { useContext, useEffect } from 'react';
import { initForm } from '../../../contexts/actions';
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
          <VarietalControl
            dispatch={dispatch}
            colour={formData.colour}
          />
        );
      case 3:
        return (
          <DescriptorSelectors
            dispatch={dispatch}
            varietal={formData.varietal}
          />
        );
      default:
        return (
          <ColourControl dispatch={dispatch} />
        );
    }
  };

  return (
    <>
      <div>
        <FormSwitch />
      </div>
    </>
  );
};

export default Render;
