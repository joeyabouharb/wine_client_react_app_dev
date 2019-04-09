import React from 'react';
import { varietalProfiles } from '../profiles';

const DescriptorSelectors = (
  {
    varietal,
  },
) => {
  const profiles = varietalProfiles;
  return (
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
                  Object.entries(value).map(
                    ([k, v]) => (
                      <option key={k} value={v}>{v}</option>
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
                  Object.entries(value).map(
                    ([k, v]) => (
                      <option key={k} value={v}>{v}</option>
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
  );
};

export default DescriptorSelectors;
