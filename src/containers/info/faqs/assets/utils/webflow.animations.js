export default () => {
  Webflow.require('ix').init([
    {
      slug: 'hdr-slide-from-top',
      name: 'Hdr Slide From Top',
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
              {
                wait: '500ms',
                opacity: 0,
                transition: 'transform 450ms ease 0, opacity 500ms ease 0',
              },
              { transition: 'transform 200 ease 0', x: '-150px', y: '0px', z: '0px' },
            ],
          },
        ],
      },
    },
    {
      slug: 'hdr-slide-from-right',
      name: 'Hdr Slide From Right',
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
              {
                wait: '400ms',
                opacity: 0,
                transition: 'transform 400ms ease 0, opacity 400ms ease 0',
              },
              { transition: 'transform 200 ease 0', x: '150px', y: '0px', z: '0px' },
            ],
          },
        ],
      },
    },
  ]);
};
