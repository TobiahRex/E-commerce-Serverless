export default () => {
  Webflow.require('ix').init([
    {
      slug: 'fade-down',
      name: 'Fade Down',
      value: {
        style: { opacity: 0, x: '0px', y: '-100px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 200 ease 0',
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
      slug: 'fade-down-2',
      name: 'Fade Down 2',
      value: {
        style: { opacity: 0, x: '0px', y: '-100px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '400ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 200 ease 0',
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
      slug: 'fade-down-3',
      name: 'Fade Down 3',
      value: {
        style: { opacity: 0, x: '0px', y: '-100px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '600ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 200 ease 0',
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
      slug: 'fade-down-4',
      name: 'Fade Down 4',
      value: {
        style: { opacity: 0, x: '0px', y: '-100px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '800ms' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 200 ease 0',
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
      slug: 'fade-down-5',
      name: 'Fade Down 5',
      value: {
        style: { opacity: 0, x: '0px', y: '-100px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '1.2s' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 200 ease 0',
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
      slug: 'fade-down-6',
      name: 'Fade Down 6',
      value: {
        style: { opacity: 0, x: '0px', y: '-100px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '1.4s' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 200 ease 0',
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
      slug: 'pop-in',
      name: 'Pop In',
      value: {
        style: { opacity: 0, scaleX: 0.9, scaleY: 0.9, scaleZ: 1 },
        triggers: [
          {
            type: 'scroll',
            offsetBot: '20%',
            stepsA: [
              {
                wait: '500ms',
                opacity: 1,
                transition: 'transform 200 ease 0, opacity 200ms ease 0',
                scaleX: 1.03,
                scaleY: 1.03,
                scaleZ: 1,
              },
              { transition: 'transform 200 ease 0', scaleX: 1, scaleY: 1, scaleZ: 1 },
            ],
            stepsB: [],
          },
        ],
      },
    },
  ]);
};
