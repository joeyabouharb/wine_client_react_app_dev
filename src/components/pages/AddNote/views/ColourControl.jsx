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
    <>
      <h2>Pick a Grape Colour: </h2>
      <div className="d-flex flex-row justify-content-around">
        {
        colours.map(items => (
          <input
            type="button"
            value={items.colour}
            key={items.colour}
            onClick={() => dispatch(submitColour(items.colour))}
            className="btn btn-transparent"
          />
        ))
        }
      </div>
    </>
  );
};

ColourControl.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default ColourControl;
