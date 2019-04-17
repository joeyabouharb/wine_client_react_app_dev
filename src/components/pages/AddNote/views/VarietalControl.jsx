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
      <h1 className="text-center"> Varietals </h1>
      {
    colours.map((profile) => {
      if (profile.colour === colour) {
        return (
          <div className="row justify-content-around" key={profile.colour}>

            <div className="col-md-auto">
              <h3 className="row justify-content-center">Common</h3>
              {
                profile.common.map(
                  value => (
                    <div className="row justify-content-center" key={value}>
                      <input
                        type="button"
                        value={value}
                        onClick={() => dispatch(submitVarietal(value))}
                        className="btn btn-default"
                      />
                    </div>
                  ),
                )
                }
            </div>
            <div className="col-md-auto">
              <h3 className="row justify-content-center">Uncommon</h3>
              {
                profile.uncommon.map(
                  value => (
                    <div className="row justify-content-center" key={value}>
                      <input
                        type="button"
                        value={value}
                        key={value}
                        onClick={() => dispatch(submitVarietal(value))}
                        className="btn btn-default"
                      />
                    </div>
                  ),
                )
              }
            </div>
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
