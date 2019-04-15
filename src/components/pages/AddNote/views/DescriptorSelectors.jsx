import React from 'react';
import PropTypes from 'prop-types';
import { varietalProfiles } from '../../../../profiles';

const DescriptorSelectors = (
  {
    varietal,
  },
) => {
  const profiles = varietalProfiles;
  return (
    <div>
      {
    profiles.map((profile) => {
      if (varietal === profile.varietal) {
        return (
          <div key={profile.varietal}>
            <div>Appearance</div>
            {
            Object.entries(profile.appearance).map(
              ([key, value]) => (
                <div key={key}>
                  <span>{key}</span>
                  <select>
                    {
                  value.map(
                    v => (
                      <option key={v} value={v}>{v}</option>
                    ),
                  )
                  }
                  </select>
                </div>
              ),
            )
          }
            <div>Character</div>
            {
            Object.entries(profile.character).map(
              ([key, value]) => (
                <div key={key}>
                  <span>{key}</span>
                  <select>
                    {
                  value.map(
                    v => (
                      <option key={v} value={v}>{v}</option>
                    ),
                  )
                  }
                  </select>
                </div>
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

DescriptorSelectors.propTypes = {
  varietal: PropTypes.string.isRequired,
};

export default DescriptorSelectors;
