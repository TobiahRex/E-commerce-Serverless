export default () => {
  Webflow.require('ix').init([
    {
      slug: 'button-hover',
      name: 'Button Hover',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            selector: '.button--alt',
            descend: true,
            preserve3d: true,
            stepsA: [
              {
                opacity: 0.5,
                transition: 'transform 400ms ease 0, opacity 350ms ease 0',
                x: '-130px',
                y: '0px',
                z: '0px',
              },
              { display: 'none' },
            ],
            stepsB: [
              { display: 'block' },
              {
                opacity: 1,
                transition: 'transform 400ms ease 0, opacity 350ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
          },
          {
            type: 'hover',
            selector: '.button--alt-2',
            descend: true,
            preserve3d: true,
            stepsA: [
              {
                opacity: 0.5,
                transition: 'transform 400ms ease 0, opacity 350ms ease 0',
                x: '130px',
                y: '0px',
                z: '0px',
              },
              { display: 'none' },
            ],
            stepsB: [
              { display: 'block' },
              {
                opacity: 1,
                transition: 'transform 400ms ease 0, opacity 350ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
          },
        ],
      },
    },
    {
      slug: 'slide-from-above',
      name: 'Slide From Above',
      value: {
        style: { x: '0px', y: '-100px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [{ transition: 'transform 500ms ease 0', x: '0px', y: '0px', z: '0px' }],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'contactus-fade-in',
      name: 'Fade In',
      value: {
        style: { opacity: 0 },
        triggers: [
          {
            type: 'load',
            stepsA: [{ wait: '500ms' }, { opacity: 1, transition: 'opacity 500ms ease 0' }],
            stepsB: [],
          },
        ],
      },
    },
  ]);
};
