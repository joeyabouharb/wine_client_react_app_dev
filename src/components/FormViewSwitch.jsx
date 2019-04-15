import React, { useState, useEffect } from 'react';
import ColourControl from './ColourControl';
import DescriptorSelectors from './DescriptorSelectors';
import VarietalControl from './VarietalControl';

const FormViewSwitch = ({
  colour,
  varietal,
  setColour,
  setVarietal,
}) => {
  const [dom, setDom] = useState('');

  useEffect(() => {
    if (colour === '') {
      setDom(
        <ColourControl
          setColour={setColour}
          setVarietal={setVarietal}
        />,
      );
    } else if (varietal === '') {
      setDom(
        <VarietalControl
          setVarietal={setVarietal}
          colour={colour}
        />,
      );
    } else if (varietal !== '' && colour !== '') {
      setDom(
        <DescriptorSelectors
          varietal={varietal}
        />,
      );
    }
  }, [colour, varietal]);

  return (
    dom
  );
};

export default FormViewSwitch;
