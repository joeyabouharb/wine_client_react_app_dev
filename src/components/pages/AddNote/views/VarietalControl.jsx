import React from 'react';
import PropTypes from 'prop-types';
import { wineGroups } from '../../../../profiles';
import { submitVarietal } from '../../../../contexts/actions';

const VarietalControl = (
  {
    dispatch,
    colour,
  },
) => {
  const colours = wineGroups;

  return (
    <div>
      {
    colours.map((profile) => {
      if (profile.colour === colour) {
        return (
          <div key={profile.colour}>
            <div>Common values</div>
            {
              profile.common.map(
                value => (
                  <input
                    type="button"
                    value={value}
                    key={value}
                    onClick={() => dispatch(submitVarietal(value))}
                  />
                ),
              )
            }
            <div>Uncommon </div>
            {
              profile.uncommon.map(
                value => (
                  <input
                    type="button"
                    value={value}
                    key={value}
                    onClick={() => dispatch(submitVarietal(value))}
                  />
                ),
              )
            }
          </div>
        );
      }
      return null;
    })
    }
    </div>
  );
};

VarietalControl.propTypes = {
  colour: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default VarietalControl;
