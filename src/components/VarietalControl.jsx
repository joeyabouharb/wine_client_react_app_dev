import React from 'react';
import { wineGroups } from '../profiles';

const VarietalControl = (
  {
    colour,
    setVarietal,
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
                    onClick={() => setVarietal(value)}
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
                    onClick={() => setVarietal(value)}
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

export default VarietalControl;
