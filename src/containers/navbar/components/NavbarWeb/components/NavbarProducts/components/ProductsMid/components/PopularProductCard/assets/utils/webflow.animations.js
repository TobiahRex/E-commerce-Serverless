export default () => {
  Webflow.require('ix').init([
    {
      slug: 'nav-b-media-hover',
      name: 'Nav-B Media Hover ',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            selector: '.navbar-big__media-dropdown',
            stepsA: [{ display: 'flex' }, { opacity: 1, transition: 'opacity 350ms linear 0' }],
            stepsB: [{ opacity: 0, transition: 'opacity 100ms linear 0' }, { display: 'none' }],
          },
        ],
      },
    },
    {
      slug: 'nav-b-juice-hover',
      name: 'Nav-B Juice Hover',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            selector: '.navbar-big__juice-dropdown',
            stepsA: [{ display: 'flex' }, { opacity: 1, transition: 'opacity 350ms linear 0' }],
            stepsB: [{ opacity: 0, transition: 'opacity 100ms linear 0' }, { display: 'none' }],
          },
        ],
      },
    },
    {
      slug: 'nav-b-info-hover',
      name: 'Nav-B Info Hover',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            selector: '.navbar-big__info-dropdown',
            stepsA: [{ display: 'flex' }, { opacity: 1, transition: 'opacity 350ms linear 0' }],
            stepsB: [{ opacity: 0, transition: 'opacity 100ms linear 0' }, { display: 'none' }],
          },
        ],
      },
    },
    {
      slug: 'nav-b-cart-hover',
      name: 'Nav-B Cart Hover',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            selector: '.navbar-big__cart-dropdown',
            stepsA: [{ display: 'flex' }, { opacity: 1, transition: 'opacity 350ms ease-in-out 0' }],
            stepsB: [{ opacity: 0, transition: 'opacity 150ms linear 0' }, { display: 'none' }],
          },
        ],
      },
    },
    {
      slug: 'nav-b-juice-register-hover',
      name: 'Nav-B Juice Register Hover',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            stepsA: [
              { transition: 'transform 300ms ease-in-out 0', scaleX: 1.05, scaleY: 1.05, scaleZ: 1 },
            ],
            stepsB: [
              { transition: 'transform 300ms ease-in-out 0', scaleX: 1, scaleY: 1, scaleZ: 1 },
            ],
          },
        ],
      },
    },
    {
      slug: 'nav-b-media-social-hover',
      name: 'Nav-B Media Social Hover',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            stepsA: [
              {
                transition: 'transform 300ms ease-in-out 0',
                scaleX: 1.1500000000000001,
                scaleY: 1.1500000000000001,
                scaleZ: 1,
              },
            ],
            stepsB: [
              { transition: 'transform 300ms ease-in-out 0', scaleX: 1, scaleY: 1, scaleZ: 1 },
            ],
          },
        ],
      },
    },
    {
      slug: 'nav-b-logged-section-load',
      name: 'Nav-B Logged Section Load',
      value: {
        style: { opacity: 0, x: '30px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
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
      slug: 'nav-b-language-arrow-bounce',
      name: 'Nav-B Language Arrow Bounce',
      value: {
        style: {},
        triggers: [
          {
            type: 'load',
            loopA: true,
            stepsA: [
              { transition: 'transform 1s ease-in-out 0', x: '0px', y: '3px', z: '0px' },
              { transition: 'transform 1s ease-in-out 0', x: '0px', y: '-4px', z: '0px' },
            ],
            stepsB: [],
          },
        ],
      },
    },
  ]);
};
