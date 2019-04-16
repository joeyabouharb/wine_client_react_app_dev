import React from 'react';
import PropTypes from 'prop-types';
import { wineGroups } from '../../../../profiles';
import { submitColour } from '../../../../contexts/actions';

const ColourControl = (
  {
    dispatch,
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
            dispatch(submitColour(items.colour));
          }}
        />
      ))
    }
    </div>
  );
};

ColourControl.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default ColourControl;
