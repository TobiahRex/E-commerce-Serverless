export default () => {
  Webflow.require('ix').init([
    {
      slug: 'terms-slide-from-top',
      name: 'Slide from Top',
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
      slug: 'slide-from-left',
      name: ' Slide From Left',
      value: {
        style: { opacity: 0, x: '-150px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetTop: '25%',
            offsetBot: '10%',
            stepsA: [
              { wait: '500ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease-in-out 0, opacity 500ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [
              { wait: '500ms', opacity: 0, transition: 'opacity 500ms ease 0' },
              { transition: 'transform 200 ease 0', x: '-150px', y: '0px', z: '0px' },
            ],
          },
        ],
      },
    },
    {
      slug: 'slide-from-right',
      name: ' Slide From Right',
      value: {
        style: { opacity: 0, x: '150px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetTop: '25%',
            offsetBot: '10%',
            stepsA: [
              { wait: '500ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease-in-out 0, opacity 500ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [
              { wait: '500ms', opacity: 0, transition: 'opacity 500ms ease 0' },
              { transition: 'transform 200 ease 0', x: '150px', y: '0px', z: '0px' },
            ],
          },
        ],
      },
    },
  ]);
};
