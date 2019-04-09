/* eslint-disable import/prefer-default-export */
export const wineGroups = [
  {
    colour: 'white',
    common: [
      'chardonnay',
      'riesling',
      'semillion',
    ],
    uncommon: [
      'albarino',
      'white grenache',
    ],
  },
  {
    colour: 'red',
    common: [
      'pinot noir',
      'shiraz',
      'merlot',
    ],
    uncommon: [
      'carmenere',
      'petit verdot',
    ],
  },
];

export const varietalProfiles = [
  {
    varietal: 'chardonnay',
    appearance: {
      clarity: [
        'clear',
        'opaque',
        'cloudy',
      ],
      colour: [
        'pale',
        'golden',
        'straw',
      ],
    },
    character: {
      fruit: [
        'apple',
        'apricot',
        'banana',
        'stone fruit',
      ],
      age: [
        'fig',
        'honey',
        'toast',
      ],
      oak: [
        'almond',
        'butterscotch',
        'vanilla',
      ],
      body: [
        'full',
        'light',
      ],
      acid: [
        'sharp',
        'tart',
        'soft',
      ],
      finish: [
        'smooth',
        'long',
        'persistent',
      ],
    },
  },
];
