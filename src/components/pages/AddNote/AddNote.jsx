import React, { useState, useEffect } from 'react';
import ColourControl from './views/ColourControl';
import DescriptorSelectors from './views/DescriptorSelectors';
import VarietalControl from './views/VarietalControl';

const FormView = () => {
  const [dom, setDom] = useState('');
  const [colour, setColour] = useState('');
  const [varietal, setVarietal] = useState('');
  const [descriptors, setDescriptors] = useState(['']);

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
          setDescriptors={setDescriptors}
          descriptors={descriptors}
        />,
      );
    }
  }, [colour, varietal]);

  return (
    dom
  );
};

export default FormView;
