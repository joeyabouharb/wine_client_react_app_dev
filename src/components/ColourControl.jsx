import React from 'react';
import { wineGroups } from '../profiles';

const ColourControl = (
  {
    setColour,
    setVarietal,
  },
) => {
  const colours = wineGroups;

  return (
    colours.map(items => (
      <input
        type="button"
        key={items.colour}
        value={items.colour}
        onClick={() => {
          setColour(items.colour);
          setVarietal('');
        }}
      />
    ))
  );
};
export default ColourControl;
