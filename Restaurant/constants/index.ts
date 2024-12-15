export const AUTH_TOKEN = 'authToken';
export const questions = [
  [
    {name: 'adaStandards', label: 'Does your building meet ADA standards?'},
    {
      name: 'flatEntrance',
      label:
        'Does the entrance of your building use stairs, ramp, or is it flat?',
    },
    {
      name: 'wheelchairSeating',
      label: 'Is there wheelchair accessible seating?',
    },
    {name: 'brailleMenu', label: 'Does your menu include braille?'},
  ],
  [
    {
      name: 'walkProperty',
      label: 'Can people walk, or roll on to your property?',
    },
    {
      name: 'sideWalkSpace',
      label: 'Does the sidewalk allow room for wheelchairs or walkers?',
    },
    {
      name: 'facilityRamp',
      label: 'Can people roll into your facility, or bring their ramps?',
    },
    {
      name: 'entranceLocation',
      label: 'Where is the entrance for people in wheelchairs?',
      inputType: 'text',
    },
  ],
];


export const testImageHotel = 'https://amusementlogic.es/wp-content/uploads/2023/09/NEWSLETTER-2023-08-DISENO-ARQUITECTONICO-DE-VILLAS-DE-LUJO-JOSE-MARIA-REYES-3.jpg'