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
    <div>
      {
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
    }
    </div>
  );
};
export default ColourControl;
