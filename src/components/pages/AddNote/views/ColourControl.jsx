import React from 'react';
import PropTypes from 'prop-types';
import { wineGroups } from '../../../../profiles';

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

ColourControl.propTypes = {
  setColour: PropTypes.func.isRequired,
  setVarietal: PropTypes.func.isRequired,
};

export default ColourControl;
