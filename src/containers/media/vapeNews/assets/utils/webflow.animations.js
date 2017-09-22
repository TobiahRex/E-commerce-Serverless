export default () => {
  Webflow.require('ix').init([ //eslint-disable-line
    {
      slug: 'user-story-fade-in',
      name: 'User Story Fade In',
      value: {
        style: { title: 'Move Right', opacity: 0, x: '-80px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            stepsA: [
              {
                opacity: 1,
                transition: 'opacity 750ms ease 0, transform 750ms ease 0',
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
      slug: 'user-story-fade-in-2',
      name: 'User Story Fade In 2',
      value: {
        style: { title: 'Move Right', opacity: 0, x: '-80px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            preload: true,
            stepsA: [
              { wait: '250ms' },
              {
                opacity: 1,
                transition: 'opacity 200 ease 0, transform 750ms ease 0',
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
      slug: 'user-story-fade-in-3',
      name: 'User Story Fade In 3',
      value: {
        style: { title: 'Move Right', opacity: 0, x: '-80px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            preload: true,
            stepsA: [
              { wait: '500ms' },
              {
                opacity: 1,
                transition: 'opacity 200 ease 0, transform 750ms ease 0',
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
  ]);
};
