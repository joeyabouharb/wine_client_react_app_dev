import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { varietalProfiles } from '../../../../profiles';
import { submitAllData } from '../../../../contexts/actions';

const DescriptorSelectors = (
  {
    varietal,
    dispatch,
  },
) => {
  const profiles = varietalProfiles;
  const [descriptors, setDescriptors] = useState('');

  useEffect(() => {
    setDescriptors({
      clarity: '',
      colour: '',
      fruit: '',
      age: '',
      oak: '',
      body: '',
      acid: '',
      finish: '',
    });
  }, []);

  const onChangeDescriptor = (event, key) => {
    const data = Object.assign({}, descriptors, {
      [key]: event.target.value,
    });
    setDescriptors(data);
  };

  return (
    <form>
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
                  <select onChange={e => onChangeDescriptor(e, key)}>
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
                  <select onChange={e => onChangeDescriptor(e, key)}>
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
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          // dispatch(submitAllData());
          console.log(descriptors);
        }}
      >
      Submit
      </button>
    </form>
  );
};

DescriptorSelectors.propTypes = {
  varietal: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default DescriptorSelectors;
