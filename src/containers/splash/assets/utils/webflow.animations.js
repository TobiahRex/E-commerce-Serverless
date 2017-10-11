export default () => {
  Webflow.require('ix').init([
    {
      slug: 'hide-on-load',
      name: 'Hide On Load',
      value: { style: { display: 'none', opacity: 0 }, triggers: [] },
    },
    {
      slug: 'hide-on-load-2',
      name: 'Hide On Load 2',
      value: { style: { display: 'none', x: '0px', y: '250px', z: '0px' }, triggers: [] },
    },
    {
      slug: 'show-hide',
      name: 'Show & Hide',
      value: {
        style: {},
        triggers: [
          {
            type: 'click',
            selector: '.splash-expanding-how-steps',
            preserve3d: true,
            stepsA: [
              { display: 'block', height: '0px' },
              {
                wait: '1000ms',
                opacity: 1,
                height: 'auto',
                transition: 'height 5000ms ease-in-out 0, opacity 200 ease 0',
              },
            ],
            stepsB: [
              {
                wait: '0ms',
                opacity: 0,
                transition: 'transform 1000ms ease 0, opacity 200 ease 0',
                x: '0px',
                y: '500px',
                z: '0px',
              },
              { wait: '300ms', display: 'none', height: '0px' },
              { display: 'none', transition: 'transform 200 ease 0', x: '0px', y: '0px', z: '0px' },
            ],
          },
          {
            type: 'click',
            selector: '.how__curious-person',
            stepsA: [
              { wait: '800ms', opacity: 0, transition: 'opacity 500ms ease 0' },
              { display: 'none' },
            ],
            stepsB: [],
          },
          {
            type: 'click',
            selector: '.container__heading--moving',
            preserve3d: true,
            stepsA: [
              {
                transition: 'transform 350ms ease 0',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '0deg',
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'show-me',
      name: 'Show Me ',
      value: {
        style: {},
        triggers: [
          {
            type: 'click',
            selector: '.splash-expanding-how-steps',
            preserve3d: true,
            stepsA: [
              { display: 'block', height: '0px' },
              {
                wait: '1000ms',
                opacity: 1,
                height: 'auto',
                transition: 'height 5000ms ease-in-out 0, opacity 200 ease 0',
              },
            ],
            stepsB: [
              {
                wait: '0ms',
                opacity: 0,
                transition: 'transform 1000ms ease 0, opacity 200 ease 0',
                x: '0px',
                y: '500px',
                z: '0px',
              },
              { wait: '300ms', display: 'none', height: '0px' },
              { display: 'none', transition: 'transform 200 ease 0', x: '0px', y: '0px', z: '0px' },
            ],
          },
          {
            type: 'click',
            selector: '.how__curious-person',
            stepsA: [
              { wait: '800ms', opacity: 0, transition: 'opacity 500ms ease 0' },
              { display: 'none' },
            ],
            stepsB: [],
          },
          {
            type: 'click',
            selector: '.container__heading--moving',
            preserve3d: true,
            stepsA: [
              {
                transition: 'transform 350ms ease 0',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '0deg',
              },
            ],
            stepsB: [],
          },
          {
            type: 'hover',
            selector: '.show-me__button--alt-1',
            preserve3d: true,
            stepsA: [
              {
                opacity: 0.5,
                transition: 'transform 400ms ease 0, opacity 350ms ease 0',
                x: '0px',
                y: '-30px',
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
            selector: '.show-me__button--alt-2',
            preserve3d: true,
            stepsA: [
              {
                opacity: 0.5,
                transition: 'transform 400ms ease 0, opacity 350ms ease 0',
                x: '0px',
                y: '30px',
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
      slug: 'questionmark-tilt',
      name: 'Questionmark Tilt',
      value: {
        style: { rotateX: '0deg', rotateY: '0deg', rotateZ: '0deg' },
        triggers: [
          {
            type: 'click',
            selector: '.splash-expanding-how-steps',
            preserve3d: true,
            stepsA: [
              { display: 'block', height: '0px' },
              {
                wait: '1000ms',
                opacity: 1,
                height: 'auto',
                transition: 'height 5000ms ease-in-out 0, opacity 200 ease 0',
              },
            ],
            stepsB: [
              {
                wait: '0ms',
                opacity: 0,
                transition: 'transform 1000ms ease 0, opacity 200 ease 0',
                x: '0px',
                y: '500px',
                z: '0px',
              },
              { wait: '300ms', display: 'none', height: '0px' },
              { display: 'none', transition: 'transform 200 ease 0', x: '0px', y: '0px', z: '0px' },
            ],
          },
          {
            type: 'load',
            loopA: true,
            stepsA: [
              { wait: '1s' },
              {
                transition: 'transform 500ms ease-in-out 0',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '25deg',
              },
              { wait: '200ms' },
              {
                transition: 'transform 500ms ease-in-out 0',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '-5deg',
              },
            ],
            stepsB: [],
          },
          {
            type: 'click',
            selector: '.how__curious-person',
            stepsA: [{ opacity: 0, transition: 'opacity 800ms ease 0' }, { display: 'none' }],
            stepsB: [],
          },
          {
            type: 'click',
            stepsA: [
              {
                transition: 'transform 350ms ease 0',
                rotateX: '0deg',
                rotateY: '0deg',
                rotateZ: '0deg',
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'button-load-hover',
      name: 'Button Load & Hover',
      value: {
        style: { opacity: 0 },
        triggers: [
          {
            type: 'hover',
            selector: '.box__button--alt',
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
                transition: 'opacity 350ms ease 0, transform 400ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
          },
          {
            type: 'hover',
            selector: '.box__button--alt-2',
            descend: true,
            preserve3d: true,
            stepsA: [
              {
                opacity: 0.5,
                transition: 'opacity 350ms ease 0, transform 400ms ease 0',
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
          {
            type: 'load',
            stepsA: [{ wait: '1500ms' }, { opacity: 1, transition: 'opacity 2500ms ease 0' }],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'large-button-hover',
      name: 'Large Button Hover',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            selector: '.large__button--alt',
            descend: true,
            preserve3d: true,
            stepsA: [
              {
                opacity: 0.5,
                transition: 'transform 400ms ease 0, opacity 350ms ease 0',
                x: '250px',
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
      slug: 'flyout-footer-button-hover',
      name: 'Flyout Footer Button Hover ',
      value: {
        style: {},
        triggers: [
          {
            type: 'hover',
            selector: '.subscribe-content__button--alt',
            descend: true,
            preserve3d: true,
            stepsA: [
              {
                opacity: 0.5,
                transition: 'transform 400ms ease 0, opacity 350ms ease 0',
                x: '200px',
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
      slug: 'staggered-load',
      name: 'Staggered Load',
      value: {
        style: { opacity: 0, x: '0px', y: '-45px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              {
                opacity: 1,
                transition: 'transform 1000ms ease 0, opacity 1000ms ease 0',
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
      slug: 'staggered-load-2',
      name: 'Staggered Load 2',
      value: {
        style: { opacity: 0, x: '0px', y: '-45px', z: '0px' },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '900ms' },
              {
                opacity: 1,
                transition: 'transform 1000ms ease 0, opacity 1000ms ease 0',
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
      slug: 'fade-in-on-load',
      name: 'Fade In On Load',
      value: {
        style: { opacity: 0 },
        triggers: [
          {
            type: 'load',
            stepsA: [{ opacity: 1, transition: 'opacity 1000ms ease 0' }],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'fade-on-scroll',
      name: 'Fade on Scroll',
      value: {
        style: { opacity: 0 },
        triggers: [
          {
            type: 'scroll',
            offsetTop: '20%',
            offsetBot: '10%',
            stepsA: [
              {
                wait: '500ms',
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
              },
            ],
            stepsB: [{ opacity: 0, transition: 'transform 500ms ease 0, opacity 500ms ease 0' }],
          },
        ],
      },
    },
    {
      slug: 'fade-on-scroll-first-how-section',
      name: 'Fade on Scroll (First How Section)',
      value: {
        style: {},
        triggers: [
          {
            type: 'scroll',
            offsetTop: '20%',
            offsetBot: '10%',
            stepsA: [],
            stepsB: [
              { opacity: 0, transition: 'transform 500ms ease 0, opacity 500ms ease 0' },
              { wait: '1500ms' },
              { opacity: 1, transition: 'opacity 200 ease 0' },
            ],
          },
        ],
      },
    },
    {
      slug: 'fade-out-on-scroll',
      name: 'Fade Out on Scroll',
      value: {
        style: {},
        triggers: [
          {
            type: 'scroll',
            offsetTop: '20%',
            offsetBot: '10%',
            stepsA: [],
            stepsB: [{ opacity: 0, transition: 'transform 500ms ease 0, opacity 500ms ease 0' }],
          },
        ],
      },
    },
    {
      slug: 'slide-on-scroll-left',
      name: 'Slide On Scroll Left',
      value: {
        style: { display: 'block', opacity: 0, x: '-100px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetTop: '20%',
            offsetBot: '10%',
            stepsA: [
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [
              {
                wait: '500ms',
                opacity: 0,
                transition: 'transform 800ms ease 0, opacity 500ms ease 0',
              },
              { transition: 'transform 200 ease 0', x: '-100px', y: '0px', z: '0px' },
            ],
          },
        ],
      },
    },
    {
      slug: 'slide-on-scroll-right',
      name: 'Slide On Scroll Right',
      value: {
        style: { opacity: 0, x: '100px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetTop: '20%',
            offsetBot: '10%',
            stepsA: [
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 700ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
              },
            ],
            stepsB: [
              {
                wait: '500ms',
                opacity: 0,
                transition: 'transform 800ms ease 0, opacity 500ms ease 0',
              },
              { transition: 'transform 200 ease 0', x: '100px', y: '0px', z: '0px' },
            ],
          },
        ],
      },
    },
    {
      slug: 'flyout-footer',
      name: 'Flyout Footer',
      value: {
        style: {},
        triggers: [
          {
            type: 'scroll',
            selector: '.flyout__footer',
            offsetTop: '20%',
            offsetBot: '10%',
            preserve3d: true,
            stepsA: [
              { display: 'flex' },
              { transition: 'transform 700ms ease 0', x: '0px', y: '0px', z: '0px' },
            ],
            stepsB: [
              { transition: 'transform 300ms ease 0', x: '0px', y: '250px', z: '0px' },
              { display: 'none' },
            ],
          },
        ],
      },
    },
    {
      slug: 'fastest-delivery-scroll',
      name: 'Fastest Delivery Scroll',
      value: {
        style: { opacity: 0.2, x: '-1600px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetBot: '30%',
            stepsA: [
              {
                opacity: 0.6,
                transition: 'transform 300ms ease 0, opacity 300ms ease 0',
                x: '1600px',
                y: '0px',
                z: '0px',
              },
              {
                opacity: 0,
                transition: 'transform 1ms ease 0, opacity 200ms ease 0',
                x: '-1600px',
                y: '0px',
                z: '0px',
              },
              {
                opacity: 0.8,
                transition: 'transform 350ms ease 0, opacity 350ms ease 0',
                x: '1600px',
                y: '0px',
                z: '0px',
              },
              {
                opacity: 0,
                transition: 'transform 1ms ease 0, opacity 200ms ease 0',
                x: '-1600px',
                y: '0px',
                z: '0px',
              },
              {
                opacity: 1,
                transition: 'transform 400ms ease 0, opacity 400ms ease 0',
                x: '1600px',
                y: '0px',
                z: '0px',
              },
              {
                opacity: 0,
                transition: 'transform 1ms ease 0, opacity 200ms ease 0',
                x: '-1600px',
                y: '0px',
                z: '0px',
              },
              {
                opacity: 1,
                transition: 'transform 750ms ease 0, opacity 750ms ease-in-out 0',
                x: '30px',
                y: '0px',
                z: '0px',
              },
              {
                opacity: 1,
                transition: 'transform 250ms ease 0, opacity 250ms ease-in-out 0',
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
      slug: 'fastest-delivery-fade-in-right',
      name: 'Fastest Delivery Fade In Right',
      value: {
        style: { opacity: 0, x: '80px', y: '0px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetBot: '30%',
            stepsA: [
              { wait: '2.5s' },
              {
                opacity: 1,
                transition: 'transform 500ms ease 0, opacity 500ms ease 0',
                x: '0px',
                y: '0px',
                z: '0px',
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'fade-up',
      name: 'Fade Up',
      value: {
        style: { opacity: 0, x: '0px', y: '80px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetBot: '1%',
            stepsA: [
              { wait: '2.5s' },
              {
                opacity: 1,
                transition: 'opacity 500ms ease 0, transform 500ms ease 0',
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
      slug: 'close-popup',
      name: 'Close Popup',
      value: {
        style: {},
        triggers: [
          {
            type: 'click',
            selector: '.flyout__footer',
            preserve3d: true,
            stepsA: [
              {
                display: 'none',
                opacity: 0,
                transition: 'transform 200 ease 0, opacity 200 ease 0',
                x: '0px',
                y: '100px',
                z: '0px',
              },
            ],
            stepsB: [],
          },
        ],
      },
    },
    {
      slug: 'fade-up-2',
      name: 'Fade Up 2',
      value: {
        style: { opacity: 0, x: '0px', y: '80px', z: '0px' },
        triggers: [
          {
            type: 'scroll',
            offsetBot: '50%',
            stepsA: [
              { wait: '7s', transition: 'transform 200 ease 0' },
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
  ]);
};
