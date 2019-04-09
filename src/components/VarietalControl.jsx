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
    colours.map((profile) => {
      if (profile.colour === colour) {
        return (
          <div key={profile.colour}>
            <div>Common values</div>
            {
              Object.entries(profile.common).map(
                ([key, value]) => (
                  <input
                    type="button"
                    value={value}
                    key={key}
                    onClick={() => setVarietal(value)}
                  />
                ),
              )
            }
            <div>Uncommon </div>
            {
              Object.entries(profile.uncommon).map(
                ([key, value]) => (
                  <input
                    type="button"
                    value={value}
                    key={key}
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
  );
};

export default VarietalControl;
