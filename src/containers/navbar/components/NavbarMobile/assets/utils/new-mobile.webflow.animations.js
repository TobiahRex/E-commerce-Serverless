export default () => {
  Webflow.require('ix').init([
    {
      slug: 'mobile-navbar-animation',
      name: 'mobile-navbar-animation',
      value: {
        style: {},
        triggers: [
          {
            type: 'click',
            selector: '.hamburger-btn-mid',
            stepsA: [{ opacity: 0, transition: 'opacity 350ms ease 0' }],
            stepsB: [{ opacity: 1, transition: 'opacity 200 ease 0' }],
          },
          {
            type: 'click',
            selector: '.hamburger-btn-top',
            preserve3d: true,
            stepsA: [
              {
                transition: 'transform 350ms ease 0',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '45deg',
                x: '3px',
                y: '5px',
                z: '0px',
              },
            ],
            stepsB: [
              {
                transition: 'transform 350ms ease 0',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '0deg',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
          },
          {
            type: 'click',
            selector: '.hamburger-btn-bottom',
            preserve3d: true,
            stepsA: [
              {
                transition: 'transform 350ms ease 0',
                x: '-1px',
                y: '-8px',
                z: '0px',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '-45deg',
              },
            ],
            stepsB: [
              {
                transition: 'transform 350ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '0deg',
              },
            ],
          },
          {
            type: 'click',
            selector: '.navbar-expanded__container',
            preserve3d: true,
            stepsA: [{ transition: 'transform 200 ease 0', x: '270px', y: '0px', z: '0px' }],
            stepsB: [{ transition: 'transform 200 ease 0', x: '0px', y: '0px', z: '0px' }],
          },
        ],
      },
    },
    {
      slug: 'mobile-navbar-ppic-fade-in',
      name: 'mobile-navbar-ppic-fade-in',
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
      slug: 'mobile-navbar-authorization-change-enter',
      name: 'mobile-navbar-authorization-change__enter',
      value: {
        style: { opacity: 0, x: '200px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              {
                opacity: 1,
                transition: 'opacity 400ms ease 0, transform 400ms ease 0',
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
      slug: 'mobile-navbar-authorization-change-exit',
      name: 'mobile-navbar-authorization-change__exit',
      value: {
        style: {},
        triggers: [
          {
            type: 'load',
            stepsA: [
              {
                opacity: 0,
                transition: 'opacity 400ms ease 0, transform 400ms ease 0',
                x: '-200px',
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
