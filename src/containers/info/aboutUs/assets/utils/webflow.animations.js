export default () => {
  Webflow.require('ix').init([
    {
      slug: 'aboutus-hdr-slide-from-top',
      name: 'About Hdr Slide From Top',
      value: {
        style: { x: '0px', y: '-100px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [{ transition: 'transform 450ms ease 0', x: '0px', y: '0px', z: '0px' }],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'aboutus-fade-in',
      name: 'Fade In',
      value: {
        style: { opacity: 0, x: '0px', y: '-80px', z: '0px' },
        triggers: [
          {
            type: 'load',
            preload: true,
            stepsA: [
              { wait: '250ms' },
              {
                opacity: 1,
                transition: 'opacity 1s ease 0, transform 1s ease-out 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'aboutus-fade-in-2',
      name: 'Fade In 2',
      value: {
        style: { opacity: 0, x: '0px', y: '-80px', z: '0px' },
        triggers: [
          {
            type: 'load',
            preload: true,
            stepsA: [
              { wait: '500ms' },
              {
                opacity: 1,
                transition: 'opacity 1s ease 0, transform 1s ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'slide-in-phils-card',
      name: 'Slide In Phils Card',
      value: {
        style: { opacity: 0, x: '-100px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            preload: true,
            offsetTop: '40%',
            stepsA: [
              { wait: '500ms' },
              {
                opacity: 1,
                transition: 'transform 1000ms ease-in-out 0, opacity 1000ms ease-in-out 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [{ opacity: 0, transition: 'opacity 200 ease 0' }],
          },
        ],
      },
    },
    {
      slug: 'slide-in-lds-card-2',
      name: 'Slide In LDs Card 2',
      value: {
        style: { opacity: 0, x: '-80px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            preload: true,
            offsetTop: '40%',
            offsetBot: '20%',
            stepsA: [
              { wait: '750ms' },
              {
                opacity: 1,
                transition: 'transform 1000ms ease-in-out 0, opacity 1000ms ease-in-out 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [{ opacity: 0, transition: 'opacity 500ms ease 0' }],
          },
        ],
      },
    },
    {
      slug: 'slide-in-tobys-card',
      name: 'Slide In Tobys Card',
      value: {
        style: { opacity: 0, x: '-60px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            preload: true,
            offsetTop: '40%',
            offsetBot: '20%',
            stepsA: [
              { wait: '1000ms' },
              {
                opacity: 1,
                transition: 'transform 1000ms ease-in-out 0, opacity 1000ms ease-in-out 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [{ opacity: 0, transition: 'opacity 500ms ease-in-out 0' }],
          },
        ],
      },
    },
    {
      slug: 'slide-in-brians-card',
      name: 'Slide In Brians Card',
      value: {
        style: { opacity: 0, x: '-40px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            preload: true,
            offsetTop: '40%',
            stepsA: [
              { wait: '1250ms' },
              {
                opacity: 1,
                transition: 'transform 1000ms ease-in-out 0, opacity 1000ms ease-in-out 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [{ opacity: 0, transition: 'opacity 500ms ease-in-out 0' }],
          },
        ],
      },
    },
  ]);
};
