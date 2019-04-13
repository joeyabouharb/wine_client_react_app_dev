import React, { useState } from 'react';
import ColourControl from './ColourControl';
import DescriptorSelectors from './DescriptorSelectors';
import VarietalControl from './VarietalControl';

const FormViewSwitch = ({
  colour,
  varietal,
  setColour,
  setVarietal,
}) => {
  let render;
  const colourVisible = (c) => {
    if (c === '') return true;
    return false;
  };

  const varietalVisible = (c, v) => {
    if (c !== ''
        && v === '') return true;
    return false;
  };

  const descriptorVisible = (c, v) => {
    if (c !== ''
        && v !== '') return true;
    return false;
  };
  if (colourVisible(colour)) {
    render = (
      <ColourControl
        setColour={setColour}
        setVarietal={setVarietal}
      />
    );
  }
  if (varietalVisible(colour, varietal)) {
    render = (
      <VarietalControl
        setVarietal={setVarietal}
        colour={colour}
      />
    );
  }
  if (descriptorVisible(colour, varietal)) {
    render = (
      <DescriptorSelectors
        varietal={varietal}
      />
    );
  }
  return (
    <div>
      {
        render
      }
    </div>
  );
};

export default FormViewSwitch;
