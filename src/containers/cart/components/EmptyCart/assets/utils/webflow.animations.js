export default () => {
  Webflow.require('ix').init([
    {
      slug: 'empty-cart-animation',
      name: 'Cart Animation',
      value: {
        style: { opacity: 0, scaleX: 0.9, scaleY: 0.9, scaleZ: 1 },
        triggers: [
          {
            type: 'load',
            stepsA: [
              { wait: '500ms' },
              {
                opacity: 1,
                transition: 'opacity 450ms ease 0, transform 500ms ease 0',
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
      slug: 'empty-cart-slide-from-above',
      name: 'Slide from Above',
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
  ]);
};
