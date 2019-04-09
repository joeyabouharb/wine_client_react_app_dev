/* eslint-disable import/prefer-default-export */
export const wineGroups = [
  {
    colour: 'white',
    common: {
      chardonnay: 'chardonnay',
      riesling: 'riesling',
      semillion: 'semillion',
    },
    uncommon: {
      albarino: 'albarino',
      whiteGranach: 'white grenache',
    },
  },
  {
    colour: 'red',
    common: {
      pinotNoir: 'pinot noir',
      shiraz: 'shiraz',
      merlot: 'merlot',
    },
    uncommon: {
      carmenere: 'carmenere',
      petitVerdot: 'petit verdot',
    },
  },
];

export const varietalProfiles = [
  {
    varietal: 'chardonnay',
    appearance: {
      clarity: {
        clear: 'clear',
        opaque: 'opaque',
        cloudy: 'cloudy',
      },
      colour: {
        pale: 'pale',
        golden: 'golden',
        straw: 'straw',
      },
    },
    character: {
      fruit: {
        apple: 'apple',
        apricot: 'apricot',
        banana: 'banana',
        stoneFruit: 'stone fruit',
      },
      age: {
        fig: 'fig',
        honey: 'honey',
        toast: 'toast',
      },
      oak: {
        almond: 'almond',
        buttterscotch: 'butterscotch',
        vanilla: 'vanilla',
      },
      body: {
        full: 'full',
        light: 'light',
      },
      acid: {
        sharp: 'sharp',
        tart: 'tart',
        soft: 'soft',
      },
      finish: {
        smooth: 'smooth',
        long: 'long',
        persistent: 'persistent',
      },
    },
  },
];
